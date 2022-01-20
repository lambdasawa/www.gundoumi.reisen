import React from "react";
import Grid from "@material-ui/core/Grid";
import YouTube from "react-youtube";
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
  end?: number;
  autoplay: 0 | 1;
  onEnd: () => void;
};

export default function YouTubePlayer(props: Props) {
  const classes = useStyles();

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resize = () => {
    const w = Math.min(window ? window.innerWidth : 0, 720);
    const h = w * (9 / 16);
    setWidth(w);
    setHeight(h);
  };

  useEffect(() => {
    window.onresize = resize;

    resize();
  });

  if (!props.videoId) return <></>;

  return (
    <Grid container justify="center" className={classes.root}>
      <YouTube
        videoId={props.videoId}
        opts={{
          width: String(width),
          height: String(height),
          playerVars: {
            start: props.start,
            end: props.end,
            autoplay: props.autoplay,
          },
        }}
        onReady={() => {}}
        onPlay={() => {}}
        onPause={() => {}}
        onEnd={() => {
          props.onEnd();
        }}
        onError={() => {}}
        onStateChange={() => {}}
        onPlaybackRateChange={() => {}}
        onPlaybackQualityChange={() => {}}
      />
    </Grid>
  );
}
