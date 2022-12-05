import React, { Suspense } from "react";
import Image from "next/image";
import imposterThree from "../public/illustrations/imposterThree.png";
import meditation from "../public/illustrations/meditation.png";
import jar from "../public/illustrations/jar.png";

export default function Creations() {
  return (
    <div className="sm:mx-3 sm:my-1 md:my-2 lg:my-3 relative">
      <Image src={imposterThree} width="250px" height="250px" />

      <h1 className="mb-4 text-center text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-5xl lg:mx-80 dark:text-white">
        Redefining{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-golden from-mint">
          mental health
        </span>{" "}
        one cookie at a time.
      </h1>
      <br />
      <h3 className="text-3xl font-bold lg:mx-96 text-center dark:text-white">
        We are <span className="text-mint">engineering empathy</span>. That is,
        harnessing the{" "}
        <span className="text-mint">positivity and strength</span> from yourself
        to find the willpower to <span className="text-mint">persevere</span>.
        Everyone has a cookie jar, or times in your life when you{" "}
        <span className="text-mint">overcame</span> something challenging, big
        or small. <br />
        Find <span className="text-mint">all your perfects</span> of people,
        places, or things that keep you going. Lastly, create a safer social
        media space to create a sense of{" "}
        <span className="text-mint">belonging</span>.
      </h3>
      <div className="relative float-right mr-10">
        <Image src={meditation} width="250px" height="250px" />
      </div>
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3 className="text-3xl font-bold lg:mx-96 text-center dark:text-white">
        Meet your new <span className="text-mint">best friend</span>: A Cookie
        Jar.
      </h3>
      <h3 className="text-3xl font-bold lg:mx-96 text-center dark:text-white">
        The Cookie Jar will guide you through creating and{" "}
        <span className="text-mint">finding memories</span> to find confidence
        to be your <span className="text-mint">best</span> self.
      </h3> */}
      <br />
      <br />
      <br />
    </div>
  );
}
