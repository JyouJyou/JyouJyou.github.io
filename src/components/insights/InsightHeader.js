import { Fade, makeStyles } from "@material-ui/core";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from "react";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('xs')]: {
      backgroundImage: "url(/img/insights/insights-bg.jpg)",
      backgroundSize: "cover",
      height: 630,
      width: "100%",
      margin: 0,
      marginTop: 75,
    },

    [theme.breakpoints.down('xs')]: {
      backgroundImage: "none",
      margin: 0
    }

  },
  innerContainer: {
    position: "relative",
    borderRadius: 0,

    [theme.breakpoints.up('xs')]: {
      paddingTop: 50,
      paddingLeft: 100,
      width: 700,
      height: 400,
      transform: "translateY(20%)",
    },
    
    [theme.breakpoints.down('xs')]: {
      width: "100%",
      paddintBottom: 30,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 15
      
    },
  },
  image: {
    [theme.breakpoints.up('xs')]: {
      display: "none",
    },
    [theme.breakpoints.down('xs')]: {
      display: "block",
      height: "auto",
      width: "100%"
    },
  },
  category: {
    fontSize: 15,
    fontWeight: 100,
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  divider: {
    backgroundColor: "#00ccff",
    border: 0,
    height: 3,
    marginLeft: 2,
    marginTop: 5,
    width: 50
  },

  title: {
    marginTop: 15,
    textTransform: "none",
    fontWeight: 800,
    fontSize: 35,
    lineHeight: "40px",
    whiteSpace: "pre-line",
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
    },
  },

  subtitle: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 400,
    [theme.breakpoints.down('xs')]: {
      fontSize: 15,
    },
  }
}))
    
function InsightHeader ({data}) {
  const classes = useStyles();

  return (
      <div className={classes.root} >
          <Card className={classes.innerContainer}>
            <CardContent>
              <Typography className={classes.category} color="textSecondary" gutterBottom>
                INSIGHTS
              </Typography>
              <hr className={classes.divider} />

              <Fade in={true} timeout={{ enter: 2000 }}>
                <Typography className={classes.title}>
                  {data.title}
                </Typography>
              </Fade>
              <Fade in={true} timeout={{ enter: 2500 }}>
                <Typography className={classes.subtitle}>
                  {data.subtitle}
                </Typography>
              </Fade>
            </CardContent> 
          </Card>
          <img className={classes.image} src='/img/insights/insights-bg.jpg' alt="pic" />
      </div>
  );
}


export default InsightHeader;
