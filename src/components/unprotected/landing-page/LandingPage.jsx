import React, { lazy, useEffect } from 'react';
const Hero = lazy(() => import("./Hero"));
const About = lazy(() => import("./About"));
const Stats = lazy(() => import("./Stats"));
const Services = lazy(() => import("./Services"));
const Clients = lazy(() => import("./Clients"));
const Brands = lazy(() => import("./Brands"));
const Features = lazy(() => import("./Features"));
const Services2 = lazy(() => import("./Services2"));
const Testimonials = lazy(() => import("./Testimonials"));
const Portfolio = lazy(() => import("./Portfolio"));
const Team = lazy(() => import("./Team"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));

const LandingPage = () => {
  useEffect(() => {
    // Initialize AOS when library is loaded from vendor
    const initAOS = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }
    };

    // Initialize GLightbox when library is loaded from vendor
    const initGLightbox = () => {
      if (window.GLightbox) {
        window.GLightbox({
          selector: '.glightbox'
        });
      }
    };

    // Wait for libraries to load from vendor files
    const checkAndInitLibraries = () => {
      if (window.AOS) {
        initAOS();
      }
      if (window.GLightbox) {
        initGLightbox();
      }
    };

    // Check immediately
    checkAndInitLibraries();

    // Set up interval to check periodically until libraries are loaded
    const interval = setInterval(() => {
      checkAndInitLibraries();
      if (window.AOS && window.GLightbox) {
        clearInterval(interval);
      }
    }, 100);

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
      dropdownToggle.addEventListener('click', function (e) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle('dropdown-active');
        this.querySelector('.toggle-dropdown').classList.toggle('bi-chevron-up');
        this.querySelector('.toggle-dropdown').classList.toggle('bi-chevron-down');
      });
    });

    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="index-page">
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
        <Brands />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
