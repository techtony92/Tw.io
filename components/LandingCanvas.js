import React, { Fragment,useState, useEffect, useRef } from "react";
import { initCanvas,  playAnimation } from "../UI_Logic/landing";

const LandingCanvas = () => {
  let canvasREF = useRef(null);

  useEffect(() => {
    initCanvas(window);
    playAnimation(window);
  }, []);

  return (
    <Fragment>
      <div className="canvasParent">
        <canvas id="canvas" className="primaryCanvas" ref={canvasREF}></canvas>
      </div>
    </Fragment>
  );
};



  
    


export default LandingCanvas;