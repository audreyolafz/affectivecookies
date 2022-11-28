import React from "react";
import Nav from "../components/nav";
import Creations from "../components/creations";

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black focus:cursor-auto">
      <Nav />
      <Creations />
    </div>
  );
}
