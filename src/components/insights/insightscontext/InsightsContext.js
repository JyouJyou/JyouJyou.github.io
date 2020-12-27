import { Container, Fade, makeStyles } from "@material-ui/core";

import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import InsightsContextTemplate from "./InsightsContextTemplate";
import React from "react";
import { insightsContextData } from "../../../data/data";

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
