import "./ProposalPage.scss";
import development from "../../pictures/development.png";
import { Link } from "react-router-dom";
import capture from "../../pictures/capture-icon.svg";
import schedule from "../../pictures/schedule-icon.svg";
import content from "../../pictures/content-icon.svg";
import writing from "../../pictures/writing-icon.svg";
import editing from "../../pictures/editing-icon.svg";
import design from "../../pictures/design-icon.svg";
import template from "../../pictures/template-icon.svg";
import compliance from "../../pictures/compliance-icon.svg";
import review from "../../pictures/review-icon.svg";
import proposal from "../../pictures/proposal-icon.svg";
import submission from "../../pictures/submission-icon.svg";
import team from "../../pictures/team-icon.svg";
import experience from "../../pictures/experience-icon.svg";
import hundred from "../../pictures/hundred-icon.svg";
import solution from "../../pictures/solution-icon.svg";
import success from "../../pictures/success-icon.svg";
import support from "../../pictures/support-icon.svg";


const ProposalPage = () => {
  return (
    <div className="proposal">
      <div className="proposalSecOne">
        <div className="proposalSecOneleft">
          <h1>RFPEase Proposal Development Services</h1>
          <p>
            Navigating the complex landscape of government contracting can be
            challenging for small and medium-sized businesses. At RFPEase, we
            specialize in helping you penetrate this competitive market by
            creating compliant, persuasive, and visually appealing responses.
            With over 10 years of experience in crafting winning proposals, our
            expert team is dedicated to transforming your potential into
            performance, ensuring your submissions stand out and succeed.
            Partner with RFPEase to elevate your proposal development efforts
            and increase your win rates. Let us handle the intricacies of
            proposal writing and management so you can focus on delivering
            exceptional services and solutions to your clients.
          </p>
        </div>
        <div className="proposalSecOneRight">
          <div className="image">
            <img src={development} alt="loading" />
          </div>
        </div>
      </div>
      <div className="proposalSecTwo">
        <h1>Our Proposal Development Process</h1>
        <div className="proposalSecTwoContainer">
          <h5>Proposal Strategy and Planning</h5>
          <div className="item">
            <img src={capture} alt="" />
            Capture Management : We help you identify and understand each RFP's
            key requirements and evaluation criteria to develop a winning
            strategy.
          </div>
          <div className="item blue">
            <img src={schedule} alt="" />
            Proposal Schedule Management : Our team ensures that all proposal
            activities are meticulously planned and executed on time.
          </div>
        </div>

        <div className="proposalSecTwoContainer">
          <h5>Proposal Writing and Editing</h5>
          <div className="item">
            <img src={content} alt="" />
            Content Development : Our experienced writers craft clear, concise,
            and compelling content that highlights your strengths and addresses
            the RFP requirements.
          </div>
          <div className="item blue">
            <img src={writing} alt="" />
            Technical Writing : We provide specialized technical writing to
            articulate complex concepts and technical details effectively.
          </div>
          <div className="item ">
            <img src={editing} alt="" />
            Review and Editing : Our editors refine your proposal to ensure
            clarity, coherence, and a polished final product.
          </div>
        </div>

        <div className="proposalSecTwoContainer">
          <h5>Graphic Design and Layout</h5>
          <div className="item">
            <img src={design} alt="" />
            Visual Design : Our graphic designers create visually appealing and
            professional graphics, charts, and layouts to enhance your
            proposal’s readability and impact.
          </div>
          <div className="item blue">
            <img src={template} alt="" />
            Template Development : We design custom proposal templates that are
            easy to use and tailored to your brand’s aesthetics.
          </div>
        </div>

        <div className="proposalSecTwoContainer">
          <h5>Compliance and Quality Assurance</h5>
          <div className="item">
            <img src={compliance} alt="" />
            Compliance Matrix : We develop detailed compliance matrices to
            ensure that your proposal meets all RFP requirements and standards.
          </div>
          <div className="item blue">
            <img src={review} alt="" />
            Quality Reviews : Our quality assurance team conducts thorough
            reviews to guarantee that your proposal is error-free and of the
            highest quality.
          </div>
        </div>

        <div className="proposalSecTwoContainer">
          <h5>Proposal Management and Submission</h5>
          <div className="item">
            <img src={proposal} alt="" />
            Proposal Coordination : We coordinate the entire proposal process,
            from initial planning to final submission, ensuring seamless
            communication and collaboration among all stakeholders.
          </div>
          <div className="item blue">
            <img src={submission} alt="" />
            Submission Support : Our team assists with the final packaging and
            submission of your proposal, whether electronic or hard copy,
            ensuring all guidelines are followed.
          </div>
        </div>
      </div>
      <div className="proposalSecThree">
        <h1>Why Choose RFPEase?</h1>
        <div className="proposalSecThreeContainer">
          <div className="item">
            <div className="imageIcon">
              <img src={team} alt="err" />
            </div>
            <p className="title">Expert Team</p>
            <p className="desc">
              Our team comprises seasoned professionals with over 10 years of
              experience in proposal development across various industries.
            </p>
          </div>

          <div className="item">
            <div className="imageIcon">
              <img src={experience} alt="err" />
            </div>
            <p className="title">Extensive Experience</p>
            <p className="desc">
              We have successfully worked with over 100 government agencies,
              providing us with deep insights into various government entities'
              specific requirements and expectations.
            </p>
          </div>

          <div className="item">
            <div className="imageIcon">
              <img src={hundred} alt="err" />
            </div>
            <p className="title">Compliance</p>
            <p className="desc">
              We ensure that every proposal we develop is fully compliant with
              all RFP requirements and standards, mitigating the risk of
              disqualification due to non-compliance.
            </p>
          </div>

          <div className="item">
            <div className="imageIcon">
              <img src={solution} alt="err" />
            </div>
            <p className="title">Customized Solutions</p>
            <p className="desc">
              We tailor our services to meet your specific needs and objectives,
              ensuring the best possible outcomes.
            </p>
          </div>

          <div className="item">
            <div className="imageIcon">
              <img src={success} alt="err" />
            </div>
            <p className="title">Proven Success</p>
            <p className="desc">
              Our track record includes crafting hundreds of winning proposals,
              demonstrating our ability to help clients secure contracts and
              grow their businesses.
            </p>
          </div>

          <div className="item">
            <div className="imageIcon">
              <img src={support} alt="err" />
            </div>
            <p className="title">End-to-End Support</p>
            <p className="desc">
              From initial strategy to final submission, we provide
              comprehensive support throughout the entire proposal development
              process..
            </p>
          </div>
        </div>
      </div>

      <Link to="/contact" className="shedule-button-proposal ">
        Schedule Meeting
      </Link>
    </div>
  );
};

export default ProposalPage;
