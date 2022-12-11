import React from "react";
import Nav from "/components/nav";
import Creations from "/components/creations";
import Head from "next/head";

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black focus:cursor-auto">
      <Head>
        <title>Affective Cookies</title>
      </Head>
      <Nav />
      <Creations />
    </div>
  );
}
