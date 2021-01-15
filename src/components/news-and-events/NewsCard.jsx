import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Event from "./Event";
import { Grid } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    maxHeight: 500,
    overflowY: "scroll",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: 100,
      maxHeight: "none",
    },
  },
  media: {
    height: 140,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: 800,
  },
  content: {
    fontFamily: "Roboto",
    fontSize: 15,
    textAlign: "left",
    textOverflow: "ellipsis",
  },
  learnMore: {
    fontSize: 15,
    fontFamily: "Roboto",
  },
  date: {
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: 300,
  },
}));

function NewsCard({ title, content, learnMoreLink, eventPictures, date }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.eventPictures}>
          <Event eventPictures={eventPictures} />
        </CardMedia>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.title}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item className={classes.date}>
              <div>{date}</div>
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.content}
          >
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {learnMoreLink ? (
          <Button
            size="small"
            color="primary"
            href={learnMoreLink}
            className={classes.learnMore}
          >
            Learn More
          </Button>
        ) : (
          <></>
        )}
      </CardActions>
    </Card>
  );
}

export default NewsCard;
