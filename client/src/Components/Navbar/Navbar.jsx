import "./Navbar.css"
import logo from "../../pictures/logo.png";
import {Link, useLocation} from "react-router-dom"
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [active,setActive] = useState(false)
    const location = useLocation();

    useEffect(() => {
      setActive(false);
    }, [location]);

  return (
    <div className="header">
      <div className="rfp">
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
      </div>

      <div className="link-container">
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/services" className="links">
          Services
        </Link>
        <Link to="/ourclients" className="links">
          Our Clients
        </Link>
        <Link to="/contact" className="links">
          Contact Us
        </Link>
      </div>

      <Link to="/contact" className="shedule-button">
        Schedule Meeting
      </Link>

      <div className="hamburgerMenu">
        <GiHamburgerMenu onClick={() => setActive((prev) => !prev)} />
      </div>

      {active && (
        <div className="hamMenu">
          <Link to="/" className="menulinks">
            Home
          </Link>
          <Link to="/services" className="menulinks">
            Services
          </Link>
          <Link to="/ourclients" className="menulinks">
            Our Clients
          </Link>
          <Link to="/contact" className="menulinks">
            Contact Us
          </Link>

          <Link to="/contact" className="shedule-button-menu">
            Schedule Meeting
          </Link>
          <div className="close">
            <IoMdClose onClick={() => setActive((prev) => !prev)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar