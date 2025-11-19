import React from "react";
import video from "../assets/5155396-uhd_3840_2160_30fps.mp4";

const Header = () => {
  return (
    <>
      <div className="app-header-container">
        <div className="app-video-container">
          <video
            playsInline
            loop
            muted
            autoPlay
            className="video"
            src={video}
          ></video>
          <h3 className="app-header">Wake Up N Be Productive</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
