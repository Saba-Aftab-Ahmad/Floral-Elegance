//import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function About() {
  return (
    <>
      <Header title="Floral Elegance - About Us" />
      <main>
        <section className="about-section">
          <h2>Our Story</h2>
          <p>Founded in 2018 in Lahore, Floral Elegance began as a small corner shop in Liberty Market. It’s now one of Pakistan’s cherished floral brands.</p>
          <p>From Mehndi to Eid, weddings to condolences, each bouquet blends tradition and elegance.</p>
        </section>
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p className="quote">"To spread joy and tradition through floral beauty."</p>
          <ul>
            <li>Premium-quality, farm-fresh flowers</li>
            <li>Eco-friendly wrapping</li>
            <li>Support local growers</li>
            <li>Cultural floral designs</li>
            <li>Exceptional customer service</li>
          </ul>
        </section>
        <section className="team-section">
          <h2>Meet The Team</h2>
          <table className="team-table">
            <thead>
              <tr><th>Members</th><th>Name</th><th>Position</th><th>Biography</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="/pics/aisha.jpg" alt="Aisha Zaidi" className="profile-img" /></td>
                <td><strong>Aisha Zaidi</strong></td>
                <td><em>Founder & Creative Head</em></td>
                <td>Designs bouquets with emotion and elegance.</td>
              </tr>
              <tr>
                <td><img src="/pics/umar.jpg" alt="Umar Khan" className="profile-img" /></td>
                <td><strong>Umar Khan</strong></td>
                <td><em>Lead Event Stylist</em></td>
                <td>Specialist in cultural and Mughal-inspired designs.</td>
              </tr>
              <tr>
                <td><img src="/pics/hira.jpg" alt="Hira Saeed" className="profile-img" /></td>
                <td><strong>Hira Saeed</strong></td>
                <td><em>Customer Relations Manager</em></td>
                <td>Ensures warmth and timely deliveries.</td>
              </tr>
              <tr>
                <td><img src="/pics/farhan.jpg" alt="Farhan Javed" className="profile-img" /></td>
                <td><strong>Farhan Javed</strong></td>
                <td><em>Logistics Coordinator</em></td>
                <td>Handles smooth deliveries across Pakistan.</td>
              </tr>
              <tr>
                <td><img src="/pics/noor.jpg" alt="Noor Fatima" className="profile-img" /></td>
                <td><strong>Noor Fatima</strong></td>
                <td><em>Intern</em></td>
                <td>NCA student with fresh ideas and creativity.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="join-section">
          <h2>Join Our Floral Family</h2>
          <p>We’re here to help you express yourself with flowers. Explore collections, visit our decor page, or call us to customize.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;