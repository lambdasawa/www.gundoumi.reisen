import React from "react";
import useSWR from "swr";
import { fetchMusics } from "../../src/apis/musics";
import MusicPlayer from "../../components/MusicPlayer";

export default function MusicsPage() {
  const { data: musics, error } = useSWR("/musics", fetchMusics);

  if (error) return <div>failed to load</div>;
  if (!musics) return <div>loading...</div>;

  return <MusicPlayer musics={musics} />;
}
