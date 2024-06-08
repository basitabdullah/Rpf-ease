import "./Contact.css";
import phone from "../../pictures/phone-logo.svg";
import email from "../../pictures/email.svg";
import address from "../../pictures/address-3.svg";
import insta from "../../pictures/instagram-3.svg";
import facebook from "../../pictures/facebook-2.svg";
import linkedin from "../../pictures/linkedin.svg";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    fetch("http://localhost:3001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        toast.success("Message Sent!");
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="sections">
          <div className="upper-text">Get in Contact</div>

          <div className="section1">
            <input
              type="text"
              placeholder="First name *"
              className="name"
              required
              value={formData.name}
              name="name"
              onChange={handleChange}
            />
          </div>

          <div className="section2">
            <input
              type="email"
              placeholder="E-mail *"
              className="email"
              value={formData.email}
              name="email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="section3">
            <input
              type="tel"
              placeholder="Phone"
              className="phone"
              value={formData.phone}
              name="phone"
              onChange={handleChange}
            />
          </div>

          <div className="section4">
            <textarea
              className="msg"
              value={formData.message}
              name="message"
              required
              placeholder="Drop a Message*"
              onChange={handleChange}
              style={{ width: "95%" }}
              rows="7"
            ></textarea>
          </div>

          <div className="section5">
            <button
              className={loading ? "done load" : "done"}
              type="submit"
            >
              {loading ? "SENDING..." : "REACH OUT"}
            </button>
          </div>

          <div className="deliver">Your message has gone through. Thanks!</div>

          <div className="not-deliver">Failed to deliver!</div>
        </div>
      </form>

      <div className="contact-details">
        <h1>Contact Details</h1>

        <div className="itemContainer">
          <div className="item">
            <img src={phone} alt="loading" />
            <p>+91 00000000 , +1 020202020202</p>
          </div>
          <div className="item">
            <img src={email} alt="loading" />
            <p>hr@rfpease.org</p>
          </div>
          <div className="item">
            <img src={address} alt="loading" />
            <p>190034, house no 20, street o-block texas, USA.</p>
          </div>
        </div>

        <div className="icons">
          <div className="icon">
            <a href="">
              <img src={insta} alt="load" />
            </a>
          </div>
          <div className="icon">
            <a href="">
              <img src={facebook} alt="load" />
            </a>
          </div>
          <div className="icon">
            <a href="">
              <img src={linkedin} alt="load" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;