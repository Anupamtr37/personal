import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiSolidBookAlt, BiSolidContact } from "react-icons/bi";
import { FcAbout, FcServices } from "react-icons/fc";
import "./nav.css";
const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={active === "#" ? "active" : ""}
        onClick={() => {
          setActive("#");
        }}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        className={active === "#about" ? "active" : ""}
        onClick={() => {
          setActive("#about");
        }}
      >
        <FcAbout />
      </a>

      <a
        href="#experience"
        className={active === "#experience" ? "active" : ""}
        onClick={() => {
          setActive("#experience");
        }}
      >
        <BiSolidBookAlt />
      </a>

      <a
        href="#services"
        className={active === "#services" ? "active" : ""}
        onClick={() => {
          setActive("#services");
        }}
      >
        <FcServices />
      </a>

      <a
        href="#contact"
        className={active === "#contact" ? "active" : ""}
        onClick={() => {
          setActive("#contact");
        }}
      >
        <BiSolidContact />
      </a>
    </nav>
  );
};

export default Nav;
