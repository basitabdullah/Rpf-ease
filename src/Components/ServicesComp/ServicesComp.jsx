import "./ServicesComp.css"

const Services = () => {
  return (
    <div className="our-offering">
      <h1 className="offering-title">Our Offerings</h1>
      <div className="offering-container">
        <div className="offering-item">
          <img
            src="https://www.contragenix.com/wp-content/uploads/2024/02/Proposal-Development-Services-01.svg"
            alt=""
          />

          <div className="lower-sec">
            <p className="title-offering">Proposal Development</p>
            <span>Read More</span>
          </div>
        </div>

        <div className="offering-item">
          <img
            src="https://www.contragenix.com/wp-content/uploads/2024/05/Web-Development-Images-1.svg"
            alt=""
          />

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