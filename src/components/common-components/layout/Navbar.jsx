import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="#hero" className="logo d-flex align-items-center me-auto" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          <img src="/img/Young-Solutions-Nav.png" alt="Logo" /><span className='site-name'>Young Solutions</span>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
            <li><a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Portfolio</a></li>
            <li><a href="#team" className={activeSection === 'team' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Team</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="cta-btn" href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} > {/* Shop Icon always visible */} <i className="bi bi-cart3"></i> {/* Text visible only on md and larger screens */} <span className="d-none d-md-inline" style={{ marginLeft: "5px" }}> Get Shop </span> </a>
      </div>
    </header>
  );
};

export default Header;
