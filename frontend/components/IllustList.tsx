import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { Illust } from "../src/apis/illust";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "8px auto",
    },
    item: {
      padding: "8px",
      width: "90%",
    },
  })
);

export default function IllustrationsPage(props: { illusts: Illust[] }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {props.illusts.map(({ tweetUrl }) => (
        <Grid lg={3} md={6} sm={12} item className={classes.item}>
          <blockquote className="twitter-tweet">
            <a href={tweetUrl}>{tweetUrl}</a>
          </blockquote>
        </Grid>
      ))}
    </Grid>
  );
}
