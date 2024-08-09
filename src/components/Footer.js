import React from 'react';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer bg-dark" style={{ position: 'fixed', bottom: '0px', width: '100%', height: '60px', lineHeight: '60px' }}>
      <div className="container text-center">
        <span className="text-light">
         Copyright &copy; {new Date().getFullYear()}
         <span className=''><Link to="/">Email Extractor</Link></span>
         
           All Rights Reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;