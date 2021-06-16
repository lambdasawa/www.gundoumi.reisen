import React from "react";
import useSWR from "swr";
import Head from "next/head";
import ButtonGroup from "../../components/ButtonGroup";
import { fetchButtonSounds } from "../../src/apis/buttons";

export default function ButtonsPage() {
  const { data: buttons, error } = useSWR("/buttons", fetchButtonSounds);

  if (error) return <div>failed to load</div>;
  if (!buttons) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>郡道美玲ファンサイト</title>
      </Head>
      <ButtonGroup buttons={buttons} />
    </>
  );
}
