import { Fade, makeStyles } from "@material-ui/core";

import React from "react";
import { URL_ABOUT } from "../utils/utils";
import { headerdata } from "../data/data";

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

function Header() {
  const classes = useStyles();
  const data = headerdata;

  return (
    <header id="page-top">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <Fade in={true} timeout={{ enter: 2000 }}>
                  <div className={classes.header}>
                    {data ? data.title : "Loading"}
                    <span></span>
                  </div>
                </Fade>

                <Fade in={true} timeout={{ enter: 2500 }}>
                  <div className={classes.body}>
                    {data ? data.paragraph : "Loading"}
                  </div>
                </Fade>

                <div className={classes.learnMore}>
                  <a
                    href={URL_ABOUT}
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
