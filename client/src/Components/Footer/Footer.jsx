import "./Footer.css";
import Logo from "../../pictures/logo3.png";
import background from "../../pictures/background.jpg";
import { IoCallSharp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { PiNavigationArrowFill } from "react-icons/pi";
import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <img className="background" src={background} alt="" />
      <div className="image-sec">
        <Link to="/">
          <img className="logo" src={Logo} alt="err" />
        </Link>
      </div>
      <div className="communicate">
        <div className="communicate-item">
          <div className="icon">
            <IoCallSharp />
          </div>
          <div className="details">
            <p>Call Us</p>
            <p>+91 9622232093</p>
          </div>
        </div>

        <div className="communicate-item">
          <div className="icon">
            <IoMailSharp />
          </div>
          <div className="details">
            <p>Write to us</p>
            <p>hr@rfpease.org</p>
          </div>
        </div>

        <div className="communicate-item">
          <div className="icon">
            <PiNavigationArrowFill />
          </div>
          <div className="details">
            <p>Address</p>
            <p>6705 W Highway 290 Suite 607 #1021, Austin, TX. 78735-8407 United States</p>
          </div> 
        </div>
      </div>

      <div className="copyright">
        <p>
          Copyright <FaCopyright /> 2023 RFPEase | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
