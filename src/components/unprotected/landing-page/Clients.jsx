import React from 'react';

const Clients = () => {
  const clients = [
    "/img/clients/client-1.png",
    "/img/clients/client-2.png",
    "/img/clients/client-3.png",
    "/img/clients/client-4.png",
    "/img/clients/client-5.png",
    "/img/clients/client-6.png"
  ];

  return (
    <section id="clients" className="clients section light-background">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          {clients.map((client, index) => (
            <div key={index} className="col-xl-2 col-md-3 col-6 client-logo">
              <img src={client} className="img-fluid" alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
