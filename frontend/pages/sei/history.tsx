import React from "react";
import useSWR from "swr";
import Head from "next/head";
import History from "../../components/History";
import { fetchEvents } from "../../src/apis/events";

export default function HistoryPage() {
  const { data: history, error } = useSWR("/history", fetchEvents);

  if (error) return <div>failed to load</div>;
  if (!history) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>郡道美玲ファンサイト</title>
      </Head>
      <History events={history} />
    </>
  );
}
