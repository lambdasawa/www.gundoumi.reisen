import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Music } from "../src/apis/musics";
import YouTubePlayer from "./YouTubePlayer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "16px auto",
      width: "90%",
    },
    controller: {
      margin: "64px auto",
      maxWidth: 600,
    },
    button: {
      margin: "8px",
      textTransform: "none",
    },
  })
);

export default function MusicPlayer(props: { musics: Music[] }) {
  const { musics } = props;

  const classes = useStyles();

  const [videoId, setVideoId] = useState("");
  const [start, setStart] = useState(-1);
  const [end, setEnd] = useState<number | undefined>(undefined);
  const [autoplay, setAutoplay] = useState<0 | 1>(0);

  const play = (m: Music) => {
    setVideoId(m.videoId);
    setStart(m.start);
    if (m.end) setEnd(m.end);
    setAutoplay(1);
  };

  useEffect(() => {
    if (videoId === "") setVideoId(musics ? musics[0].videoId : "");
    if (start === -1) setStart(musics ? musics[0].start : 0);
  }, [musics, videoId, start]);

  return (
    <Container>
      <YouTubePlayer videoId={videoId} start={start} end={end} autoplay={autoplay} onEnd={() => {}} />
      <Container className={classes.controller}>
        <Paper>
          {musics.map((m) => (
            <Button key={m.videoId} variant="contained" onClick={() => play(m)} className={classes.button}>
              {m.title}
            </Button>
          ))}
        </Paper>
      </Container>
    </Container>
  );
}
