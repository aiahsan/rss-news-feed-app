import React from "react";
import Lottie from "react-lottie";
import animationData from "./9844-loading-40-paperplane.json";

const LoadingAnimation = (props) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div> 
      {props.children}
      <div className="overlay-3248asu23n">
        <div className="loading-animation">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
