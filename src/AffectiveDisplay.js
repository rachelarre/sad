import React from "react";
import "./Navigation.css";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ImgMediaCard from "./ImageCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});

function AffectiveDiplay() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={1}
      className={classes.gridContainer}
      direction="row"
    >
      <Grid item xs={6}>
        <ImgMediaCard />
      </Grid>

      <Grid item xs={6} alignItems="flex-start">
        <Typography variant="h1" align="left" gutterBottom>
          [S]easonal [A]ffective [D]isplay
        </Typography>

        <Typography align="left" variant="body1">
          A daily snap shot of the temperature and sunlight outside my window.
          It often hard to mark the passing of the seasons or realize how much
          daylight you have gotten in a day. SAD uses data gathered from sensors
          outside your window to give a live snapshot of the affective feeling
          on a day.{" "}
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          style={{ background: "#181632" }}
        >
          Download
        </Button>
      </Grid>
    </Grid>
  );
}

export default AffectiveDiplay;
