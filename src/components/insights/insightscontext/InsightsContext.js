import InsightsContextTemplate from "./InsightsContextTemplate";
import React from "react";
import { insightsContextData } from "../../../data/data";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    
  },
}))
    
function InsightsContext () {
  const classes = useStyles();

  return (
     <div id="insights" className={classes.root}>
      {insightsContextData.map(data => <InsightsContextTemplate icon={data.icon} title={data.title} intro={data.intro} />) }
     </div>
  );
}


export default InsightsContext;
