import React, { useState, useEffect } from "react";
import "./Contactus.css";
import ScrollTop from "../ScrollTop";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Contactus = () => {
  const [showModal, setShowModal] = useState(false);

  // Scroll reveal animation
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    reveals.forEach((el) => observer.observe(el));
  }, []);

  // Form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "9dac0848-0962-4748-8eda-67d2a4046ccc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setShowModal(true);
        event.target.reset(); // Reset form fields after successful submission
      }
    } catch (err) {
      console.error("Form submission error:", err);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About Us | Innovative Plastic Packaging Solutions</title>
          <meta name="description" content="About Our Company and Contact Us by Filup a simple Form or Call" />
          <meta name="keywords" content="Plastic packaging QA,Plastic packaging QC standards,High-quality plastic packaging manufacturer,Eco-friendly plastic packaging solutions,Durable plastic packaging supplier,Industrial plastic packaging factory,Food-grade plastic packaging QA,Quality control in plastic production,Sustainable plastic packaging factory,Custom plastic packaging with QC approval,Innovative plastic packaging solutions,Certified plastic packaging manufacturer" />
          <link rel="canonical" href="https://innovation-plastic.com/Contact_us" />
        </Helmet>
      </HelmetProvider>
      <div className="contact-page">
        <ScrollTop />

        {/* Address Section */}
        <div className="address-wrapper reveal">
          <div className="address-section">
            <div className="floating-icon office-icon"></div>
            <h2 className="sec-title">Head Office</h2>
            <p className="address-line">Innovation Plastic Cans Ltd.</p>
            <p className="address-line">Sena Kalyan Bhaban (14th Floor)</p>
            <p className="address-line">195 Motijheel C/A, Dhaka-1000, Bangladesh</p>
            <p className="address-line">Phone: +88-02-223382144, +88-02-223382446, +88-01700-760208</p>
            <p className="address-line">Email: info@innovation-plastic.com</p>
          </div>

          <div className="address-section">
            <div className="floating-icon factory-icon"></div>
            <h2 className="sec-title">Factory</h2>
            <p className="address-line">Innovation Plastic Cans Ltd.</p>
            <p className="address-line">Kobaga, Mahajampur, Sonargaon</p>
            <p className="address-line">Narayanganj, Bangladesh</p>
            <p className="address-line">Email: info@innovation-plastic.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form reveal" onSubmit={onSubmit}>
          <h3 className="form-title">Send Us a Message</h3>

          <div className="row">
            <input type="text" placeholder="Your Name" name="Name" required />
            <input type="text" placeholder="Company / Shop Name" name="Company/Shope name" required />
          </div>

          <div className="row">
            <input type="text" placeholder="Address" name="Address" required />
            <input type="text" placeholder="Number" name="Number" required />
          </div>

          <input className="subject" type="text" placeholder="Subject" name="Subject" required />
          <textarea placeholder="Write Message" className="full" rows="5" name="Massage" required></textarea>

          <button type="submit" className="submit-btn">Submit</button>
        </form>

        {/* Modal */}
        {showModal && (
          <div className="modal-overlay reveal-modal">
            <div className="modal-box">
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for contacting us. We will get back to you soon.</p>
              <button className="close-btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contactus;
