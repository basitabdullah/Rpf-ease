import "./Navbar.css"
import logo from "../../pictures/logo.png";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="header">
      <div className="rfp">
        <img className="logo" src={logo} />
      </div>

      <div className="link-container">
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/aboutus" className="links">
          About Us
        </Link>
        <Link to="/services" className="links">
          Services
        </Link>
        <Link to="/ourclients" className="links">
          Our Clients
        </Link>
        <Link to="/contact"  className="links">
          Contact Us
        </Link>
      </div>

      <Link to="schedule" className="shedule-button">Schedule Meeting</Link>
    </div>
  );
}

export default Navbar