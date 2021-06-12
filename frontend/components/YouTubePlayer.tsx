import React from "react";
import Grid from "@material-ui/core/Grid";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "32px auto",
      width: "95%",
    },
  })
);

type Props = {
  videoId: string;
  start: number;
  autoplay: 0 | 1;
};

export default function YouTubePlayer(props: Props) {
  const classes = useStyles();

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const resize = () => {
      const w = Math.min(window ? window.innerWidth : 0, 720);
      const h = w * (9 / 16);
      setWidth(w);
      setHeight(h);
    };

    window.onresize = resize;

    resize();
  });

  return (
    <Grid container justify="center" className={classes.root}>
      <iframe
        id="ytplayer"
        src={`https://www.youtube.com/embed/${props.videoId}?start=${props.start}&autoplay=${props.autoplay}`}
        frameBorder="0"
        width={width}
        height={height}
      ></iframe>
    </Grid>
  );
}
