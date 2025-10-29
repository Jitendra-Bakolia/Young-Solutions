// import React, { useState, useEffect } from 'react';

// const Header = () => {
//   const [activeSection, setActiveSection] = useState('hero');
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setActiveSection(sectionId);
//     }
//   };

//   return (
//     <header id="header" className={`header d-flex align-items-center fixed-top ${isScrolled ? 'scrolled' : ''}`}>
//       <div className="container-fluid container-xl position-relative d-flex align-items-center">
//         <a href="#hero" className="logo d-flex align-items-center me-auto" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
//           <img src="/img/Young-Solutions-Nav.png" alt="Logo" /><span className='site-name'>Young Solutions</span>
//         </a>

//         <nav id="navmenu" className="navmenu">
//           <ul>
//             <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
//             <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
//             <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
//             <li><a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Portfolio</a></li>
//             <li><a href="#team" className={activeSection === 'team' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Team</a></li>
//             <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
//           </ul>
//           <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
//         </nav>

//         <a className="cta-btn" href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} > {/* Shop Icon always visible */} <i className="bi bi-cart3"></i> {/* Text visible only on md and larger screens */} <span className="d-none d-md-inline" style={{ marginLeft: "5px" }}> Get Shop </span> </a>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smart scroll handler
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    const element = document.getElementById(sectionId);

    if (element) {
      // ✅ Scroll to section if it exists on current page
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    } else {
      // ✅ If section doesn't exist here, go to Landing Page and scroll after navigation
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  // ✅ Scroll to section after navigation (Landing Page load)
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const { scrollTo } = location.state;
      setTimeout(() => {
        const target = document.getElementById(scrollTo);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          setActiveSection(scrollTo);
        }
      }, 400); // small delay so page fully loads
    }
  }, [location]);

  const goToCartPage = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const heroSection = document.getElementById("hero");
      if (heroSection) heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="#hero" className="logo d-flex align-items-center me-auto" onClick={handleLogoClick}>
          <img src="/img/Young-Solutions-Nav.png" alt="Logo" />
          {/* <span className="site-name">Young Solutions</span> */}
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a
                href="#hero"
                className={activeSection === "hero" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "hero")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={activeSection === "services" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "services-2")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={activeSection === "portfolio" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#team"
                className={activeSection === "team" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "team")}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="cta-btn" href="#about" onClick={goToCartPage}>
          <i className="bi bi-cart3"></i>
          <span className="d-none d-md-inline" style={{ marginLeft: "5px" }}>
            Get Shop
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
