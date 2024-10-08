import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth.js';
// Import assets
import User from "../../public/assets/user.png";
import Padlock from "../../public/assets/padlock.png";

const LoginForm: React.FC = () => {
    const [niu, setNiu] = useState<number | string>('');
    const [sandi, setSandi] = useState<string>('');
    const { isAuthenticated, loading, error, login } = useAuth();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('button clicked!')
        await login(Number(niu), sandi);
    };

    return (
        <form className='flex flex-col gap-12 w-1/3' onSubmit={handleSubmit}>
            <div className='relative flex items-center justify-center'>
                <input
                    type="number"
                    placeholder="niu"
                    value={niu}
                    onChange={(e) => setNiu(e.target.value)}
                    className='h-14 p-2 rounded-full bg-[#242424] text-white text-center relative duration-700 w-full'
                    required
                />
                <span className='absolute -right-1 bg-slate-50 rounded-full'>
                    <img src={User} className='w-12 h-12 m-2' alt='user' />
                </span>
            </div>
            <div className='relative flex justify-center items-center'>
                <input
                    type="password"
                    placeholder="Password"
                    value={sandi}
                    onChange={(e) => setSandi(e.target.value)}
                    className='h-14 p-2 rounded-full bg-[#242424] text-white text-center relative duration-700 w-full'
                    required
                />
                <span className='absolute -left-1 bg-slate-50 rounded-full'>
                    <img src={Padlock} className='w-12 h-12 m-2 ' alt='padlock' />
                </span>
            </div>
            <button type="submit" className='w-full self-center p-2.5 rounded-full bg-[#fff] text-center font-bold text-2xl hover:scale-105 transition-all duration-150' disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {isAuthenticated && <p>Login successful!</p>}
        </form>
    );
}

export default LoginForm;
