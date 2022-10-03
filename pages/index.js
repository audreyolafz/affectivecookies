import React from "react";
import Nav from "../components/nav";
import CookieModal from "../components/modal";

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black focus:cursor-auto">
      <Nav />
      <CookieModal />
    </div>
  );
}
