import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        const resultAction = await dispatch(login({ email, password }));
        setLoading(false);

        if (login.fulfilled.match(resultAction)) {
            const token = resultAction.payload.authorisation.token; // Access the token correctly
            Cookies.set('authToken', token, { expires: 1 }); // Store token in cookies
            navigate('/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="w-full bg-white shadow sm:rounded-sm flex min-h-screen justify-center flex-1">
            <div className="flex flex-col md:flex-row items-center justify-between w-full p-6 sm:p-12">
                <div>
                    <img src="https://img.freepik.com/vecteurs-libre/gens-multiculturels-debout-ensemble_74855-6583.jpg" className="w-full h-full mx-auto" alt="People" />
                </div>
                <div className="mt-12 md:mt-0 flex flex-col items-center flex-grow">
                    <h1 className="text-2xl xl:text-3xl font-extrabold">Admin Login</h1>
                    {error && <p className="text-red mt-2">{error}</p>}
                    <div className="w-full flex-1 mt-8">
                        <div className="mx-auto max-w-xs">
                            <input
                                className="w-full px-8 py-4 rounded-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                className="w-full px-8 py-4 rounded-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                onClick={handleLogin}
                                className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-sm hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span>Login...</span>
                                ) : (
                                    <span className="ml-3">Log In</span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;