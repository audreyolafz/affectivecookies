import React from "react";
import { useForm } from "react-hook-form";
import { get as fetch } from "axios";
import useSWR from "swr";
import fetcher from "../../../lib/fetcher";
import Nav from "../../../components/nav";
// import lilyLeaf from "../../../public/illustrations/lilyLeaf.png";
// import exotic from "../../../public/illustrations/exotic.png";
import Image from "next/image";
import Head from "next/head";

export default function Form() {
  const { register, handleSubmit } = useForm();

  // let graphicList = [lilyLeaf, exotic];
  // let randVal = Math.floor(Math.random() * 2);

  const onSubmit = async (data) => {
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
    ).then((res) => console.log("NEW STUFF " + res.data));
  };
  const cards = useSWR("/api/getcards", fetcher).data;

  return (
    <div className="dark:text-white dark:bg-black focus:cursor-auto">
      <Head>
        <title>Card</title>
        {/* <meta name="description" content={"Card profile"} />
        <meta property="og:title" content={cards.name} /> */}
      </Head>
      <div>
        <Nav />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:mx-10 md:mx-48 lg:mx-96 mb-5 p-8 rounded-lg space-y-5 bg-meshRed bg-cover bg-no-repeat bg-opacity-80 bg-clip-padding rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="mb-6">
            <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
              your preferred name
            </label>
            <input
              className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-mint focus:border-mint dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mint dark:focus:border-mint"
              placeholder="anything you like!"
              required
              minLength="2"
              maxLength="20"
              {...register("name", { required: true })}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
              who cannot live without me?
            </label>
            <input
              className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-mint focus:border-mint dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mint dark:focus:border-mint"
              placeholder="my favorite humaaans"
              required
              minLength="2"
              {...register("people", { required: true })}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
              where do I see myself in 5 years?
            </label>
            <textarea
              rows="3"
              className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-mint focus:border-mint dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mint dark:focus:border-mint"
              placeholder="my future :)"
              required
              minLength="2"
              {...register("future", { required: true })}
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
              what places do I still want to go?
            </label>
            <textarea
              rows="2"
              className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-mint focus:border-mint dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mint dark:focus:border-mint"
              placeholder="it's a big world..."
              required
              minLength="2"
              {...register("place", { required: true })}
            ></textarea>
          </div>

          <button
            type="submit"
            value="submit"
            className="text-black bg-mint border-mint border-solid border-2 hover:text-black hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 border-mint border-solid border-2 transition duration-150 hover:duration-150 hover:bg-transparent hover: text-white hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint dark:bg-mint dark:text-white dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint"
          >
            generate!
          </button>
        </form>

        <div className="grid sm:my-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 auto-cols-max sm:mx-auto bg-transparent group perspective">
          {cards?.map((card, i) => (
            <div className="max-w-sm m-5 pl-0 pt-5 aspect-video rounded-lg shadow-lg relative preserve-3d hover:my-rotate-y-180 duration-1000">
              <div className="pt-5 absolute bg-accard bg-cover overflow-hidden aspect-video rounded-lg">
                <p
                  // key={i}
                  className="text-2xl text-center font-bold backface-hidden"
                >
                  {card.name}
                </p>
                <div className="relative">
                  {/* <div className="float-left max-h-10">
                    <Image
                      // key={i}
                      className="object-contain"
                      height="90%"
                      width="90%"
                      src={graphicList[randVal]}
                    />
                  </div> */}
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
              <div className="pt-7 absolute bg-meshGreen bg-cover my-rotate-y-180 backface-hidden overflow-hidden aspect-video rounded-lg">
                <a
                  className="ml-3 text-left subpixel-antialiased hover:text-golden"
                  href="https://988lifeline.org/"
                  target="_blank"
                >
                  988 Suicide and Crisis Lifeline
                </a>
                <br />
                <a
                  className="ml-3 text-left subpixel-antialiased hover:text-golden"
                  href="https://www.crisistextline.org/"
                  target="_blank"
                >
                  Crisis Text Line: text HOME to 741741
                </a>
                <br />
                <a
                  className="ml-3 text-left subpixel-antialiased hover:text-golden"
                  href="https://www.thetrevorproject.org/"
                  target="_blank"
                >
                  The Trevor Project: text START to 678678
                </a>
                <br />
                <a
                  className="ml-3 text-left subpixel-antialiased hover:text-golden"
                  href="https://www.thehotline.org/"
                  target="_blank"
                >
                  National Domestic Violence Hotline: text START to 88788
                </a>
                <br />
                <a
                  className="ml-3 text-left subpixel-antialiased hover:text-golden"
                  href="https://www.rainn.org/"
                  target="_blank"
                >
                  National Sexual Assault Hotline: call 800.656.HOPE
                </a>
              </div>
            </div>
          ))}
          <br />
        </div>
      </div>
    </div>
  );
}
