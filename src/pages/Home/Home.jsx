import "./Home.css";
import winlogo from "../../pictures/winlogo.png";
import kLogo from "../../pictures/8klogo.png";
import people from "../../pictures/peoplelogo.png";
import checkMark from "../../pictures/goodlogo.png";
import ServicesComp from "../../Components/ServicesComp/ServicesComp";
import edu from "../../pictures/edu.svg";
import construction from "../../pictures/building.svg";
import healthcare from "../../pictures/healthcare.svg";
import it from "../../pictures/It.svg";
import janitorial from "../../pictures/janitorial.svg";
import logistic from "../../pictures/logistic.svg";
import management from "../../pictures/management.svg";
import accounting from "../../pictures/accounting.svg";
import support from "../../pictures/support.svg";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
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
            <MdOutlineKeyboardArrowRight />
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
          Welcome to RFPEase, your trusted partner in crafting compelling and
          winning RFP responses. With a proven track record of success, we
          specialize in transforming complex requirements into clear, persuasive
          proposals that set our clients apart. At RFPEase, we understand the
          intricacies of the RFP process and the critical importance of a
          well-crafted response. Our team comprises industry experts with
          decades of combined experience in proposal development, strategic
          planning, and competitive analysis. We are dedicated to delivering
          high-quality, customized RFP responses that align with your unique
          business objectives and increase your chances of securing valuable
          contracts.
        </p>
        <h1 className="h1">Why Choose RFP Ease?</h1>
        <h3> Expert Team:</h3>
        <p>
          Our team includes certified proposal managers, industry veterans, and
          skilled writers who understand the nuances of various sectors,
          including government, healthcare, technology, and more.
        </p>
        <h3> Comprehensive Approach:</h3>
        <p>
          We offer end-to-end RFP response services, from initial analysis and
          strategy formulation to final review and submission. Our meticulous
          process ensures no detail is overlooked.
        </p>

        <h3>Client-Centric Focus:</h3>
        <p>
          We pride ourselves on our collaborative approach, working closely with
          clients to understand their goals and tailor our services to meet
          their specific needs. Your success is our success.
        </p>
        <h3> Timely Delivery: </h3>
        <p>
          In the fast-paced world of RFPs, timing is everything. Our streamlined
          processes and dedicated team ensure that your proposals are delivered
          on time, every time. At RFPEase, we believe in the power of a
          well-crafted proposal to open doors and drive growth. Whether you're a
          small business looking to break into new markets or a large
          corporation aiming to expand your portfolio, we have the expertise and
          dedication to help you achieve your goals. Partner with us and
          experience the RFPEase difference. Together, we can turn your RFP
          responses into winning proposals that propel your business forward.
          Contact us today to learn how we can assist you in achieving your
          business objectives through strategic, winning RFP responses.
        </p>
      </div>

      <div className="banner">
        <div className="items">
          <img className="item3" src={people} />
          100+ In-house Consultants
        </div>
        <div className="items">
          <img src={kLogo} className="item1" />
          8k+ Proposal Engagements
        </div>
        <div className="items">
          <img className="item4" src={checkMark} />
          100% Compliance
        </div>
        <div className="items">
          <img className="item2" src={winlogo} />
          35% Win Percentage
        </div>
      </div>

      <ServicesComp />

      <div className="last-portion">
        <div className="text">Industries we Serve</div>
        <div className="things">
          <div className="one">
            {things1.map((i) => (
              <div className="thing" key={i.key}>
                <img src={i.img} alt="err" />
                <p>{i.title}</p>
              </div>
            ))}
          </div>

          <div className="two">
            {things2.map((i) => (
              <div className="thing" key={i.key}>
                <img src={i.img} alt="err" />
                <p>{i.title}</p>
              </div>
            ))}
          </div>

          <div className="three">
            {things3.map((i) => (
              <div className="thing" key={i.key}>
                <img src={i.img} alt="err" />
                <p>{i.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="slogan-footer">
        <h1>
          "From Concept to Contract <span> Your Proposal Writing Experts"</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
