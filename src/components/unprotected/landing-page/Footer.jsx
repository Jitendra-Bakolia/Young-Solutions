import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer" className="footer dark-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="#hero" className="logo d-flex align-items-center">
              <span className="sitename">Dewi</span>
            </a>
            <div className="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#hero">Home</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#about">About us</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#services">Services</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#contact">Terms of service</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#contact">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#services">Web Design</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#services">Web Development</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#services">Product Management</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#services">Marketing</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#services">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <form className="php-email-form">
              <div className="newsletter-form">
                <input type="email" name="email" placeholder="Your email" />
                <input type="submit" value="Subscribe" />
              </div>
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your subscription request has been sent. Thank you!</div>
            </form>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">Dewi</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
        </div>
      </div>

      {/* Scroll Top Button */}
      <a 
        href="#" 
        id="scroll-top" 
        className="scroll-top d-flex align-items-center justify-content-center"
        onClick={(e) => { e.preventDefault(); scrollToTop(); }}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </footer>
  );
};

export default Footer;
