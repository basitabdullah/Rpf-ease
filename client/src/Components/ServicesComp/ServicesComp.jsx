import "./ServicesComp.css"
import Training from "../../pictures/training.png"
import Development from "../../pictures/development.png";
const Services = () => {
  return (
    <div className="our-offering">
      <h1 className="offering-title">Our Offerings</h1>
      <div className="offering-container">
        <div className="offering-item">
          <img src={Development} alt="loading" />

          <div className="lower-sec">
            <p className="title-offering">Proposal Development</p>
            <span>Read More</span>
          </div>
        </div>

        <div className="offering-item">
          <img src={Training} alt="loading" />

          <div className="lower-sec">
            <p className="title-offering">Proposal Training</p>
            <span>Read More</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services