import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} GODAVARI GROUP OF INSTITUTE. All rights reserved.</p>

      <ul>
        <li>
          <a href="#" aria-label="Terms of Service">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="#" aria-label="Privacy Policy">
            Privacy Policy
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
