import React from "react";

const Brands = () => {
  const brands = [
    { src: "/img/brands/appel.png", name: "apple" },
    { src: "/img/brands/asus.png", name: "asus" },
    { src: "/img/brands/dell.png", name: "dell" },
    { src: "/img/brands/microsoft.png", name: "microsoft" },
    { src: "/img/brands/samsung.png", name: "samsung" },
    { src: "/img/brands/nokia.svg", name: "nokia" },
    { src: "/img/brands/acer.svg", name: "acer" },
    { src: "/img/brands/HP.svg", name: "hp" },
    { src: "/img/brands/lenovo.svg", name: "lenovo" }
  ];

  // Duplicate logos for infinite scroll
  const logos = [...brands, ...brands];

  return (
    <section id="brands" className="brands section light-background">
      <div className="container" data-aos="fade-up">
        <div className="logo-slider">
          <div className="logo-track">
            {logos.map((brand, index) => (
              <div key={index} className="brand-logo">
                <img
                  src={brand.src}
                  alt={brand.name}
                  className={`img-fluid ${brand.name}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
