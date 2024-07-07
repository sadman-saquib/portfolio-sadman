import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import AboutMe from './Components/AboutMe/AboutMe';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Set the default route to render Hero component */}
          <Route path='/' element={<Hero />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
