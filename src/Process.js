import React from "react";
import "./css/App.css";
import Typography from "@material-ui/core/Typography";
import MiniCard from "./MiniCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    marginBottom: "40px",
  },
});

function Process() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={1}
      className={classes.gridContainer}
      direction="column"
    >
      <Typography variant="h1" component="h2">
        Process
      </Typography>
      <Typography>
        This project brought together several of the skills that I learned this
        semester. I applied the principles and skills from my classes from IxD
        to IoT. They all come together in this PUI porject. I've outline some of
        my steps below.
      </Typography>
      <MiniCard />
      <MiniCard />
      <MiniCard />
    </Grid>
  );
}

export default Process;
