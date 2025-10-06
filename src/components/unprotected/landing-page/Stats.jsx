import React, { useEffect, useState } from 'react';

const Stats = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    support: 0,
    workers: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { clients: 232, projects: 521, support: 1463, workers: 15 };
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;

      const increment = {
        clients: targets.clients / steps,
        projects: targets.projects / steps,
        support: targets.support / steps,
        workers: targets.workers / steps
      };

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        
        setCounters({
          clients: Math.min(Math.floor(increment.clients * currentStep), targets.clients),
          projects: Math.min(Math.floor(increment.projects * currentStep), targets.projects),
          support: Math.min(Math.floor(increment.support * currentStep), targets.support),
          workers: Math.min(Math.floor(increment.workers * currentStep), targets.workers)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    };

    // Start animation after component mounts
    const timeout = setTimeout(animateCounters, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="stats" className="stats section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
              <div>
                <span className="purecounter">{counters.clients}</span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
              <div>
                <span className="purecounter">{counters.projects}</span>
                <p>Projects</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="bi bi-headset color-green flex-shrink-0"></i>
              <div>
                <span className="purecounter">{counters.support}</span>
                <p>Hours Of Support</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="bi bi-people color-pink flex-shrink-0"></i>
              <div>
                <span className="purecounter">{counters.workers}</span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
