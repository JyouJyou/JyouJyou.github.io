import Contact from "../contact";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import { insightPageTwoData } from "../../data/data";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    marginTop: 120,
    width: "100%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    margin: "auto",
  },
  title: {
    maxWidth: 300,
    fontSize: 40,
    fontFamily: "BiauKai, DFKai-SB",
    fontWeight: 800,
  },
  iconContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 30,
  },
  subtitle: {
    fontFamily: "BiauKai, DFKai-SB",
    fontSize: 25,
    fontWeight: 800,
    maxWidth: 400,
    marginRight: 30,
    marginBottom: 20,
  },
  paragraph: {
    fontFamily: "BiauKai, DFKai-SB",
    whiteSpace: "pre-line",
    fontWeight: 500,
    fontSize: 18,
    maxWidth: 400,
    marginRight: 30,
    marginBottom: 50,
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  article: {
    paddingLeft: 100,
    paddingRight: 100,
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    marginBottom: 100,
    [theme.breakpoints.down("sm")]: {
      display: "block",
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
}));
function InsightSubpage2() {
  // style sheet
  const classes = useStyles();

  return (
    <div id="business-model" className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.title}>{insightPageTwoData.title}</div>
      </div>
      <div className={classes.article} spacing={5}>
        <div>
          <div className={classes.subtitle}>{insightPageTwoData.subtitle1}</div>
          <div className={classes.paragraph}>
            {ReactHtmlParser(insightPageTwoData.paragraph1)}
          </div>
          <div className={classes.subtitle}>{insightPageTwoData.subtitle2}</div>
          <div className={classes.paragraph}>
            {ReactHtmlParser(insightPageTwoData.paragraph2)}
          </div>
        </div>
        <div>
          <div className={classes.subtitle}>{insightPageTwoData.subtitle3}</div>
          <div className={classes.paragraph}>
            {ReactHtmlParser(insightPageTwoData.paragraph3)}
          </div>
          <div className={classes.subtitle}>{insightPageTwoData.subtitle4}</div>
          <div className={classes.paragraph}>
            {ReactHtmlParser(insightPageTwoData.paragraph4)}
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default InsightSubpage2;
