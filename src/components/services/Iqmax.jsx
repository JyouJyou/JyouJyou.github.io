import { FONT_FAMILY } from "../../App";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { servicesData } from "../../data/data";

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
    [theme.breakpoints.down("xs")]: {
      display: "block",
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: "250",
      height: "auto",
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
    maxWidth: 500,
    marginLeft: 50,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  comImg: {
    width: 500,
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
}));

function Iqmax() {
  const classes = useStyles();
  const data = servicesData.iqmax;

  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>
        <img
          className={classes.comImg}
          src="img/services/iqmax.png"
          alt="iqmax-pic"
        />
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.title}>{data.title}</div>
        <div className={classes.slogan}>{data.slogan}</div>
        <div className={classes.learnMore}>
          <a href={data.link} className="btn btn-custom btn-lg page-scroll">
            Learn more {">"}
          </a>{" "}
        </div>
      </div>
      <div>
        <img
          className={classes.phoneImg}
          src="img/services/iqmax.png"
          alt="iqmax-pic"
        />
      </div>
    </div>
  );
}

export default Iqmax;
