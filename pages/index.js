import React from "react";
import Nav from "../components/nav";
import Creations from "../components/creations";

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black focus:cursor-auto">
      <Nav />
      <Creations />
      {/* <iframe
        src="https://my.spline.design/audreyshouse-d4a1d3a76389b80fdb12e0125bb7c8d1/"
        frameborder="0"
        width="100%"
        height="1000px"
      ></iframe> */}
    </div>
  );
}
