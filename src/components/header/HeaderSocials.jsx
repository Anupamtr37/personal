import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const headerSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank">
        <AiFillLinkedin />
      </a>
      <a href="github.com" target="_blank">
        <AiFillGithub />
      </a>

      <a href="facebook.com" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default headerSocials;
