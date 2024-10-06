import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/loginRegister/login';
import Register from './Components/loginRegister/Register';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
