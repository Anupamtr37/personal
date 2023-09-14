import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import Aboutme from "../../assets/assets_me-about.jpg";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="aboutme_image">
            <img src={Aboutme} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+year working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>100+ worldwide</small>
            </article>
            <article className="about_card">
              <GrProjects className="about_icon" />
              <h5>Projects</h5>
              <small>150+ completed</small>
            </article>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              labore ut ea inventore ex quibusdam, eos at perspiciatis quisquam
              aspernatur obcaecati amet officia repudiandae enim magni natus
              ducimus assumenda nihil!
            </p>
          </div>
          <div className="btn_container">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
