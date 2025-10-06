import React, { useState } from 'react';

const Features = () => {
  const [activeTab, setActiveTab] = useState('features-tab-1');

  const tabs = [
    {
      id: 'features-tab-1',
      icon: 'bi-binoculars',
      title: 'Modi sit est dela pireda nest',
      heading: 'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.',
      content: {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        points: [
          'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          'Duis aute irure dolor in reprehenderit in voluptate velit.',
          'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.'
        ],
        paragraph: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        image: '/img/working-1.jpg'
      }
    },
    {
      id: 'features-tab-2',
      icon: 'bi-box-seam',
      title: 'Unde praesenti mara setra le',
      heading: 'Neque exercitationem debitis soluta quos debitis quo mollitia officia est',
      content: {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        points: [
          'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          'Duis aute irure dolor in reprehenderit in voluptate velit.',
          'Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.',
          'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.'
        ],
        paragraph: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        image: '/img/working-2.jpg'
      }
    },
    {
      id: 'features-tab-3',
      icon: 'bi-brightness-high',
      title: 'Pariatur explica nitro dela',
      heading: 'Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda',
      content: {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        points: [
          'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          'Duis aute irure dolor in reprehenderit in voluptate velit.',
          'Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.'
        ],
        paragraph: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        image: '/img/working-3.jpg'
      }
    },
    {
      id: 'features-tab-4',
      icon: 'bi-command',
      title: 'Nostrum qui dile node',
      heading: 'Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum',
      content: {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        points: [
          'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          'Duis aute irure dolor in reprehenderit in voluptate velit.',
          'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.'
        ],
        paragraph: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        image: '/img/working-4.jpg'
      }
    }
  ];

  const activeTabContent = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="features" className="features section">
      <div className="container">
        <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay="100">
          {tabs.map((tab) => (
            <li key={tab.id} className="nav-item col-3">
              <a
                className={`nav-link ${activeTab === tab.id ? 'active show' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.id);
                }}
                href={`#${tab.id}`}
              >
                <i className={`bi ${tab.icon}`}></i>
                <h4 className="d-none d-lg-block">{tab.title}</h4>
              </a>
            </li>
          ))}
        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          <div className={`tab-pane fade ${activeTab === activeTabContent.id ? 'active show' : ''}`}>
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>{activeTabContent.heading}</h3>
                <p className="fst-italic">
                  {activeTabContent.content.description}
                </p>
                <ul>
                  {activeTabContent.content.points.map((point, index) => (
                    <li key={index}><i className="bi bi-check2-all"></i> <span>{point}</span></li>
                  ))}
                </ul>
                <p>
                  {activeTabContent.content.paragraph}
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src={activeTabContent.content.image} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
