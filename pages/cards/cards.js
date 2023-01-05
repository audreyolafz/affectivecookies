import React from "react";
import Link from "next/link";
import useSWR from "swr";
import fetcher from "/lib/fetcher";
import Nav from "/components/nav";
import Image from "next/image";
import Head from "next/head";

export default function Cards() {
  const cards = useSWR("/api/getcards", fetcher).data;
  return (
    <div className="focus:cursor-auto">
      <Head>
        <title>Affective Cookies | Cards</title>
        <link rel="icon" href="/illustrations/cookieOne.png" />
      </Head>

      <Nav />

      <h1 className="mb-4 text-center text-2xl font-semibold tracking-tight leading-none text-gray-900 lg:mx-80 dark:text-white">
        Cards Gallery
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-max justify-items-center bg-transparent group perspective">
        {cards?.map((card, i) => (
          <div>
            <div className="m-5 pl-0 pr-3 py-3 rounded-lg bg-accard bg-cover shadow-lg aspect-video max-w-sm relative">
              <p
                // key={i}
                className="text-2xl text-center font-bold backface-hidden"
              >
                {card.name}
              </p>
              <div className="relative">
                <p
                  // key={i}
                  className="text-base text-right backface-hidden ml-20 pl-20 pr-3"
                >
                  🫂 <u>{card.people}</u> could not have done it without me 🫶
                  <br />
                  🤩 <u>{card.future}</u> is pushing me forward! <br />
                  🌎 <u>{card.place}</u> is waiting for me.
                </p>
              </div>
            </div>
            <div className="m-5 p-6 rounded-lg bg-meshGreen bg-cover shadow-lg max-w-sm relative">
              <Link
                className="text-left subpixel-antialiased"
                href="https://988lifeline.org/"
                target="_blank"
              >
                988 Suicide and Crisis Lifeline
              </Link>
              <br />
              <Link
                className="text-left subpixel-antialiased"
                href="https://www.crisistextline.org/"
                target="_blank"
              >
                Crisis Text Line: text HOME to 741741
              </Link>
              <br />
              <Link
                className="text-left subpixel-antialiased"
                href="https://www.thetrevorproject.org/"
                target="_blank"
              >
                The Trevor Project: text START to 678678
              </Link>
              <br />
              <Link
                className="text-left subpixel-antialiased"
                href="https://www.thehotline.org/"
                target="_blank"
              >
                National Domestic Violence Hotline: text START to 88788
              </Link>
              <br />
              <Link
                className="text-left subpixel-antialiased"
                href="https://www.rainn.org/"
                target="_blank"
              >
                National Sexual Assault Hotline: call 800.656.HOPE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
