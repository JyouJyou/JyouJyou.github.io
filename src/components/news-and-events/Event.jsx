import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  picture: {
    height: 250,
    objectFit: "cover",
  },
}));

function Event({ eventPictures }) {
  const classes = useStyles();

  return (
    <Carousel showThumbs={false} infiniteLoop={true}>
      {eventPictures.map((pic) => {
        return (
          <div>
            <img src={pic} alt={pic} className={classes.picture} />
          </div>
        );
      })}
    </Carousel>
  );
}

export default Event;
