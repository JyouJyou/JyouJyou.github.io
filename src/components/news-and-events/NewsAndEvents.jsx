import { makeStyles } from "@material-ui/core";

import NewsCard from "./NewsCard";
import React from "react";
import { newsAndEventsData } from "../../data/data";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    paddingRight: 100,
    paddingLeft: 100,
    marginBottom: 80,

    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  newsContainer: {
    overflowX: "scroll",
    alignItems: "center",
    padding: 20,
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  newContainer: {
    marginRight: 40,
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
      <div className={classes.container}>
        <div className={classes.newsContainer}>
          {data.map((event) => {
            return (
              <div className={classes.newContainer}>
                <NewsCard
                  title={event.title}
                  content={event.content}
                  learnMoreLink={event.learnMoreLink}
                  eventPictures={event.imgs}
                  date={event.date}
                />
              </div>
            );
          })}
        </div>        
      </div>
    </div>
  );
}

export default NewsAndEvents;
