import React from "react";
import Nav from "/components/nav";
import Footer from "/components/footer";
import Creations from "/components/creations";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="focus:cursor-auto">
      <Head>
        <title>Affective Cookies | Home</title>
        <link rel="icon" href="/illustrations/cookieOne.png" />
      </Head>
      <Nav />
      <Creations />
      <Footer />
    </div>
  );
}
