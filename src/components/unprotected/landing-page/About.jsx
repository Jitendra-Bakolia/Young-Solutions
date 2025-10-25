import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className='text-center'>EVOLVE YOUR ACQUIRES</h3>
            <img src="/img/about.jpg" className="img-fluid rounded-4 mb-4" alt="" />
            <p>Backed by strategic sourcing and bulk procurement capabilities, Young Solutions offers
              technology products at cost-effective pricing, enabling startups, SMEs, corporates, and
              government entities to modernize their digital infrastructure efficiently and economically.</p>
            <p>We specialize in the procurement and distribution of high-quality IT hardware, including
              laptops, desktops, smartphones, tablets, servers, networking devices, and computer
              accessories. Our product portfolio consists of globally recognized brands such as Apple,
              Samsung, HP, Lenovo, Dell, Asus, Acer, Microsoft, Nokia, and several others — ensuring
              genuine quality and assured performance.</p>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                Our approach is rooted in transparency, trust, and long-term business relationships. We focus
                not only on supplying products but also on delivering reliable service, timely support, and
                seamless customer experience.
              </p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i> <span>Young Solutions is a technology-driven IT products supplier.</span></li>
                <li><i className="bi bi-check-circle-fill"></i> <span>Established October 2022 & headquartered in Ghaziabad, UP.</span></li>
                <li><i className="bi bi-check-circle-fill"></i> <span>Formed as a partnership firm, company is
                  committed to delivering authentic, reliable, and competitively priced IT solutions to
                  organizations and customers across India.</span></li>
              </ul>
              <p>
                Formed as a partnership firm, company is
                committed to delivering authentic, reliable, and competitively priced IT solutions to
                organizations and customers across India.
              </p>

              <div className="position-relative mt-4">
                <img src="/img/about-2.jpg" className="img-fluid rounded-4" alt="" />
                <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
