import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaLock, FaUser, FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Form from './Form';
import '../styles/auth.css'; 

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!termsAccepted) {
            setError('Vous devez accepter les termes et conditions.');
            return;
        }

        if (username && email && password && phone) {
            console.log({ username, email, password, phone });
            setError('');
        } else {
            setError('Veuillez remplir tous les champs.');
        }
    };

    const inputs = [
        {
            type: "text",
            placeholder: "userName",
            value: username,
            onChange: (e) => setUsername(e.target.value),
            icon: <FaUser className='icon' />,
        },
        {
            type: "email",
            placeholder: "Email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            icon: <MdEmail className='icon' />,
        },
        {
            type: "password",
            placeholder: "password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            icon: <FaLock className='icon' />,
        },
        {
            type: "tel",
            placeholder: "phoneNumber",
            value: phone,
            onChange: (e) => setPhone(e.target.value),
            icon: <FaPhone className='icon' />,
        }
    ];

    return (
        <div className="wrapper register-page">
          <div className="form-box register">
            
            {error && <p className="error-message">{error}</p>}
            <Form onSubmit={handleSubmit} inputs={inputs} title="Register"/>
            
            <div className="register-link">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      );
};

export default Register;
