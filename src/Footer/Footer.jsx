import React from 'react';
import './Footer.css'; 
import { useColor } from "../colorContext.js"; 
const Footer = () => {
    const { bgColor } = useColor();
  return (
    <footer className="footer"style={{ backgroundColor: bgColor }}>
      <div className="footer-container">
        <div className="footer-logo">
          <h3>Ready to Ace</h3>
          <p>
            We provide tutorials and interview questions for all technologies like Java, Android, Java frameworks, and more.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>G-13, 2nd Floor, Sec-3, Noida, UP, 201301, India</p>
          <p>
            Email: <a href="mailto:hr@readytoace.com">hr@readytoace.com</a>
          </p>
        </div>

        <div className="footer-follow">
          <h4>Follow Us</h4>
          <p>
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">LinkedIn</a>
          </p>
        </div>

        <div className="footer-latest-post">
          <h4>Latest Post</h4>
          <p>
            <a href="#">How to prepare for Java interviews</a>
          </p>
          <p>
            <a href="#">Android Development: Common Interview Questions</a>
          </p>
        </div>

        <div className="footer-privacy">
          <h4>
            <a href="#">Privacy Policy</a>
          </h4>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2024 Ready to Ace. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
