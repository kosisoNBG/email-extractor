import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import EmailExtractor from './components/EmailExtractor';
import EmailValidator from './components/EmailValidator';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/email-extractor" element={<EmailExtractor />} />
          <Route path="/email-verifier" element={<EmailValidator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;