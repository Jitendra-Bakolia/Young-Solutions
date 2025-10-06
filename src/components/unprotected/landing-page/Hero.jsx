import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Initialize AOS if available
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero section dark-background">
      <img src="/img/hero-bg.jpg" alt="" data-aos="fade-in" />

      <div className="container d-flex flex-column align-items-center">
        <h2 data-aos="fade-up" data-aos-delay="100">PLAN. LAUNCH. GROW.</h2>
        <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with Bootstrap</p>
        <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
          <a href="#about" className="btn-get-started" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Get Started</a>
          <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center">
            <i className="bi bi-play-circle"></i><span>Watch Video</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
