import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>what skills I have</h5>
      <h2>my experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>JAVASCRIPT</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>BOOTSTRAP</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>TAILWIND</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>REACT</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>

        {/* ****End of FrontEnd Development**** */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>NODE JS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>EXPRESS JS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>MONGODB</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>PYTHON</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>PHP</h4>
              <small className="text-light">Beginner</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
