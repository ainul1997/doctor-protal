import logo from './logo.svg';
import './App.css';
import Navber from './Home/Navber/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home/Home';
import About from './Home/About/About';
import Appointment from './Home/Appointment/Appointment';
import Reviews from './Home/Reviews/Reviews';
import Contact from './Home/Contact/Contact';
import Login from './Home/Login/Login';

function App() {
  return (
    <div >
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />


      </Routes>
    </div>
  );
}

export default App;
