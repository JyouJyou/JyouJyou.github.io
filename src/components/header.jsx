import { Fade, makeStyles } from "@material-ui/core";

import React from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: 60,
    color: "white",
    lineHeight: "55px",
    fontWeight: 900,
  },
  body: {
    marginTop: 50,
    color: "white",
    fontSize: 20,
    fontWeight: 500,
  },
  learnMore: {
    marginTop: 10,
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <Fade in={true} timeout={{ enter: 2000 }}>
                  <div className={classes.header}>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </div>
                </Fade>

                <Fade in={true} timeout={{ enter: 2500 }}>
                  <div className={classes.body}>
                    {props.data ? props.data.paragraph : "Loading"}
                  </div>
                </Fade>

                <div className={classes.learnMore}>
                  <a
                    href="/#about"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
