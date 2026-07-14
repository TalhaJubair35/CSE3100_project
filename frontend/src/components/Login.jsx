import React, { useEffect, useState } from 'react';
import { loginStyles } from '../assets/dummyStyles';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';
import logo from '../assets/logocar.png'
import {toast,ToastContainer} from 'react-toastify';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(true);
    }, [])
    const handleChange = e => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("login details", credentials)
        localStorage.setItem("authToken", "your-authentication-token-here")
        toast.success('Login Successful! Welcome back', {
            position: 'top-right',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'colored',
            onClose: () => {
                const redirectPath ='/';
                navigate(redirectPath, { replace: true });
            }
        });
    }
    const togglePasswordVisibility = () => {

    }

    return (
        <div className={loginStyles.pageContainer}>
            <div className={loginStyles.animatedBackground.base}>
                <div className={`${loginStyles.animatedBackground.orb1} ${isActive ? 'translate-x-20 translate-y-10' : ''}`} />
                <div className={`${loginStyles.animatedBackground.orb2} ${isActive ? '-translate-x-20 -translate-y-10' : ''}`} />
                <div className={`${loginStyles.animatedBackground.orb3} ${isActive ? '-translate-x-10 translate-y-20' : ''}`} />
            </div>
            <a href="/" className={loginStyles.backButton}>
                <FaArrowLeft className='text-sm sm:text-base'></FaArrowLeft>
                <span className='font medium text-xs sm:text-sm'>
                    Back to home
                </span>
            </a>
            {/* login card */}
            <div className={`${loginStyles.loginCard.container} ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
                <div className={loginStyles.loginCard.card}>
                    <div className={loginStyles.loginCard.decor1}></div>
                    <div className={loginStyles.loginCard.decor2}></div>

                    {/* header  */}
                    <div className={loginStyles.loginCard.headerContainer}>
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src={logo}
                                alt="logo"
                                className="h-[2em] w-auto"
                            />

                            <span className="mt-2 text-xl font-bold tracking-wider text-white">
                                CarWheels
                            </span>
                        </div>
                    </div>
                    <h1 className={loginStyles.loginCard.title}>
                        Premium Drive
                    </h1>
                    <p className={loginStyles.loginCard.subtitle}>
                        LUXURY MOBILITY EXPERIENCE
                    </p>
                    <form onSubmit={handleSubmit} className={loginStyles.form.container}>
                        <div className={loginStyles.form.inputContainer}>
                            <div className={loginStyles.form.inputWrapper}>
                                <div className={loginStyles.form.inputIcon}>
                                    <FaUser></FaUser>
                                </div>
                                <input type="email" name='email' value={credentials.email} onChange={handleChange} placeholder='Enter you email' required className={loginStyles.form.input} />
                            </div>
                        </div>
                        <div className={loginStyles.form.inputContainer}>
                            <div className={loginStyles.form.inputWrapper}>
                                <div className={loginStyles.form.inputIcon}>
                                    <FaUser></FaUser>
                                </div>
                                <input type={showPassword ? "text" : "password"} name='password' value={credentials.password} onChange={handleChange} placeholder='Enter you Pass' required className={loginStyles.form.input} />
                                <div className={loginStyles.form.passwordToggle}>
                                    {
                                        showPassword ?
                                            <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </div>
                            </div>
                        </div>
                        <button type='submit' className={loginStyles.form.submitButton}>
                                    <span className={loginStyles.form.buttonText}>
                                        Access Premium garage
                                    </span>
                                    <div className={loginStyles.form.buttonHover}></div>
                        </button>
                    </form>
                    <div className={loginStyles.signupSection}>
                        <p className={loginStyles.signupText}>Dont have and acc?</p>
                        <a href="/signup" className={loginStyles.signupButton}> Create Account</a>
                    </div>
                </div>

            </div>
            <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastStyle={{
          backgroundColor: '#fb923c',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(249, 115, 22, 0.25)'
        }}
      />

        </div>
    );
};

export default Login;