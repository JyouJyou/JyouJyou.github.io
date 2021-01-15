import { Fade, Slide } from "@material-ui/core";
import React, { useRef } from "react";

import { useIsVisible } from "react-is-visible";

function About(props) {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef, { once: true });

  return (
    <div id="about">
      <div className="container">
        <div className="row" ref={nodeRef}>
          <div className="col-xs-12 col-md-6">
            {isVisible && (
              <Slide direction="right" in={true} timeout={{ enter: 2000 }}>
                <img src="img/about.jpg" className="img-responsive" alt="" />
              </Slide>
            )}
          </div>

          <div className="col-xs-12 col-md-6">
            {isVisible && (
              <Fade in={true} timeout={{ enter: 2000 }}>
                <div className="about-text">
                  <h2>About Us</h2>
                  <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
                  <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
                </div>
              </Fade>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
