import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Nav from "../components/nav";

export default function Cards() {
  const cards = useSWR("/api/getcards", fetcher).data;
  return (
    <div className="dark:text-white dark:bg-black focus:cursor-auto">
      <Nav />

      <div className="grid sm:min-w-fit sm:min-h-fit sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 auto-cols-max bg-transparent group perspective">
        {cards?.map((card, i) => (
          <div className="m-5 p-6 aspect-video rounded-lg bg-meshBlue shadow-lg max-w-sm relative preserve-3d hover:my-rotate-y-180 duration-1000">
            <div className="absolute backface-hidden">
              <p
                key={i}
                className="\text-2xl text-center font-bold backface-hidden"
              >
                {card.name}
              </p>
              <img
                key={i}
                layout="fill"
                className="rounded-lg object-contain float-left h-28"
                src={card.pic}
              />
              <p
                key={i}
                className="\text-base text-center backface-hidden px-2"
              >
                🫂 <u>{card.people}</u> could not have done it without me 🫶
              </p>
              <p
                key={i}
                className="\text-base text-center backface-hidden px-2"
              >
                🤩 <u>{card.future}</u> is exciting me and pushing me forward!
              </p>
              <p
                key={i}
                className="\text-base text-center backface-hidden px-2"
              >
                🌎 <u>{card.place}</u> is waiting for me to come.
              </p>
            </div>
            <div className="absolute p-3 pb-2 my-rotate-y-180 backface-hidden overflow-hidden aspect-video rounded-lg">
              <a
                className="text-left subpixel-antialiased"
                href="https://988lifeline.org/"
                target="_blank"
              >
                988 Suicide and Crisis Lifeline
              </a>
              <br />
              <a
                className="text-left subpixel-antialiased"
                href="https://www.crisistextline.org/"
                target="_blank"
              >
                Crisis Text Line: text HOME to 741741
              </a>
              <br />
              <a
                className="text-left subpixel-antialiased"
                href="https://www.thetrevorproject.org/"
                target="_blank"
              >
                The Trevor Project: text START to 678678
              </a>
              <br />
              <a
                className="text-left subpixel-antialiased"
                href="https://www.thehotline.org/"
                target="_blank"
              >
                National Domestic Violence Hotline: text START to 88788
              </a>
              <br />
              <a
                className="text-left subpixel-antialiased"
                href="https://www.rainn.org/"
                target="_blank"
              >
                National Sexual Assault Hotline: call 800.656.HOPE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
