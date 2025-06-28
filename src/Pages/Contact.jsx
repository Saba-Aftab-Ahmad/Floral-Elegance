//import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Contact() {
  return (
    <>
      <Header title="Floral Elegance - Contact Us" />
      <main>
        <section className="contact-form-section">
          <h2>Contact Us</h2>
          <p>If you have any inquiries or feedback — we’d love to hear from you.</p>
          <form className="contact-form">
            <label>Name:<input type="text" name="name" required /></label>
            <label>Email:<input type="email" name="email" required /></label>
            <label>Subject:
              <select name="subject">
                <option value="order">Order Inquiry</option>
                <option value="custom">Custom Bouquet</option>
                <option value="event">Event Decoration</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>Message:<textarea name="message" rows="5" required></textarea></label>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;