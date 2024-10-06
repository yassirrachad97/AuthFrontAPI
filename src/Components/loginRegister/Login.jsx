 import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './auth.css';
const Login = () =>  {
    return (
        <div className='wrapper login-page'>
            <div className='form-box login'>
                <form action="">
                    <h1>login</h1>
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
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> remember me
                        </label>
                        <a href="#">forgot password?</a>
                    </div>
                    <button className='submit'>login</button>
                    <div className='register-link'>
                    <p>Dont have an account? <Link to="/register">Register</Link></p> {/* Utilisation de Link */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;