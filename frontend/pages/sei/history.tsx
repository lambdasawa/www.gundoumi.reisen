import React from "react";
import useSWR from "swr";
import History from "../../components/History";
import { fetchEvents } from "../../src/apis/events";

export default function HistoryPage() {
  const { data: history, error } = useSWR("/history", fetchEvents);

  if (error) return <div>failed to load</div>;
  if (!history) return <div>loading...</div>;

  return <History events={history} />;
}
