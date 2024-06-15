import React from "react";
import video from "../../assets/video.mp4";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <video
        controls
        autoPlay
        muted
        className="video-player"
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default LandingPage;
