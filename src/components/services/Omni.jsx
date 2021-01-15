import { FONT_FAMILY } from "../../App";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { servicesData } from "../../data/data";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 300,
    display: "flex",
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: "130",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  title: {
    fontColor: "white",
    fontSize: 50,
    fontWeight: 900,
    fontFamily: FONT_FAMILY,
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
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
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  learnMore: {
    textAlign: "left",
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  rightContainer: {
    marginLeft: 30,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  leftContainer: {
    width: 500,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  img: {
    width: 450,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      textAlign: "center",
      marginTop: 30,
    },
  },
}));

function Bctech() {
  const classes = useStyles();
  const data = servicesData.omni;

  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>
        <div className={classes.title}>{data.title}</div>
        <div className={classes.slogan}>{data.slogan}</div>
        <div className={classes.learnMore}>
          <a href={data.link} className="btn btn-custom btn-lg page-scroll">
            Learn more {">"}
          </a>{" "}
        </div>
      </div>
      <div className={classes.rightContainer}>
        <img
          className={classes.img}
          src="img/services/omni.png"
          alt="bc-tech-pic"
        />
      </div>
    </div>
  );
}

export default Bctech;
