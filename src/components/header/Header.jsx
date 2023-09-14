import React from "react";
import ME from "../../assets/assets_me.png";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Anupam Talukder</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div>
          <img src={ME} alt="me" className="me" />
        </div>
        <div>
          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
