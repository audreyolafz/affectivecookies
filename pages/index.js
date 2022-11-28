import React from "react";
import Nav from "../components/nav";
import Creations from "../components/creations";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black focus:cursor-auto">
      <Nav />
      <Creations />
      <Spline scene="https://prod.spline.design/Q7ePNsqH7H3M7Gu4/scene.splinecode" />
    </div>
  );
}
