import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare, FaTwitter } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Anupam TR
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#testimonials">Testimonials</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
        <a href="https://instagram.com">
          <FaInstagramSquare />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy;Anupam Tr.All right reserved</small>
      </div>
    </footer>
  );
};
export default Footer;
