import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { get as fetch } from "axios";
import useSWR from "swr";
import fetcher from "/lib/fetcher";
import Nav from "/components/nav";
import Head from "next/head";
import { useCounterContext } from "/context/state";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const [counter, setCounter] = useCounterContext();

  const onSubmit = async (data) => {
    setCounter(counter + 1);
    fetch(
      "/api/createcard?name=" +
        data.name +
        `&` +
        "people=" +
        data.people +
        `&` +
        "future=" +
        data.future +
        `&` +
        "place=" +
        data.place
    ).then((res) => alert("Card generated! Check the gallery below <3"));
  };
  const cards = useSWR("/api/getcards", fetcher).data;

  return (
    <div className="focus:cursor-auto">
      <Head>
        <title>Affective Cookies | Card</title>
        <link rel="icon" href="/illustrations/cookieOne.png" />
        {/* <meta name="description" content={"Card profile"} />
        <meta property="og:title" content={cards.name} /> */}
      </Head>
      <div>
        <Nav />
        <h3 className="text-2xl text-center font-semibold">
          Take a moment to think about your{" "}
          <span className="text-mint">gratitude</span> and{" "}
          <span className="text-mint">aspirations</span>.
        </h3>
        <br />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col self-center sm:mx-10 md:mx-48 lg:mx-96 mb-5 p-8 border-navy dark:border-sand border-2 rounded-lg space-y-5 bg-meshRed bg-cover bg-no-repeat bg-opacity-80 bg-clip-padding rounded-lg dark:bg-gray-800"
        >
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
              your preferred name
            </label>
            <input
              className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border-navy dark:border-sand border-2 focus:ring-mint focus:border-mint dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mint dark:focus:border-mint"
              placeholder="anything you like!"
              required
              minLength="2"
              maxLength="20"
              {...register("name", { required: true })}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
              who cannot live without me?
            </label>
            <input
              className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border-navy dark:border-sand border-2 focus:ring-mint focus:border-mint dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mint dark:focus:border-mint"
              placeholder="my favorite humaaans"
              required
              minLength="2"
              {...register("people", { required: true })}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
              where do I see myself in 5 years?
            </label>
            <textarea
              rows="3"
              className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border-navy dark:border-sand border-2 focus:ring-mint focus:border-mint dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mint dark:focus:border-mint"
              placeholder="my future :)"
              required
              minLength="2"
              {...register("future", { required: true })}
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
              what places do I still want to go?
            </label>
            <textarea
              rows="2"
              className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border-navy dark:border-sand border-2 focus:ring-mint focus:border-mint dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mint dark:focus:border-mint"
              placeholder="it's a big world..."
              required
              minLength="2"
              {...register("place", { required: true })}
            ></textarea>
          </div>

          <button
            type="submit"
            value="submit"
            className="mt-2 self-center text-black bg-mint border-navy dark:border-sand border-solid border-2 transition duration-150 hover:duration-150 hover:bg-transparent hover:text-black hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-full text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-mint dark:text-white dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint"
          >
            generate!
          </button>
        </form>
        <br />
        <h3 className="text-xl text-center font-semibold">
          Note: If you are on a mobile device, the animated card gallery is not
          working yet. Please check out the
          <Link href="./cards">
            <h3 className="text-golden cursor-auto">
              static card gallery here!
            </h3>
          </Link>
        </h3>
        <br />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-max sm:mx-auto aspect-video rounded-lg  bg-transparent group perspective">
          {cards?.map((card, i) => (
            <div className="mb-36 max-w-sm m-5 pl-0 pt-5 aspect-video rounded-lg shadow-lg relative preserve-3d hover:my-rotate-y-180 duration-1000">
              <div className="pt-5 absolute dark:text-black bg-accard bg-cover overflow-hidden aspect-video rounded-lg">
                <p
                  // key={i}
                  className="text-2xl text-center font-bold backface-hidden"
                >
                  {card.name}
                </p>
                <div className="relative">
                  <p
                    // key={i}
                    className="text-base text-right backface-hidden ml-14 pl-14 pr-3"
                  >
                    🫂 <u>{card.people}</u> could not have done it without me 🫶
                    <br />
                    🤩 <u>{card.future}</u> is pushing me forward! <br />
                    🌎 <u>{card.place}</u> is waiting for me.
                  </p>
                </div>
              </div>
              <div className="sm:mb-48 m-0 p-5 pt-7 pb-48 absolute bg-meshGreen bg-cover my-rotate-y-180 backface-hidden overflow-hidden aspect-video rounded-lg">
                <Link
                  className="ml-3 text-left subpixel-antialiased dark:text-black hover:text-golden"
                  href="https://988lifeline.org/"
                  target="_blank"
                >
                  988 Suicide and Crisis Lifeline
                </Link>
                <br />
                <Link
                  className="ml-3 text-left subpixel-antialiased dark:text-black hover:text-golden"
                  href="https://www.crisistextline.org/"
                  target="_blank"
                >
                  Crisis Text Line: text HOME to 741741
                </Link>
                <br />
                <Link
                  className="ml-3 text-left subpixel-antialiased dark:text-black hover:text-golden"
                  href="https://www.thetrevorproject.org/"
                  target="_blank"
                >
                  The Trevor Project: text START to 678678
                </Link>
                <br />
                <Link
                  className="ml-3 text-left subpixel-antialiased dark:text-black hover:text-golden"
                  href="https://www.thehotline.org/"
                  target="_blank"
                >
                  Domestic Violence Hotline: text START to 88788
                </Link>
                <br />
                <Link
                  className="ml-3 text-left subpixel-antialiased dark:text-black hover:text-golden"
                  href="https://www.rainn.org/"
                  target="_blank"
                >
                  Sexual Assault Hotline: call 800.656.HOPE
                </Link>
              </div>
            </div>
          ))}
          <br />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
