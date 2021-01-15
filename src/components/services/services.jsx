import Bctech from "./Bctech";
import { FONT_FAMILY } from "../../App";
import Iqmax from "./Iqmax";
import Omni from "./Omni";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    width: "100%",
    textAlign: "center",
    minHeight: 550,
  },
  title: {
    fontFamily: FONT_FAMILY,
    fontSize: 60,
    fontWeight: 900,
    [theme.breakpoints.down("sm")]: {
      fontSize: 50,
    },
  },
}));
export function Services() {
  const classes = useStyles();

  return (
    <div id="products" className={classes.root}>
      <div className="section-title" style={{ marginBottom: 100 }}>
        <div className={classes.title}>Our Products</div>
        <p>The future of trading floor communication.</p>
      </div>
      <Bctech />
      <Iqmax />
      <Omni />
    </div>
  );
}

export default Services;
