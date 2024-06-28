import "./ServicesComp.css";
import Training from "../../pictures/training.png";
import Development from "../../pictures/development.png";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div className="our-offering">
      <h1 className="offering-title">Our Offerings</h1>
      <div className="offering-container">
        <Link to="/proposal-dev" className="offering-item">
          <img src={Development} alt="loading" />
          <div className="lower-sec">
            <p className="title-offering">Proposal Development</p>
            <span className="readmore">Read More</span>
          </div>
        </Link>

        <Link to="/proposal-training" className="offering-item">
          <img src={Training} alt="loading" />
          <div className="lower-sec">
            <p className="title-offering">Proposal Training</p>
            <span className="readmore">Read More</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
