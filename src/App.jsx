import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Doctors from './pages/Doctors';
import Myprofile from './pages/Myprofile';
import Myappoinments from './pages/Myappoinments';
import Apponitments from './pages/Apponitments';
import Navbar from './Components/Navbar';
import Login from './pages/Login';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<Myprofile/>} />
        <Route path='/my-appointments' element={<Myappoinments/>} />
        <Route path='/appoinment/:docId' element={<Apponitments />} />

      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
