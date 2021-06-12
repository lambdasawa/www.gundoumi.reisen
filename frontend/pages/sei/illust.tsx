import React from "react";
import useSWR from "swr";
import IllustList from "../../components/IllustList";
import { fetchIllusts } from "../../src/apis/illust";

export default function IllustrationsPage() {
  const { data: illusts, error } = useSWR("/illusts", fetchIllusts);

  if (error) return <div>failed to load</div>;
  if (!illusts) return <div>loading...</div>;

  return <IllustList illusts={illusts} />;
}
