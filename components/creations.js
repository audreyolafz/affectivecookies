import React from "react";
import Image from "next/image";
import imposterThree from "../public/illustrations/imposterThree.png";
import meditation from "../public/illustrations/meditation.png";
import jar from "../public/illustrations/jar.png";

export default function Creations() {
  return (
    <div className="my-3 relative">
      <Image src={imposterThree} width="250px" height="250px" />

      <h1 className="mb-4 text-center text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-5xl lg:mx-80 dark:text-white">
        redefining{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-golden from-mint">
          mental health
        </span>{" "}
        one cookie at a time.
      </h1>
      <br />
      <h3 className="text-3xl font-bold lg:mx-96 text-center dark:text-white">
        That is, harnessing the{" "}
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
      <br />
      <br />
      <br />

      <div className="relative flex justify-center items-center w-screen">
        <div>
          <Image src={jar} width="300px" height="300px" />
          <h1 className="absolute top-50 bg-mint p-3 ml-20 text-center rounded-lg font-medium dark:text-white">
            Manifestation
          </h1>
        </div>
        <div>
          <Image src={jar} width="300px" height="300px" />
          <h1 className="absolute top-50 bg-mint p-3 ml-20 text-center rounded-lg font-medium dark:text-white">
            Gratitude
          </h1>
        </div>
        <div>
          <Image src={jar} width="300px" height="300px" />
          <h1 className="absolute top-50 bg-mint p-3 ml-20 text-center rounded-lg font-medium dark:text-white">
            Achievements
          </h1>
        </div>
        <div>
          <Image src={jar} width="300px" height="300px" />
          <h1 className="absolute top-50 bg-mint p-3 ml-20 text-center rounded-lg font-medium dark:text-white">
            Memories
          </h1>
        </div>
        <div>
          <Image src={jar} width="300px" height="300px" />
          <h1 className="absolute top-50 bg-mint p-3 ml-20 text-center rounded-lg font-medium dark:text-white">
            Hype Songs
          </h1>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
