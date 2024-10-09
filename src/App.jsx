import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/auth/login';
import Register from './Components/auth/Register';
import RequestPasswordReset from './Components/auth/RequestPasswordReset'; 
import ResetPassword from './Components/auth/ResetPassword';
function App() {
  return (

    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<RequestPasswordReset />} />
        <Route path="reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
