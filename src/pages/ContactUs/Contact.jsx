import  "./Contact.css";
import phone from "../../pictures/phone-logo.svg";
import email from "../../pictures/email.svg";
import address from "../../pictures/address-3.svg";
import insta from "../../pictures/instagram-3.svg";
import facebook from "../../pictures/facebook-2.svg";
import linkedin from "../../pictures/linkedin.svg";



const Contact = () => {
  return (
    <div className="container">
      <form>
        <div className="sections">
          <div className="upper-text">Get in Contact</div>

          <div className="section1">
            <label for="name"></label>

            <input
              type="text"
              placeholder=" First name *"
              className="name"
              required
              id="name"
              name="name"
            />
          </div>

          <div className="section2">
            <label for="email"></label>
            <input
              type="email"
              placeholder="E-mail *"
              className="email"
              required
              id="email"
              name="email"
            />
          </div>

          <div className="section3">
            <label for="tel"></label>
            <input
              type="tel"
              placeholder="Phone"
              className="phone"
              id="tel"
              name="tel"
            />
          </div>

          <div className="section4">
            <label for="message"></label>
            <textarea
              name="message"
              id="message"
              className="msg"
              rows="7"
              cols="31.5"
            ></textarea>
            <div className="placeholder-text" id="placeholder">
              Drop a message *
            </div>
          </div>

          <div className="section5">
            <button className="done" type="submit" value="submit">
              REACH OUT
            </button>
          </div>

          <div className="deliver">Your message has gone through. Thanks!</div>

          <div className="not-deliver">Failed to deliver!</div>
        </div>
      </form>

      <div className="contact-details">
        <h1>Contact Deatils</h1>

        <div className="itemContainer">
          <div className="item">
            <img src={phone} alt="" />
            <p>+91 00000000 , +1 020202020202</p>
          </div>
          <div className="item">
            <img src={email} alt="" />
            <p>hr@rfpease.org</p>
          </div>
          <div className="item">
            <img src={address} alt="" />
            <p>
              Islamabad , 190034 , house no 20 , street o-block texas , USA.
            </p>
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
