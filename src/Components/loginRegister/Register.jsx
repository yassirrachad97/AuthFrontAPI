import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLock ,FaUser, FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './auth.css';
const Register = () =>  {
    return (
        <div className='wrapper register-page'>
            <div className='form-box l'>
                <form action="">
                    <h1>Register</h1>
                    <div className='input-box'>
                        <input 
                            type="text" 
                            placeholder='username' 
                            required 
                        />
                        <FaUser  className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input 
                            type="email" 
                            placeholder='email' 
                            required 
                        />
                        <MdEmail className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input 
                            type="password" 
                            placeholder='password' 
                            required 
                        />
                        <FaLock className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input 
                            type="tel" 
                            placeholder='Phone number' 
                            required 
                        />
                        <FaPhone className='icon'/>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> I agree to the terms & conditions</label>
                    </div>
                    <button className='submit'>register</button>
                    <div className='register-link'>
                    <p>Already have an account? <Link to="/login">Login</Link></p> {/* Utilisation de Link */}                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;