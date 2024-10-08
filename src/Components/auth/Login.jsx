import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { validateEmail, validatePassword } from './Validation';
import Form from './Form';
import '../styles/auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    
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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        
        if (!validateEmail(email)) {
            setEmailError('Veuillez entrer un email valide.');
            valid = false;
        } else {
            setEmailError('');
        }

        // Validation Password
        if (!validatePassword(password)) {
            setPasswordError('Le mot de passe doit comporter au moins 6 caractères.');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            console.log({ email, password, rememberMe });
           
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
