import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signupStyles } from '../assets/dummyStyles';
import { FaArrowLeft, FaCheck, FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import logo from '../assets/logocar.png'
import { toast, ToastContainer } from 'react-toastify';
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    setIsActive(true);
  }, [])
  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      toast.error('Please accet the terms and error', { theme: 'dark' })
      return;
    }
    toast.success('Account created successfully! Welcome to PremiumDrive', {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
      onClose: () => navigate('/login')
    });
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  }

  return (
    <div className={signupStyles.pageContainer}>
      <div className={signupStyles.animatedBackground.base}>
        <div
          className={`${signupStyles.animatedBackground.orb1} ${isActive
            ? "translate-x-10 sm:translate-x-20 translate-y-5 sm:translate-y-10"
            : ""
            }`}
        ></div>
        <div
          className={`${signupStyles.animatedBackground.orb2} ${isActive
            ? "-translate-x-10 sm:-translate-x-20 -translate-y-5 sm:-translate-y-10"
            : ""
            }`}
        ></div>
        <div
          className={`${signupStyles.animatedBackground.orb3} ${isActive
            ? "-translate-x-5 sm:-translate-x-10 translate-y-10 sm:translate-y-20"
            : ""
            }`}
        ></div>
      </div>
      <a href="/" className={signupStyles.backButton}>
        <FaArrowLeft className='text-xs sm:text-sm group-hover:-translate-x-1 transition-transform'></FaArrowLeft>
        <span className='font-medium text-xs sm:text-sm'>Back to Home</span>
      </a>
      <div className={`${signupStyles.signupCard.container} ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
        <div className={signupStyles.signupCard.card} style={{
          boxShadow: "0 15px 35px rgba(0 ,0 ,0.2)",
          borderRadius: "24px",
        }}>
          <div className={signupStyles.signupCard.decor1}>

          </div>
          <div className={signupStyles.signupCard.decor2}>

          </div>
          <div className={signupStyles.signupCard.headerContainer}>
            <div className={signupStyles.signupCard.logoContainer}>
              <div className={signupStyles.signupCard.logoText}>
                <img src={logo} alt="logo" className='h-[1.2em] w-auto block object-contain'
                  style={{
                    display: 'block'
                  }} />
                <span className='font-bold tracking-wider text-white'>
                  CarWheels
                </span>
              </div>
            </div>
            <h1 className={signupStyles.signupCard.title}>Join Premiun Drive</h1>
            <p className={signupStyles.signupCard.subtitle}></p>
          </div>
          {/* form  */}
          <form onSubmit={handleSubmit} className={signupStyles.form.container}>
            <div className={signupStyles.form.inputContainer}>
              <div className={signupStyles.form.inputWrapper}>
                <div className={signupStyles.form.inputIcon}>
                  <FaUser className='text-sm sm:text-base'></FaUser>
                </div>
                <input
                  type="text"
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className={signupStyles.form.input}
                  placeholder='Your Full Name'
                  required style={{ borderRadius: "16px" }} />
              </div>
            </div>

            <div className={signupStyles.form.inputContainer}>
              <div className={signupStyles.form.inputWrapper}>
                <div className={signupStyles.form.inputIcon}>
                  <FaEnvelope className='text-sm sm:text-base'></FaEnvelope>
                </div>
                <input type="email" name='email' value={formData.email} onChange={handleChange} className={signupStyles.form.input} placeholder='email' required style={{ borderRadius: "16px" }} />
              </div>
            </div>

            <div className={signupStyles.form.inputContainer}>
              <div className={signupStyles.form.inputWrapper}>
                <div className={signupStyles.form.inputIcon}>
                  <FaLock className='text-sm sm:text-base'></FaLock>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password' value={formData.password}
                  onChange={handleChange} className={signupStyles.form.input}
                  placeholder='Password'
                  required style={{ borderRadius: "16px" }} />
                <div onClick={togglePasswordVisibility} className={signupStyles.form.passwordToggle}>
                  {showPassword ? <FaEyeSlash className='text-sm sm:text-base'></FaEyeSlash> : <FaEye className='text-sm sm:text-base'></FaEye>}
                </div>
              </div>
            </div>
            {/* terms oand cond */}
            <div className='flex items-start mt-2 sm:mt3 md:mt-4'>
              <div className='flex items-center h-5 mt-0.5 sm:mt-1'> 
                  <input 
                  type="checkbox"  
                  name="terms"  
                  id="terms" 
                  checked={acceptedTerms}
                  onChange={signupStyles.form.checkbox}
                  style={{
                    boxShadow:'none'
                  }} />
              </div>
              <div className='ml-2 sm:ml-3 text-xs sm:text-xs'>
                <label htmlFor="terms" className={signupStyles.form.checkboxLabel}>
                  I agree to the {" "}
                  <span className={signupStyles.form.checkboxLink}> terms and condition</span>
                </label>
              </div>
            </div>
            <button
             style={{
              borderRadius:"16px",
              boxShadow:"0 5px 15px rgba(8,90,20,0.6)"
             }}
             type='submit' 
             className={signupStyles.form.submitButton}>
              <span className={signupStyles.form.buttonText}>
                <FaCheck className='text-white text-sm sm:text-base md:text-lg'></FaCheck>
                Create Account
              </span>
              <div className={signupStyles.form.buttonHoverbut}></div>
             </button>
          </form>
          <div className={signupStyles.signinSection}>
            <p className={signupStyles.signinText}>
              Already have an account?
            </p>
            <a href="/login" className={signupStyles.signinButton}>Log in to your account</a>
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
    theme="dark"
    toastStyle={{
      backgroundColor: "#fb923c",
      color: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 4px 20px rgba(245,124,0,0.18)",
      fontFamily: "'Montserrat', sans-serif",
    }}
  />

  {/* Font Import */}
  <style>
    {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
          body { font-family: 'Montserrat', sans-serif; }
        `}
  </style>
    </div>

  )
}

export default Signup;
