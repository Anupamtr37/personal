import emailjs from "@emailjs/browser";
import { React, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./cobtact.css";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_02kxzyf",
        "template_1wrqot1",
        form.current,
        "fo7cr2DubE-oVyUuV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contacy_option-icon" />
            <h4>Email</h4>
            <h5>tranupam772@gmail.com</h5>
            <a href="mailto:tranupam772@gmail.com" target="_blank">
              Send an Email
            </a>
          </article>
          <article className="contact_option">
            <BsMessenger className="contacy_option-icon" />
            <h4>Messenger</h4>
            <h5>Anupam TR</h5>
            <a href="https://m.me/100084667032823" target="_blank">
              Connect in Messenger
            </a>
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className="contacy_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+8801758914355</h5>
            <a href="https://wa.me/+8801758914355" target="_blank">
              Connect in Whatsapp
            </a>
          </article>
        </div>
        {/* end of the contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email adress"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
