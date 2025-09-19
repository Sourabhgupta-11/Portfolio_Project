import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../styles/contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_nnxxsbe",    
        "template_35a9yic",   
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "_aj_IIPNHZyhxpUjJ"      
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          alert("❌ Failed to send message. Please try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-5" data-aos="fade-up">
      <div className="container">
        <div className="section-title-wrapper">
  <h2 className="section-title">Contact Me</h2>
  <span className="section-subtitle">Let’s connect & collaborate</span>
</div>



        {/* Contact Info */}
        <div className="text-center mb-4">
          <p className="mb-1">
            <FaEnvelope />&nbsp;
            <a href="mailto:sourabhgupta.1331@gmail.com">
              sourabhgupta.1331@gmail.com
            </a>
          </p>
          <p className="mb-3">
            <FaPhone />&nbsp;+91 8383890370
          </p>
          <div className="mb-3">
            <a
              className="btn btn-outline-primary me-2"
              href="https://www.linkedin.com/in/sourabhgupta22/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />&nbsp;LinkedIn
            </a>
            <a
              className="btn btn-outline-dark me-2"
              href="https://github.com/Sourabhgupta-11"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />&nbsp;GitHub
            </a>
            <a
              className="btn btn-outline-success"
              href="https://leetcode.com/Sourabh2211"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>
          </div>
          <p className="text-muted small">
            Prefer email? Send a message and I’ll get back to you ASAP.
          </p>
        </div>

        {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary px-4"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
