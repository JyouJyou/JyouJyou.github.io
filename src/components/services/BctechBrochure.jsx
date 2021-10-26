import Contact from "../contact";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 80,
    backgroundColor: "black",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 50,
      paddingRight: 50,
    },
  },
  img: {
    width: "100%",
  },
}));

function BctechBrochure() {
  const classes = useStyles();

  return (
    <div id="bc-tech-brochure" className={classes.root}>
      <img
        className={classes.img}
        src="img/services/bc-tech-brochure-1-ver2.png"
        alt="bc-tech-brochure"
      />
      <img
        className={classes.img}
        src="img/services/bc-tech-brochure-2-ver2.png"
        alt="bc-tech-brochure"
      />
      <img
        className={classes.img}
        src="img/services/bc-tech-brochure-3-ver2.png"
        alt="bc-tech-brochure"
      />
      <img
        className={classes.img}
        src="img/services/bc-tech-brochure-4-ver2.png"
        alt="bc-tech-brochure"
      />
      <Contact />
    </div>
  );
}

export default BctechBrochure;
