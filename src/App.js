import logo from './logo.svg';
import './App.css';
import Navber from './Home/Navber/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home/Home';

function App() {
  return (
    <div >
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
