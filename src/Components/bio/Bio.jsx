import React from "react";
import bioImage from "../../assets/Biswa_img.jpg";
import "./bio.css";

const Bio = () => {
  return (
    <div className="bio">
      <div className="left">
        <div>
          {" "}
          <h1>Hi, I'm Biswajit Saraf</h1>
        </div>
        <p>
          A passionate Full Stack Software Developer 🚀 having an experience of
          building Web and Mobile applications with JavaScript / Reactjs /
          Nodejs, React Native and some other cool libraries and frameworks.
        </p>
        <div className="button">
          <a href="https://wa.me/+918917348647?text=Hello%20Nightsky">
            {" "}
            <button>Contact Me</button>
          </a>
          <a href="https://emerald-sallee-8.tiiny.site/">
            <button>Resume</button>
          </a>
        </div>
      </div>
      <div className="right">
        <img src={bioImage} alt="bioImage" />
      </div>
    </div>
  );
};

export default Bio;
