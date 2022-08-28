import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Nav from "../components/nav";
import CookieModal from "../components/modal";
import Image from "next/image";

export default function Home() {
  const handleClick = () => {
    alert("hi");
  };
  return (
    <div className="dark:text-white dark:bg-black focus:cursor-auto">
      <Nav />
      {/* <h1>cookie jar time</h1> */}
      <CookieModal />
    </div>
  );
}
