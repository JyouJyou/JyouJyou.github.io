import React, { useRef } from "react";

import { FONT_FAMILY } from "../../App";
import { Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { servicesData } from "../../data/data";
import { useIsVisible } from "react-is-visible";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    width: "100%",
    height: 300,
    display: "flex",
    paddingLeft: 50,
    paddingRight: 50,
    margin: "auto",
    marginTop: "60",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: 340,
      height: "auto",
    },
  },
  title: {
    fontColor: "white",
    fontSize: 50,
    fontWeight: 900,
    fontFamily: FONT_FAMILY,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: 40,
    },
  },
  slogan: {
    fontColor: "white",
    fontSize: 25,
    fontWeight: 900,
    textAlign: "left",
    fontFamily: FONT_FAMILY,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  learnMore: {
    textAlign: "left",
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  rightContainer: {
    maxWidth: 500,
    marginLeft: 50,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  comImg: {
    width: 500,
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  phoneImg: {
    width: "80%",
    textAlign: "center",
    marginTop: 30,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  introText: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingRight: 10,
      paddingLeft: 10,
    },
    textAlign: "left",
    marginTop: 10,
  },
}));

function Iqmax() {
  const classes = useStyles();
  const data = servicesData.iqmax;
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef, { once: true });

  return (
    <div className={classes.root} ref={nodeRef}>
      <div className={classes.leftContainer}>
        {isVisible && (
          <Fade in={true} timeout={{ enter: 2000 }}>
            <img
              className={classes.comImg}
              src="img/services/iqmax.png"
              alt="iqmax-pic"
            />
          </Fade>
        )}
      </div>
      {isVisible && (
        <Fade in={true} timeout={{ enter: 2000 }}>
          <div className={classes.rightContainer}>
            <div className={classes.title}>{data.title}</div>
            <div className={classes.slogan}>{data.slogan}</div>
            <div>
              <p className={classes.introText}>{data.intro}</p>
            </div>
            <div className={classes.learnMore}>
              <a href={data.link} className="btn btn-custom btn-lg page-scroll">
                Learn more {">"}
              </a>{" "}
            </div>
          </div>
        </Fade>
      )}
      <div>
        {isVisible && (
          <Fade in={true} timeout={{ enter: 2000 }}>
            <img
              className={classes.phoneImg}
              src="img/services/iqmax.png"
              alt="iqmax-pic"
            />
          </Fade>
        )}
      </div>
    </div>
  );
}

export default Iqmax;
