import React from "react";
import useSWR from "swr";
import Head from "next/head";
import IllustList from "../../components/IllustList";
import { fetchIllusts } from "../../src/apis/illust";

export default function IllustrationsPage() {
  const { data: illusts, error } = useSWR("/illusts", fetchIllusts);

  if (error) return <div>failed to load</div>;
  if (!illusts) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>郡道美玲ファンサイト</title>
      </Head>
      <IllustList illusts={illusts} />
    </>
  );
}
