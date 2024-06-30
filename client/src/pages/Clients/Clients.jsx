import React from "react";
import edu from "../../pictures/edu.svg";
import construction from "../../pictures/building.svg";
import healthcare from "../../pictures/healthcare.svg";
import it from "../../pictures/It.svg";
import logistic from "../../pictures/logistic.svg";
import management from "../../pictures/management.svg";
import accounting from "../../pictures/accounting.svg";
import support from "../../pictures/support.svg";
import staffing from "../../pictures/staffing.svg";
import video from "../../pictures/Our Clients .mp4";
import poster from "../../pictures/poster.png";
import "./Clients.scss";
const Clients = () => {
  const things1 = [
    {
      title: "Education",
      key: 1,
      img: edu,
      fig: 110,
    },
    {
      title: "Construction",
      key: 2,
      img: construction,
      fig: 50,
    },
    {
      title: "Healthcare",
      key: 3,
      img: healthcare,
      fig: 100,
    },
  ];

  const things2 = [
    {
      title: "Information Technology",
      key: 4,
      img: it,
      fig: 100,
    },
    {
      title: "Staffing",
      key: 5,
      img: staffing,
      fig: 150,
    },
    {
      title: "Event Management",
      key: 6,
      img: logistic,
      fig: 120,
    },
  ];

  const things3 = [
    {
      title: "Program Management",
      key: 7,
      img: management,
      fig: 75,
    },
    {
      title: "Payrolling",
      key: 8,
      img: accounting,
      fig: 50,
    },
    {
      title: "Administration Support",
      key: 9,
      img: support,
      fig: 75,
    },
  ];

  return (
    <div className="clients">
      <div className="text">Clients We Served</div>

      <div className="things">
        <div className="one">
          {things1.map((i) => (
            <div className="thing" key={i.key}>
              <div className="thingContainer">
                <img src={i.img} alt="err" />
                <p className="title">{i.title}</p>
              </div>
              <p className="fig">{i.fig}+</p>
            </div>
          ))}
        </div>

        <div className="two">
          {things2.map((i) => (
            <div className="thing" key={i.key}>
              <div className="thingContainer">
                <img src={i.img} alt="err" />
                <p>{i.title}</p>
              </div>
              <p className="fig">{i.fig}+</p>
            </div>
          ))}
        </div>

        <div className="three">
          {things3.map((i) => (
            <div className="thing" key={i.key}>
              <div className="thingContainer">
                <img src={i.img} alt="err" />
                <p>{i.title}</p>
              </div>
              <p className="fig">{i.fig}+</p>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonials">
        <div className="text">Client Testimonials :</div>
        <div className="videoContainer">
          <video
            controlsid="video"
            controls
            controlsList="nodownload"
            preload="metadata"
            poster={poster}
            src={video}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Clients;
