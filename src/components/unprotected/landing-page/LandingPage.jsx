import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Stats from './Stats';
import Services from './Services';
import Clients from './Clients';
import Features from './Features';
import Services2 from './Services2';
import Testimonials from './Testimonials';
import Portfolio from './Portfolio';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

// Import CSS files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';

const LandingPage = () => {
  useEffect(() => {
    // Initialize AOS
    import('aos').then((AOS) => {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    });

    // Initialize GLightbox
    import('glightbox').then((GLightboxModule) => {
      const GLightbox = GLightboxModule.default;
      GLightbox({
        selector: '.glightbox'
      });
    });

    // Add scroll event listener for header
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Mobile nav toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navmenu = document.querySelector('#navmenu');
    
    if (mobileNavToggle && navmenu) {
      mobileNavToggle.addEventListener('click', () => {
        navmenu.classList.toggle('mobile-nav-active');
        mobileNavToggle.classList.toggle('bi-list');
        mobileNavToggle.classList.toggle('bi-x');
      });
    }

    // Dropdown toggle
    document.querySelectorAll('.navmenu .dropdown > a').forEach(dropdownToggle => {
      dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle('dropdown-active');
        this.querySelector('.toggle-dropdown').classList.toggle('bi-chevron-up');
        this.querySelector('.toggle-dropdown').classList.toggle('bi-chevron-down');
      });
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Stats />
        <Services />
        <Clients />
        <Features />
        <Services2 />
        <Testimonials />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
