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
    margin: "auto",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  newText: {
    color: "#F56300",
    fontSize: 18,
    textAlign: "left",
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
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
    width: 500,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      textAlign: "center",
      marginTop: 30,
    },
  },
  commercialLink: {
    fontSize: 15,
    marginTop: 10,
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
}));

function Bctech() {
  const classes = useStyles();
  const data = servicesData.bctech;

  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>
        <div className={classes.newText}>New</div>
        <div className={classes.title}>{data.title}</div>
        <div className={classes.slogan}>{data.slogan}</div>
        <div className={classes.commercialLink}>
          <a href={data.videoLink}>View the commercial{">"}</a>{" "}
        </div>
        <div className={classes.learnMore}>
          <a
            href={"/bc-tech-brochure"}
            className="btn btn-custom btn-lg page-scroll"
          >
            Learn more {">"}
          </a>{" "}
        </div>
      </div>
      <div className={classes.rightContainer}>
        <img
          className={classes.img}
          src="img/services/bc-tech.png"
          alt="bc-tech-pic"
        />
      </div>
    </div>
  );
}

export default Bctech;
