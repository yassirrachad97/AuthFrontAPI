import React, { useState } from 'react';
import axios from 'axios';
import { MdEmail } from "react-icons/md";
import { FaLock, FaUser, FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { validateUsername, validatePhoneNumber, validateEmail, validatePassword } from './Validation';
import Form from './Form';
import '../styles/auth.css'; 
import { toast } from 'react-toastify';

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhone] = useState('');
    
    

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phoneError, setPhoneError] = useState('');
  
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let valid = true;
        
        if (!validateUsername(username)) {
            setUsernameError('Veuillez entrer un nom d\'utilisateur valide.');
            valid = false;
        } else {
            setUsernameError('');
        }
    
        if (!validatePhoneNumber(phoneNumber)) {
            setPhoneError('Veuillez entrer un numéro de téléphone valide.');
            valid = false;
        } else {
            setPhoneError('');
        }
    
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
                const response = await axios.post('http://localhost:3000/api/auth/register', {
                    username,
                    email,
                    password,
                    phoneNumber
                });

               

                toast.success(response.data.message || 'Inscription réussie!');
                setUsername('');
                setEmail('');
                setPassword('');
                setPhone('');
       
            } catch (error) {
                if (error.response && error.response.data) {
                   
                    toast.error(error.response.data.message || 'Une erreur s\'est produite.');
                } else {
                   
                    toast.error('Erreur de connexion au serveur.');
                }
              
            }
        }
    };

    const inputs = [
        {
            type: "text",
            placeholder: "userName",
            value: username,
            onChange: (e) => setUsername(e.target.value),
            icon: <FaUser className='icon' />,
            errorMessage: usernameError 
            
        },
        {
            type: "email",
            placeholder: "Email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            icon: <MdEmail className='icon' />,
            errorMessage: emailError
        },
        {
            type: "password",
            placeholder: "password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            icon: <FaLock className='icon' />,
            errorMessage: passwordError
        },
        {
            type: "tel",
            placeholder: "phoneNumber",
            value: phoneNumber,
            onChange: (e) => setPhone(e.target.value),
            icon: <FaPhone className='icon' />,
            errorMessage: phoneError
        }
    ];

    return (
        <div className="wrapper register-page">
          <div className="form-box register">
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
