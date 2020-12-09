import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    maxHeight: 280,
  },
});

export default function MiniCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Process:"
        height="480"
        src="https://www.elevenwarriors.com/sites/default/files/styles/250x250/public/user-avatars/picture-11372.png?itok=nC6bRsEc"
        title="Seasonal Affective Display"
      />
      <CardContent>
        <Typography variant="overline" display="block" gutterBottom>
          Caption Text
        </Typography>
      </CardContent>
    </Card>
  );
}
