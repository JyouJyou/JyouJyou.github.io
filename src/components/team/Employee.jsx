import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  imgContainer: {
    width: 250,
    height: 250,
    objectFit: "cover",
  },
  name: {
    color: "black",
    fontSize: 18,
    fontWeight: 500,
    marginTop: 10,
  },
  job: {
    fontFamily: "Open Sans",
    fontSize: 15,
    fontWeight: 500,
    marginTop: 1,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 30,
    },
  },
}));
function Employee({ teammate }) {
  // style sheet
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <img
          className={classes.imgContainer}
          src={teammate.img}
          alt={teammate.name}
        />
      </Grid>
      <Grid item>
        <div className={classes.name}>{teammate.name}</div>
        <div className={classes.job}>{teammate.job}</div>
      </Grid>
    </Grid>
  );
}

export default Employee;
