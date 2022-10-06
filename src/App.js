import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Resume' element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}
