import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-dark" style={{ position: 'fixed', bottom: '0px', width: '100%', height: '60px', lineHeight: '60px' }}>
      <div className="container text-center">
        <span className="text-light">
         Copyright &copy; {new Date().getFullYear()} Email Extractor All Rights Reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;