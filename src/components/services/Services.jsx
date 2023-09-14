import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="services_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* *******end of ui/ux********* */}
        <article className="service">
          <div className="services_head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className="service_list">
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        {/* *****end of web Development******* */}
        <article className="service">
          <div className="services_head">
            <h3>ECOMMERCE DEVELOPMET</h3>
          </div>

          <ul className="service_list">
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiFillCheckCircle className="services_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* *******end of ecommerce development******* */}
      </div>
    </section>
  );
};

export default Services;
