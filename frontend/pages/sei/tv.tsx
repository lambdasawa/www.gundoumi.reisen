import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import YouTubePlayer from "../../components/YouTubePlayer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "16px auto",
    },
    help: {
      margin: "80px auto",
      padding: "16px",
      width: "80%",
      maxWidth: "640px",
    },
  })
);

export default function TVPage() {
  const classes = useStyles();

  const { data: videoUrls, error } = useSWR("/api/tv", () =>
    fetch("/api/tv")
      .then((res) => res.json())
      .then((body) => body as string[])
  );

  const [videoId, setVideoId] = useState("");

  const setRandomVideoId = () => {
    if (videoUrls && videoUrls.length > 0) {
      const videoIds = videoUrls
        .map((url) => new URLSearchParams(new URL(url).search).get("v") || "")
        .filter((id) => id !== videoId);
      const newVideoId = videoIds[Math.floor(Math.random() * videoIds.length)];
      setVideoId(newVideoId);
    }
  };

  useEffect(() => {
    if (!videoId) {
      setRandomVideoId();
    }
  });

  if (error) return <div>failed to load</div>;
  if (!videoUrls) return <div>loading...</div>;

  return (
    <Container className={classes.root}>
      <YouTubePlayer
        videoId={videoId}
        start={0}
        autoplay={1}
        onEnd={() => setRandomVideoId()}
      />
      <Paper className={classes.help}>
        <Typography>最近のアーカイブをランダムに再生します。</Typography>
        <Typography>
          最後まで再生が終了すると次のランダムなアーカイブが再生されます。
        </Typography>
      </Paper>
    </Container>
  );
}
