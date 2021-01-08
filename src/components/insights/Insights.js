import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import Contact from "../contact";
import InsightHeader from "./InsightHeader";
import InsightsContext from "./insightscontext/InsightsContext";
import data from '../../data/data.json'

const useStyle = makeStyles((theme) => ({
  root: {
    margin: 0
  }, 
  container: {
    width: "100%",
    margin: 0
  },
  contactPlaceholder: {
    marginTop: 100
  }
}))
function Insights (props) {
  const classes = useStyle();

  const [state, setState] = useState({
    insightHeader: ""
  })

  useEffect(() => {
    setState(data.Insight)
  }, [])

  return (
    <Grid direction="column" className={classes.root}>
      <Grid item className={classes.container}>
        <InsightHeader data={state.insightHeader}/>
      </Grid>
      <Grid item>
        <InsightsContext data={state.insightsContext} />
      </Grid>
      <Grid item className={classes.contactPlaceholder}>
        <Contact />
      </Grid>
    </Grid>
  );
}


export default Insights;
