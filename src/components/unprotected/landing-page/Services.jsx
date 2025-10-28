// import React from 'react';

// const Services = () => {
//   const services = [
//     {
//       image: "/img/services-1.jpg",
//       icon: "bi-activity",
//       title: "Nesciunt Mete",
//       description: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.",
//       delay: "200"
//     },
//     {
//       image: "/img/services-2.jpg",
//       icon: "bi-broadcast",
//       title: "Eosle Commodi",
//       description: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
//       delay: "300"
//     },
//     {
//       image: "/img/services-3.jpg",
//       icon: "bi-easel",
//       title: "Ledo Markt",
//       description: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
//       delay: "400"
//     }
//   ];

//   return (
//     <section id="services" className="services section">
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Services</h2>
//         <p>Featured Services<br /></p>
//       </div>

//       <div className="container" data-aos="fade-up" data-aos-delay="100">
//         <div className="row gy-5">
//           {services.map((service, index) => (
//             <div key={index} className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay={service.delay}>
//               <div className="service-item">
//                 <div className="img">
//                   <img src={service.image} className="img-fluid" alt={service.title} />
//                 </div>
//                 <div className="details position-relative">
//                   <div className="icon">
//                     <i className={`bi ${service.icon}`}></i>
//                   </div>
//                   <a href="/service-details" className="stretched-link">
//                     <h3>{service.title}</h3>
//                   </a>
//                   <p>{service.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;




















import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      image: "/img/services-1.jpg",
      icon: "bi-activity",
      title: "Privacy Policy",
      description: `This Privacy Policy outlines how Young Solutions (“we”, “us”, “our”) collects, uses, protects, and manages your personal information when you visit our website, contact us, or purchase products from us...`,
      delay: "200",
      link: "/privacy-policy",
    },
    {
      image: "/img/services-2.jpg",
      icon: "bi-broadcast",
      title: "Terms & Conditions",
      description: `These Terms & Conditions (“Terms”) govern your access to and use of the website and services provided by Young Solutions (“we”, “us”, “our”). By visiting our website, placing an inquiry....`,
      delay: "300",
      link: "/terms-and-conditions"
    },
    {
      image: "/img/services-3.jpg",
      icon: "bi-easel",
      title: "Refund & Return Policy",
      description: `At Young Solutions, we aim to ensure a transparent and reliable purchase experience. All products supplied by us are 100% genuine, brand-sealed, and covered under official...`,
      delay: "400",
      link: "/refund-policy"
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Policy</h2>
        <p>Policy & Terms & Refund<br /></p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-xl-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={service.delay}
            >
              <div className="service-item">
                <div className="img">
                  <img src={service.image} className="img-fluid" alt={service.title} />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <Link to={service.link} className="stretched-link">
                    <h3>{service.title}</h3>
                  </Link>
                  <p>{service.description}</p>
                  <Link to={service.link} className="read-more">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
