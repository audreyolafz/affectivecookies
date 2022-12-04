import React from "react";
import useSWR from "swr";
import fetcher from "../../../lib/fetcher";
import Nav from "../../../components/nav";
import lilyLeaf from "../../../public/illustrations/lilyLeaf.png";
import exotic from "../../../public/illustrations/exotic.png";
import Image from "next/image";
import Head from "next/head";

export default function Cards() {
  const cards = useSWR("/api/getcards", fetcher).data;
  return (
    <div className="dark:text-white dark:bg-black focus:cursor-auto">
      <Head>
        <title>Cards</title>
      </Head>

      <Nav />

      <h1 className="mb-4 text-center text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-5xl lg:mx-80 dark:text-white">
        Cards Gallery
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-max bg-transparent group perspective">
        {cards?.map((card, i) => (
          <div>
            <div className="m-5 pl-0 pr-3 py-3 rounded-lg bg-meshBlue shadow-lg aspect-video max-w-sm relative">
              <div>
                <p key={i} className="text-2xl text-center font-bold">
                  {card.name}
                </p>
                <br />
                <div className="relative">
                  <div className="float-left max-h-10">
                    <Image
                      // key={i}
                      // layout="fill"
                      className="object-contain"
                      height="90%"
                      width="90%"
                      src={exotic}
                    />
                  </div>
                  <p
                    // key={i}
                    className="text-base text-right backface-hidden pl-7 pr-2"
                  >
                    🫂 <u>{card.people}</u> could not have done it without me 🫶
                  </p>
                  <p
                    // key={i}
                    className="text-base text-right backface-hidden pl-5 pr-2"
                  >
                    🤩 <u>{card.future}</u> is pushing me forward!
                  </p>
                  <p
                    // key={i}
                    className="text-base text-right backface-hidden pl-5 pr-2"
                  >
                    🌎 <u>{card.place}</u> is waiting for me.
                  </p>
                </div>
              </div>
            </div>
            <div className="m-5 p-6 rounded-lg bg-meshBlue shadow-lg max-w-sm relative">
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
