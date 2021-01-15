import React, { useRef } from "react";

import { FONT_FAMILY } from "../../App";
import { Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { servicesData } from "../../data/data";
import { useIsVisible } from "react-is-visible";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 380,
    display: "flex",
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: "130",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      paddingLeft: 0,
      paddingRight: 0,
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
    marginLeft: 30,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  leftContainer: {
    width: 500,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  img: {
    width: 450,
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      textAlign: "center",
      marginTop: 30,
    },
  },
}));

function Bctech() {
  const classes = useStyles();
  const data = servicesData.omni;
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef, { once: true });

  return (
    <div className={classes.root} ref={nodeRef}>
      {isVisible && (
        <Fade in={true} timeout={{ enter: 2000 }}>
          <div className={classes.leftContainer}>
            <div className={classes.title}>{data.title}</div>
            <div className={classes.slogan}>{data.slogan}</div>
            <div className={classes.learnMore}>
              <a href={data.link} className="btn btn-custom btn-lg page-scroll">
                Learn more {">"}
              </a>{" "}
            </div>
          </div>
        </Fade>
      )}
      <div className={classes.rightContainer}>
        {isVisible && (
          <Fade in={true} timeout={{ enter: 2000 }}>
            <img
              className={classes.img}
              src="img/services/omni.png"
              alt="bc-tech-pic"
            />
          </Fade>
        )}
      </div>
    </div>
  );
}

export default Bctech;
