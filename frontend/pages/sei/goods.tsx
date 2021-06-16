import React from "react";
import Head from "next/head";
import GoodsList from "../../components/GoodsList";

export default function GoodsPage() {
  return (
    <>
      <Head>
        <title>郡道美玲ファンサイト</title>
      </Head>
      <GoodsList />
    </>
  );
}
