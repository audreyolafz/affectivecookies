import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Nav from "../components/nav";
import CookieModal from "../components/modal";
import Image from "next/image";

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black focus:cursor-auto">
      <Nav />
      <CookieModal />
    </div>
  );
}
