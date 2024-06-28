  import React from 'react'
import "./Boxes.scss";
import studying from "../../pictures/studying-icon.svg";
import project from "../../pictures/project-icon.svg";
import material from "../../pictures/materials-icon.svg";
import feedback from "../../pictures/feedback-icon.svg";
import certificate from "../../pictures/certificate-icon.svg";
const Boxes = () => {
  return (
    <div className="proposalSecThree">
      <h1>Course Features</h1>
      <div className="proposalSecThreeContainer">
        <div className="item">
          <div className="imageIcon">
            <img src={studying} alt="err" />
          </div>
          <p className="boxtitle">Interactive Learning</p>
          <p className="desc">
            Engage with expert instructors through live sessions, Q&A, and group
            discussions.
          </p>
        </div>

        <div className="item">
          <div className="imageIcon">
            <img src={project} alt="err" />
          </div>
          <p className="boxtitle">Hands-On Projects</p>
          <p className="desc">
            Work on real-life proposal projects to apply what you've learned.
          </p>
        </div>

        <div className="item">
          <div className="imageIcon">
            <img src={material} alt="err" />
          </div>
          <p className="boxtitle">Comprehensive Materials</p>
          <p className="desc">
            Access a wide range of learning materials, including templates,
            checklists, and guides.
          </p>
        </div>

        <div className="item">
          <div className="imageIcon">
            <img src={feedback} alt="err" />
          </div>
          <p className="boxtitle">Personalized Feedback</p>
          <p className="desc">
            Receive detailed feedback on your work from experienced proposal
            writers.
          </p>
        </div>

        <div className="item">
          <div className="imageIcon">
            <img src={certificate} alt="err" />
          </div>
          <p className="boxtitle">Internship Certificate</p>
          <p className="desc">
            Upon successful completion of the course, participants will receive
            an internship certificate, enhancing their credentials in the job
            market.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Boxes