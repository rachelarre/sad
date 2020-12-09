import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 480,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const today = new Date();
  let timeOfDay =
    today.getMonth() +
    1 +
    "." +
    today.getDate() +
    " @" +
    today.getHours() +
    ":" +
    today.getMinutes();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="iframe"
        alt="Seasonal Affective Display"
        height="480"
        src="https://editor.p5js.org/rachelarre/embed/yX93H9mcE"
        title="Seasonal Affective Display"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Fall 2020 | TBD°C | {timeOfDay}
        </Typography>
      </CardContent>
    </Card>
  );
}
