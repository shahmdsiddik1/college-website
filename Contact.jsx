import React, { useState } from "react";
import "./Contact.css";

import msg_icon from "../../../assets/msg-icon.png";
import mail_icon from "../../../assets/mail-icon.png";
import phone_icon from "../../../assets/phone-icon.png";
import location_icon from "../../../assets/location-icon.png";
import www from "../../../assets/world-wide-web.png";
import white_arrow from "../../../assets/white-arrow.png";
import whatsapp_logo from "../../../assets/whatsapp.png";

const Contact = () => {
  const [result, setResult] = useState("Send Message");

  const sendmessage = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult("Message failed to send!");
      }
    } catch (error) {
      console.error(error);
      setResult("Server error. Try again later!");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>

        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback and questions are important to us.
        </p>

        <ul>
          <li>
            <img src={location_icon} alt="" />
            Campus Address: Cidco / Naregaon
          </li>

          <li>
            <img src={phone_icon} alt="" />
            Phone: Prof. Mujahid Sir — +91 9860241988
          </li>

          <li>
            <img src={mail_icon} alt="" />
            Email: godavarigroupedu@gmail.com
          </li>

          <li>
            <img src={www} alt="" />
            Website: www.GGIcareer.com
          </li>

          <li>
            <a
              href="https://wa.me/918766048787?text=Hello Sir! I want to take admission."
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={whatsapp_logo} alt="" />
              WhatsApp: +91 9860241988
            </a>
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={sendmessage}>
          <label>YOUR NAME</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="contact-input"
          />

          <label>EMAIL</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            className="contact-input"
          />

          <label>WRITE YOUR MESSAGE HERE</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
            className="contact-input"
          />

          <button type="submit" className="btn dark-btn">
            {result} <img src={white_arrow} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
