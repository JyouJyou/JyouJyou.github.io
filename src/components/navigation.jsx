import {
  URL_ABOUT,
  URL_CONTACT,
  URL_INSIGHTS,
  URL_NEWS,
  URL_PRODUCTS,
  URL_TEAM,
  URL_TOP,
} from "../utils/utils";

import { HashLink } from "react-router-hash-link";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 60,
    marginTop: -15,
  },
}));

function Navigation(props) {
  const classes = useStyles();

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll logoContainer" href={URL_TOP}>
            <img
              className={classes.logo}
              src="img/commons/jyoujyou-logo.png"
              alt="logo"
            />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <HashLink to={URL_ABOUT} className="page-scroll">
                About
              </HashLink>
            </li>
            <li>
              <a href={URL_PRODUCTS} className="page-scroll">
                Products
              </a>
            </li>
            <li>
              <a href={URL_NEWS} className="page-scroll">
                News&Events
              </a>
            </li>
            <li>
              <a href={URL_TEAM} className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href={URL_CONTACT} className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <a href={URL_INSIGHTS}>Insights</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
