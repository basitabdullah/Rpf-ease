import "./Home.css";
import winlogo from "../../pictures/winlogo.png";
import kLogo from "../../pictures/8klogo.png";
import people from "../../pictures/peoplelogo.png";
import checkMark from "../../pictures/goodlogo.png";
import pic1 from "../../pictures/picture1-removebg-preview.png";
import ServicesComp from "../../Components/ServicesComp/ServicesComp";
import edu from "../../pictures/edu.svg";
import construction from "../../pictures/construction.svg";
import healthcare from "../../pictures/healthcare.svg";
import it from "../../pictures/It.svg";
import janitorial from "../../pictures/janitorial.svg";
import logistic from "../../pictures/logistic.svg";
import management from "../../pictures/management.svg";
import accounting from "../../pictures/accounting.svg";
import support from "../../pictures/support.svg";
import { Link } from "react-router-dom";
const Home = () => {
  const things1 = [
    {
      title: "Education",
      key: 1,
      img: edu,
    },
    {
      title: "Construction",
      key: 2,
      img: construction,
    },
    {
      title: "Healthcare",
      key: 3,
      img: healthcare,
    },
   
   
  ];


  const things2 = [
    {
      title: "Information Technology",
      key: 4,
      img: it,
    },
    {
      title: "Janitorial Services",
      key: 5,
      img: janitorial,
    },
    {
      title: "Logistic & Supply Chain",
      key: 6,
      img: logistic,
    },
  ];

  const things3 = [
    {
      title: "Program Management",
      key: 7,
      img: management,
    },
    {
      title: "Accounting & Finance",
      key: 8,
      img: accounting,
    },
    {
      title: "Administration Support",
      key: 9,
      img: support,
    },
  ];

  return (
    <div className="home-container">
      <div className="services-section">
        <div className="left">
          <div className="para">
            <span className="span1">YOUR GATEWAY </span>
            <span className="span2">
              <span className="to">TO </span>
              WINNING
            </span>
            <span className="span3"> PROPOSALS. </span>
          </div>
          <Link to="/services" className="our-services">
            Our Services
          </Link>
        </div>

        <div className="right">
          <img
            src="https://www.contragenix.com/wp-content/uploads/2024/02/why-choose-us-3.svg"
            className="pic1"
          />
        </div>
      </div>

      <div className="about-section">
        <h1 className="h1">About Us</h1>
        <p>
          RPF EASE is a leading provider of comprehensive business
          solutions, with a focus on helping organizations achieve their
          business goals through effective proposal development, support, and
          training services. In addition to our proposal expertise, we also
          offer software, website, and application development services to help
          businesses improve their digital presence and streamline their
          operations. With a team of highly skilled professionals, we are
          committed to delivering exceptional results and providing our clients
          with the highest level of service. Our passion for excellence,
          attention to detail, and customer-centric approach sets us apart in
          the industry, and we look forward to working with you to help your
          business succeed.
        </p>
      </div>

      <div className="banner">
        <div className="items">
          <img src={kLogo} className="item1" />
          8k+ Proposal Engagements
        </div>
        <div className="items">
          <img className="item2" src={winlogo} />
          35% Win Percentage
        </div>
        <div className="items">
          <img className="item3" src={people} />
          100+ In-house Consultants
        </div>
        <div className="items">
          <img className="item4" src={checkMark} />
          100% Compliance
        </div>
      </div>

      <ServicesComp />

      <div className="last-portion">
        <div className="text">Industries we Serve</div>
        <div className="things">
          <div className="one">
            {things1.map((i) => (
              <div class="thing" key={i.key}>
                <img src={i.img} alt="err" />
                <p>{i.title}</p>
              </div>
            ))}
          </div>

          <div className="two">
            {things2.map((i) => (
              <div class="thing" key={i.key}>
                <img src={i.img} alt="err" />
                <p>{i.title}</p>
              </div>
            ))}
          </div>

          <div className="three">
            {things3.map((i) => (
              <div class="thing" key={i.key}>
                <img src={i.img} alt="err" />
                <p>{i.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
