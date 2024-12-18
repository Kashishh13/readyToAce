import React from 'react';
import './App.css';
import { ColorProvider, useColor } from './colorContext.js';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';

import Footer from './Footer/Footer.jsx';
import Single from './Pages/Single/Single.jsx';

function Navbar() {
  const { changeBackground } = useColor();
  const { bgColor } = useColor();

  return (
    <header className="navbar-header" style={{ backgroundColor: bgColor }}>
    <nav className="navbar">
   <Link className='link'  to='/'><div className="logo"><p className='logo-img' >READY TO ACE.com</p></div></Link> 
      <ul className="color-buttons">
        <li>
          <button
            className="color-btn"
            style={{ backgroundColor: '#D3D3D3' }}
            onClick={() => changeBackground('#D3D3D3')}
          ></button>
        </li>
        <li>
          <button
            className="color-btn"
            style={{ backgroundColor: '#F5F5F5' }}
            onClick={() => changeBackground('#F5F5F5')}
          ></button>
        </li>
        <li>
          <button
            className="color-btn"
            style={{ backgroundColor: '#F5DEB3' }}
            onClick={() => changeBackground('#F5DEB3')}
          ></button>
        </li>
        <li>
          <button
            className="color-btn"
            style={{ backgroundColor: '#E0B0FF' }}
            onClick={() => changeBackground('#E0B0FF')}
          ></button>
        </li>
        <li>
          <button
            className="color-btn"
            style={{ backgroundColor: '#98FB98' }}
            onClick={() => changeBackground('#98FB98')}
          ></button>
        </li>
      </ul>
    </nav>
  </header>
  );
}

function App() {
  return (
    <ColorProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/questions/:id' element={<Single/>}/>
        </Routes>
        <Footer/>
      </Router>
    </ColorProvider>
  );
}

export default App;
