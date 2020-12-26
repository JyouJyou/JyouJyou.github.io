import React from "react";
import { makeStyles } from "@material-ui/core";

const MARGIN_IN_BETWEEN = 30
const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: 60,
    color: "white",
    lineHeight: "55px",
    fontWeight: 900
  },
  body: {
    marginTop: 50,
    color: "white",
    fontSize: 20,
    fontWeight: 500
  },
  learnMore: {
    marginTop: 10
  }
}))

function Header (props) {
  const classes = useStyles();

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div className={classes.header}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </div>

                <div className={classes.body}>
                  {props.data ? props.data.paragraph : "Loading"}
                </div>

                <div className={classes.learnMore}>
                  <a
                    href="#features"
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
