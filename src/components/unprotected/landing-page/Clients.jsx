import React from "react";

const Clients = () => {
  const clients = [
    { src: "/img/clients/bprd.png", name: "bprd" },
    { src: "/img/clients/C-Dac.png", name: "C-Dac" },
    { src: "/img/clients/C-Dot.png", name: "C-Dot" },
    { src: "/img/clients/CGDA.png", name: "CGDA" },
    { src: "/img/clients/IA.png", name: "IA" },
    { src: "/img/clients/IAF.png", name: "IAF" },
    { src: "/img/clients/IN.png", name: "IN" },
    { src: "/img/clients/ISRO.png", name: "ISRO" },
    { src: "/img/clients/LS.png", name: "LS" },
    { src: "/img/clients/MD-1.png", name: "MD" },
    { src: "/img/clients/NII.png", name: "NII" },
    { src: "/img/clients/THDC.png", name: "THDC" },
    { src: "/img/clients/WL.png", name: "WL" },
  ];

  // Duplicate for infinite scroll
  const logos = [...clients, ...clients];

  return (
    <section id="clients" className="clients section light-background">
      <div className="container" data-aos="fade-up">
        <div className="logo-slider">
          <div className="logo-track">
            {logos.map((client, index) => (
              <div key={index} className="client-logo">
                <img
                  src={client.src}
                  alt={client.name}
                  className={`img-fluid ${client.name}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
