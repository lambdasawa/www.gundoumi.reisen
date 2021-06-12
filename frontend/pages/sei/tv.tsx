import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
import YouTubePlayer from "../../components/YouTubePlayer";

export default function TVPage() {
  const { data: videoUrls, error } = useSWR("/api/tv", () =>
    fetch("/api/tv")
      .then((res) => res.json())
      .then((body) => body as string[])
  );

  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    if (!videoId && videoUrls && videoUrls.length > 0) {
      const newVideoUrl =
        videoUrls[Math.floor(Math.random() * videoUrls.length)];
      const newVideoId =
        new URLSearchParams(new URL(newVideoUrl).search).get("v") || "";
      setVideoId(newVideoId);
      console.log({ newVideoId });
    }
  });

  if (error) return <div>failed to load</div>;
  if (!videoUrls) return <div>loading...</div>;

  return <YouTubePlayer videoId={videoId} start={0} autoplay={1} />;
}
