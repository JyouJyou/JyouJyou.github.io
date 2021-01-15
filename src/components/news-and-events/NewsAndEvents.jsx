import { Grid, makeStyles } from "@material-ui/core";

import NewsCard from "./NewsCard";
import React from "react";
import { newsAndEventsData } from "../../data/data";

const useStyles = makeStyles((theme) => ({
  newsContainer: {
    width: "100%",
    paddingLeft: 50,
    paddingRight: 50,
    spacing: 5,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      spacing: 0,
    },
  },
}));
function NewsAndEvents() {
  const data = newsAndEventsData;
  const classes = useStyles();

  return (
    <div id="news-and-events" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>News and Events</h2>
        </div>
      </div>
      <Grid container className={classes.newsContainer} justify="center">
        {data.map((event) => {
          return (
            <Grid item style={{ padding: 20 }}>
              <NewsCard
                title={event.title}
                content={event.content}
                learnMoreLink={event.learnMoreLink}
                eventPictures={event.imgs}
                date={event.date}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default NewsAndEvents;
