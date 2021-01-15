import { Grid, makeStyles } from "@material-ui/core";

import Contact from "../contact";
import InsightHeader from "./InsightHeader";
import InsightsContext from "./insightscontext/InsightsContext";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: 0,
  },
  container: {
    width: "100%",
    margin: 0,
  },
  contactPlaceholder: {
    marginTop: 100,
  },
}));
function Insights() {
  const classes = useStyle();

  return (
    <Grid direction="column" className={classes.root}>
      <Grid item className={classes.container}>
        <InsightHeader />
      </Grid>
      <Grid item>
        <InsightsContext />
      </Grid>
      <Grid item className={classes.contactPlaceholder}>
        <Contact />
      </Grid>
    </Grid>
  );
}

export default Insights;
