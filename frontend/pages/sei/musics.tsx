import Head from "next/head";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import useSWR from "swr";
import MusicPlayer from "../../components/MusicPlayer";
import { fetchMusics } from "../../src/apis/musics";

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
    },
  })
);

export default function MusicsPage() {
  const { data: musics, error } = useSWR("/musics", fetchMusics);

  if (error) return <div>failed to load</div>;
  if (!musics) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>郡道美玲ファンサイト</title>
      </Head>
      <MusicPlayer musics={musics} />
    </>
  );
}
