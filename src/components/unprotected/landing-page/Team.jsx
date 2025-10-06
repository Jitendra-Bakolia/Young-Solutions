import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Walter White',
      position: 'Chief Executive Officer',
      image: '/img/team/team-1.jpg',
      description: 'Explicabo voluptatem mollitia et repellat qui dolorum quasi',
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Product Manager',
      image: '/img/team/team-2.jpg',
      description: 'Aut maiores voluptates amet et quis praesentium qui senda para',
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'William Anderson',
      position: 'CTO',
      image: '/img/team/team-3.jpg',
      description: 'Quisquam facilis cum velit laborum corrupti fuga rerum quia',
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <section id="team" className="team section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>CHECK OUR TEAM</p>
      </div>

      <div className="container">
        <div className="row gy-5">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
              <div className="member">
                <div className="pic">
                  <img src={member.image} className="img-fluid" alt={member.name} />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.position}</span>
                  <p>{member.description}</p>
                  <div className="social">
                    <a href={member.social.twitter}><i className="bi bi-twitter-x"></i></a>
                    <a href={member.social.facebook}><i className="bi bi-facebook"></i></a>
                    <a href={member.social.instagram}><i className="bi bi-instagram"></i></a>
                    <a href={member.social.linkedin}><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
