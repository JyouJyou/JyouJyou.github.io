import { teamData, teamSlogan } from "../../data/data";

import Employee from "./Employee";
import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingRight: 100,
    paddingLeft: 100,
    marginBottom: 80,

    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  teammatesContainer: {
    overflow: "scroll",
    alignItems: "center",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  teammateContainer: {
    marginRight: 30,
  },
}));

function Team() {
  // style sheet
  const classes = useStyles();

  return (
    <div id="team" className="text-center">
      <Grid direction="column" container>
        <Grid item style={{ height: 180 }}>
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>{teamSlogan}</p>
          </div>
        </Grid>
        <Grid item style={{ width: "100%" }} className={classes.container}>
          <div className={classes.teammatesContainer}>
            {teamData.map((teammate, idx) => {
              return (
                <div className={classes.teammateContainer}>
                  <Employee teammate={teammate} key={idx} />
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Team;
