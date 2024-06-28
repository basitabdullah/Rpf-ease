import "./ProposalTraining.scss";
import training from "../../pictures/training.png";
import { FaCheckCircle } from "react-icons/fa";
import Boxes from "../../Components/Boxes/Boxes";
import { FaRegClock } from "react-icons/fa";
import { MdFormatIndentIncrease } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";

const ProposalTraining = () => {
  const data = [
    {
      id: "1",
      title: "Introduction to Proposal Development",
      point1:
        "Understanding the basics of proposal writing and its importance in government contracting.",
      point2: "Overview of the proposal development lifecycle.",
      isthree: false,
    },
    {
      id: "2",
      title: "RFP Analysis and Strategy",
      point1: "How to read and interpret Request for Proposals (RFPs).",
      point2:
        "Developing a winning proposal strategy based on RFP requirements and evaluation criteria.",
      isthree: false,
    },
    {
      id: "3",
      title: "Proposal Writing Techniques",
      point1: "Crafting clear, concise, and persuasive content.",
      point2: "Effective technical writing for complex concepts.",
      point3:
        "Developing compliant and compelling executive summaries and technical sections.",
      isthree: true,
    },
    {
      id: "4",
      title: "Graphic Design and Layout",
      point1:
        "Creating visually appealing and professional proposal graphics and layouts.",
      point2: "Best practices for integrating graphics into proposals.",
      isthree: false,
    },
    {
      id: "5",
      title: "Compliance and Quality Assurance",
      point1: "Ensuring 100% compliance with RFP requirements.",
      point2: "Quality assurance techniques to produce error-free proposals.",
      isthree: false,
    },
    {
      id: "6",
      title: "Proposal Management",
      point1: "Coordinating proposal development activities.",
      point2: "Best practices for managing timelines and deliverables.",
      point3: "Submitting Proposals.",
      isthree: true,
    },
  ];
  return (
    <div className="proposalTraining">
      <div className="trainingSecOne">
        <div className="left">
          <h1>Proposal Development Training Program</h1>
          <p>
            Are you looking to break into the dynamic field of proposal writing?
            RFPEase offers a comprehensive Proposal Development Training Program
            designed to equip individuals with the skills and knowledge needed
            to excel in this critical domain. Our 5-week course provides an
            in-depth understanding of the proposal development process,coupled
            with practical experience to ensure you are job-ready.
          </p>

          <h1>Course Overview</h1>
          <p>
            Our Proposal Development Training Program is tailored for aspiring
            proposal writers who wish to develop their expertise in crafting
            compelling and compliant proposals. Throughout the
            course,participants will gain hands-on experience and receive
            personalized guidance from industry experts with over 10 years of
            experience in proposal development.
          </p>
        </div>
        <div className="right">
          <div className="image">
            <img src={training} alt="loading" />
          </div>
        </div>
      </div>

      <div className="trainingSecTwo">
        <div className="trainingSecTwoContainer">
          <h1>What You Will Learn</h1>
          {data.map((i) => (
            <div className="box" key={i.id}>
              <div className="title">{i.title}</div>
              <ul>
                <li>
                  <div className="icon">
                    <FaCheckCircle />
                  </div>
                  <p>{i.point1}</p>
                </li>

                <li>
                  <div className="icon">
                    <FaCheckCircle />
                  </div>
                  <p>{i.point2}</p>
                </li>
                <li>
                  {i.isthree && (
                    <div className="icon">
                      <FaCheckCircle />
                    </div>
                  )}
                  <p>{i.point3}</p>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="sideMenuRight">
          <ul>
            <h2>Course Schedule</h2>
            <li>
              <div className="icon">
                <FaRegClock />
              </div>
              <p>
                <span>Duration:</span> 5 Weeks
              </p>
            </li>

            <li>
              <div className="icon">
                <MdFormatIndentIncrease />
              </div>
              <p>
                <span>Format:</span> Online Sessions{" "}
              </p>
            </li>

            <li>
              <div className="icon">
                <MdLiveTv />
              </div>
              <p>
                <span>Sessions:</span> Weekly live sessions with regular
                assessments.
              </p>
            </li>
          </ul>

          <div className="enrollSec">
            <h2>Who Should Enroll?</h2>
            <p>
              Aspiring <span>proposal writers </span>looking to enter the field
              of government contracting.
            </p>
            <p>
              Professionals <span>seeking to enhance</span> their proposal
              development skills.
            </p>
            <p>
              <span>Recent graduates</span> interested in a career in proposal
              writing.
            </p>
          </div>
          <div className="lastSecion">
            <p>
              Join <span>RFPEase’s </span>Proposal Development Training Program
              and take the first step towards a <span>rewarding career</span> in
              proposal writing. Gain the{" "}
              <span>skills, experience, and certification</span> you need to
              succeed in the competitive field of government contracting.
            </p>

          </div>
            <button className="enrollBtn">Enroll</button>
        </div>
      </div>
      <Boxes />
    </div>
  );
};

export default ProposalTraining;
