import React, { useRef } from "react";

import { Container } from "@material-ui/core";
import { Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useIsVisible } from "react-is-visible";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 400,
    width: "100%",
    textAlign: "center",
    marginTop: 100,
  },
  container: {
    width: "60%",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  title: {
    fontSize: 35,
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  intro: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 200,
    whiteSpace: "pre-line",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  learnMore: {
    marginTop: 10,
    fontSize: 20,
    [theme.breakpoints.down("xs")]: {
      height: 12,
    },
  },
}));

function InsightsContextTemplate({ icon: Icon, title, intro, path }) {
  const classes = useStyles();
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef, { once: true });

  return (
    <div className={classes.root} ref={nodeRef}>
      <Container className={classes.container}>
        {isVisible && (
          <>
            <div className={classes.iconContainer}>
              <Fade in={true} timeout={{ enter: 1000 }}>
                <Icon style={{ fontSize: 150 }} />
              </Fade>
            </div>
            <Fade in={true} timeout={{ enter: 1500 }}>
              <div className={classes.title}>{title}</div>
            </Fade>
            <Fade in={true} timeout={{ enter: 2000 }}>
              <div className={classes.intro}>{intro}</div>
            </Fade>
            <Fade in={true} timeout={{ enter: 2000 }}>
              <div className={classes.learnMore}>
                <a href={path} className="btn btn-custom btn-lg page-scroll">
                  Learn more {">"}
                </a>{" "}
              </div>
            </Fade>
          </>
        )}
      </Container>
    </div>
  );
}

export default InsightsContextTemplate;
