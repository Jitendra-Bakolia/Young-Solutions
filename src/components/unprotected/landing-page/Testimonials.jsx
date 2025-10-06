import React, { useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      image: "/img/testimonials/testimonials-1.jpg",
      name: "Saul Goodman",
      position: "Ceo & Founder",
      rating: 5,
      text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
    },
    {
      image: "/img/testimonials/testimonials-2.jpg",
      name: "Sara Wilsson",
      position: "Designer",
      rating: 5,
      text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
    },
    {
      image: "/img/testimonials/testimonials-3.jpg",
      name: "Jena Karlis",
      position: "Store Owner",
      rating: 5,
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
    },
    {
      image: "/img/testimonials/testimonials-4.jpg",
      name: "Matt Brandon",
      position: "Freelancer",
      rating: 5,
      text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."
    },
    {
      image: "/img/testimonials/testimonials-5.jpg",
      name: "John Larson",
      position: "Entrepreneur",
      rating: 5,
      text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <i key={index} className="bi bi-star-fill"></i>
    ));
  };

  useEffect(() => {
    // Initialize Swiper when the library is loaded from vendor files
    const initSwiper = () => {
      if (window.Swiper) {
        const swiperElement = document.querySelector('.init-swiper');
        if (swiperElement) {
          new window.Swiper(swiperElement, {
            loop: true,
            speed: 600,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            },
            slidesPerView: "auto",
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }
          });
        }
      }
    };

    // Wait for Swiper to be loaded from vendor files
    if (window.Swiper) {
      initSwiper();
    } else {
      const interval = setInterval(() => {
        if (window.Swiper) {
          initSwiper();
          clearInterval(interval);
        }
      }, 100);
    }
  }, []);

  return (
    <section id="testimonials" className="testimonials section dark-background">
      <img src="/img/testimonials-bg.jpg" className="testimonials-bg" alt="" />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
          <script type="application/json" className="swiper-config">
            {JSON.stringify({
              loop: true,
              speed: 600,
              autoplay: {
                delay: 5000
              },
              slidesPerView: "auto",
              pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true
              }
            })}
          </script>
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
                <div className="testimonial-item">
                  <img src={testimonial.image} className="testimonial-img" alt={testimonial.name} />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.position}</h4>
                  <div className="stars">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{testimonial.text}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
