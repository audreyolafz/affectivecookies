import React, { Suspense } from "react";
import Image from "next/image";
import imposterThree from "/public/illustrations/imposterThree.png";
import meditation from "/public/illustrations/meditation.png";
import jar from "/public/illustrations/jar.png";

export default function Creations() {
  return (
    <div className="sm:mx-3 sm:my-1 md:my-2 lg:my-3 relative">
      <Image src={imposterThree} width="250px" height="250px" />

      <h1 className="mb-4 text-center text-5xl font-bold tracking-tight leading-none text-gray-900 lg:mx-80 dark:text-white">
        Redefining{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-golden from-mint">
          cyberbullying
        </span>{" "}
        one cookie at a time.
      </h1>
      <br />
      <h3 className="text-3xl font-semibold lg:mx-96 text-center dark:text-white">
        We are <span className="text-mint">engineering empathy</span>. That is,
        harnessing <span className="text-mint">inclusivity</span> to create a{" "}
        <span className="text-mint">kinder</span>, digital world. Find{" "}
        <span className="text-mint">all your perfects</span> of people, places,
        or things that keep you going. Lastly, create a safer social media space
        to create a sense of <span className="text-mint">belonging</span>.
      </h3>
      <div className="relative float-right mr-10">
        <Image src={meditation} width="250px" height="250px" />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
