//import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>Phone: +92 324 4950434</li>
            <li>Email: support@floralelegance.pk</li>
            <li>Address: 45 Garden Block, New Garden Town, Lahore</li>
          </ul>
        </div>
        <div>
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#"><img src="/pics/FB.png" alt="Facebook" width="30" /></a>
            <a href="#"><img src="/pics/Insta.png" alt="Instagram" width="30" /></a>
            <a href="#"><img src="/pics/X.png" alt="Twitter" width="30" /></a>
            <a href="#"><img src="/pics/whatsapp.jpg" alt="WhatsApp" width="30" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
