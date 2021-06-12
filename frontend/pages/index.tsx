import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/sei/tv");
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>郡道美玲ファンサイト</title>
        <meta name="description" content="郡道美玲ファンサイト" />　
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
