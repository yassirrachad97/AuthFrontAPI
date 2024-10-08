import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Form from './Form';
import '../styles/auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            console.log({ email, password, rememberMe });
        } else {
            setError('Veuillez remplir tous les champs.');
        }
    };

    const inputs = [
        {
            type: "email",
            placeholder: "Email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            icon: <MdEmail className='icon' />,
        },
        {
            type: "password",
            placeholder: "Password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            icon: <FaLock className='icon' />,
        },
       
    ];

    return (
        <div className="wrapper login-page">
            <div className="form-box login">
                
                {error && <p className="error-message">{error}</p>}
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
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
