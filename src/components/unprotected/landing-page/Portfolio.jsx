import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const portfolioItems = [
    {
      id: 1,
      category: ['filter-app'],
      image: '/img/portfolio/app-1.jpg',
      title: 'App 1',
      description: 'Lorem ipsum, dolor sit amet consectetur'
    },
    {
      id: 2,
      category: ['filter-product'],
      image: '/img/portfolio/product-1.jpg',
      title: 'Product 1',
      description: 'Lorem ipsum, dolor sit amet consectetur'
    },
    {
      id: 3,
      category: ['filter-branding'],
      image: '/img/portfolio/branding-1.jpg',
      title: 'Branding 1',
      description: 'Lorem ipsum, dolor sit amet consectetur'
    },
    {
      id: 4,
      category: ['filter-books'],
      image: '/img/portfolio/books-1.jpg',
      title: 'Books 1',
      description: 'Lorem ipsum, dolor sit amet consectetur'
    },
    {
      id: 5,
      category: ['filter-app'],
      image: '/img/portfolio/app-2.jpg',
      title: 'App 2',
      description: 'Lorem ipsum, dolor sit amet consectetur'
    },
    {
      id: 6,
      category: ['filter-product'],
      image: '/img/portfolio/product-2.jpg',
      title: 'Product 2',
      description: 'Lorem ipsum, dolor sit amet consectetur'
    },
    {
      id: 7,
      category: ['filter-branding'],
      image: '/img/portfolio/branding-2.jpg',
      title: 'Branding 2',
      description: 'Lorem ipsum, dolor sit amet consectetur'
    },
    {
      id: 8,
      category: ['filter-books'],
      image: '/img/portfolio/books-2.jpg',
      title: 'Books 2',
      description: 'Lorem ipsum, dolor sit amet consectetur'
    },
    {
      id: 9,
      category: ['filter-app'],
      image: '/img/portfolio/app-3.jpg',
      title: 'App 3',
      description: 'Lorem ipsum, dolor sit amet consectetur'
    },
    {
      id: 10,
      category: ['filter-product'],
      image: '/img/portfolio/product-3.jpg',
      title: 'Product 3',
      description: 'Lorem ipsum, dolor sit amet consectetur'
    },
    {
      id: 11,
      category: ['filter-branding'],
      image: '/img/portfolio/branding-3.jpg',
      title: 'Branding 3',
      description: 'Lorem ipsum, dolor sit amet consectetur'
    },
    {
      id: 12,
      category: ['filter-books'],
      image: '/img/portfolio/books-3.jpg',
      title: 'Books 3',
      description: 'Lorem ipsum, dolor sit amet consectetur'
    }
  ];

  const filterItems = (filter) => {
    setActiveFilter(filter);
  };

  const filteredItems = activeFilter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.includes(activeFilter));

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>CHECK OUR PORTFOLIO</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li 
              className={activeFilter === '*' ? 'filter-active' : ''}
              onClick={() => filterItems('*')}
            >
              All
            </li>
            <li 
              className={activeFilter === 'filter-app' ? 'filter-active' : ''}
              onClick={() => filterItems('filter-app')}
            >
              App
            </li>
            <li 
              className={activeFilter === 'filter-product' ? 'filter-active' : ''}
              onClick={() => filterItems('filter-product')}
            >
              Product
            </li>
            <li 
              className={activeFilter === 'filter-branding' ? 'filter-active' : ''}
              onClick={() => filterItems('filter-branding')}
            >
              Branding
            </li>
            <li 
              className={activeFilter === 'filter-books' ? 'filter-active' : ''}
              onClick={() => filterItems('filter-books')}
            >
              Books
            </li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {filteredItems.map((item) => (
              <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category.join(' ')}`}>
                <div className="portfolio-content h-100">
                  <img src={item.image} className="img-fluid" alt={item.title} />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a href={item.image} title={item.title} className="glightbox preview-link">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a href="/portfolio-details" title="More Details" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
