import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { validateEmail, validatePassword } from './Validation';
import OTPInput from './OTPInput';
import Form from './Form';
import '../styles/auth.css';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showOTP, setShowOTP] = useState(false); 
    const [token, setToken] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const verificationStatus = searchParams.get('verified');
        if (verificationStatus === 'success') {
            toast.success('Votre email a été vérifié avec succès. Veuillez vous connecter.');
        } else if (verificationStatus === 'expired') {
            toast.warning('Le lien de vérification a expiré. Un nouveau lien a été envoyé à votre adresse email.');
        }
    }, [location.search]);
    
    const handleBlur = (type) => {

        if (type === 'email') {
            if (!validateEmail(email)) {
                setEmailError('Veuillez entrer un email valide.');
            } else {
                setEmailError('');
            }
        } else if (type === 'password') {
            if (!validatePassword(password)) {
                setPasswordError('Le mot de passe doit comporter au moins 6 caractères.');
            } else {
                setPasswordError('');
            }
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;
        
        if (!validateEmail(email)) {
            setEmailError('Veuillez entrer un email valide.');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!validatePassword(password)) {
            setPasswordError('Le mot de passe doit comporter au moins 6 caractères.');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            try {
                const response = await axios.post('http://localhost:3000/api/auth/login', {
                    email,
                    password,
                });

                const data = response.data;

                toast.success(data.message);

                if (data.message === 'OTP sent to your email. Please verify to proceed.') {
                    
                    setShowOTP(true);
                    setToken(data.token);
                }  else {
                  
                    navigate('/home');  
                }
            } catch (error) {
               
                if (error.response && error.response.data) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error('Une erreur est survenue, veuillez réessayer plus tard.');
                }
            }
        }
    };

    const handleOTPSubmit = async (otp) => {
        try {
            const response = await axios.post('http://localhost:3000/api/auth/verify-otp', {
                email,
                otp,
            });

            const data = response.data;
            if (data.token) {
                // Save token and navigate
                localStorage.setItem('token', data.token);
                toast.success('OTP vérifié avec succès');
                navigate('/home');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Une erreur est survenue, veuillez réessayer plus tard.');
            }
        }
    };
    const inputs = [
        {
            type: "email",
            placeholder: "Email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            onBlur: () => handleBlur('email'), 
            icon: <MdEmail className='icon' />,
            errorMessage: emailError
        },
        {
            type: "password",
            placeholder: "Password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            onBlur: () => handleBlur('password'),
            icon: <FaLock className='icon' />,
            errorMessage: passwordError 
        },
       
    ];

    return (
        <div className="wrapper login-page">
            <div className="form-box login">
            {showOTP ? (
                    <OTPInput email={email} onSubmit={handleOTPSubmit} />
                ) : (
                <Form onSubmit={handleSubmit} inputs={inputs} title="Login">
                    <div className="remember-forgot">
                        <label>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            Remember Me
                        </label>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </Form>
)}
                <div className="register-link">
                    <p>
                        Dont have an account? <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
