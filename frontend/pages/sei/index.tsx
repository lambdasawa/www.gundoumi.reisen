import { useRouter } from "next/router";
import Head from "next/head";
import React, { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/sei/tv");
  });

  return (
    <>
      <Head>
        <title>郡道美玲ファンサイト</title>
      </Head>
      <div></div>
    </>
  );
}
