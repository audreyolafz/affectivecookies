import React from "react";
import { useForm } from "react-hook-form";
import { get as fetch } from "axios";
import useSWR from "swr";
import fetcher from "../../../lib/fetcher";
import Nav from "../../../components/nav";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import lilyLeaf from "../../../public/illustrations/lilyLeaf.png";
import Image from "next/image";

// import Login from "./login";

export default function Form() {
  const { register, handleSubmit } = useForm();
  // const { session, status } = useSession({ required: true });

  const onSubmit = async (data) => {
    fetch(
      "/api/createcard?name=" +
        data.name +
        // `&` +
        // "pic=" +
        // data.pic +
        // `&` +
        // "love=" +
        // data.love +
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

  function newestId() {}
  return (
    <div className="dark:text-white dark:bg-black focus:cursor-auto">
      <div>
        <Nav />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col lg:mx-96 mb-5 p-8 rounded-lg space-y-5 bg-meshRed bg-cover bg-no-repeat bg-opacity-80 bg-clip-padding rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="mb-6">
            <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
              your preferred name
            </label>
            <input
              // className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-mint focus:border-mint block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mint dark:focus:border-mint"
              className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-mint focus:border-mint dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mint dark:focus:border-mint"
              placeholder="anything you like!"
              required
              minLength="2"
              maxLength="20"
              {...register("name", { required: true })}
            />
          </div>
          {/* <div className="mb-6">
            <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
              image url
            </label>
            <input
              className="select-all bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-mint focus:border-mint block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mint dark:focus:border-mint"
              placeholder="unsplash + pexels have hq images!"
              minLength="10"
              type="url"
              required
              {...register("pic", { required: true })}
            />
          </div> */}

          <div className="mb-6">
            <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
              who cannot live without me?
            </label>
            <input
              // className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-mint focus:border-mint block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mint dark:focus:border-mint"
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
            className="text-white bg-mint border-mint border-solid border-2 hover:text-black hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-mint dark:text-black dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint"
          >
            generate!
          </button>
        </form>

        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 auto-cols-max bg-transparent group perspective">
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
                        key={i}
                        // layout="fill"
                        className="object-contain"
                        height="100%"
                        width="100%"
                        src={lilyLeaf}
                      />
                    </div>
                    <p
                      key={i}
                      className="text-base text-right backface-hidden pl-7 pr-2"
                    >
                      🫂 <u>{card.people}</u> could not have done it without me
                      🫶
                    </p>
                    <p
                      key={i}
                      className="text-base text-right backface-hidden pl-5 pr-2"
                    >
                      🤩 <u>{card.future}</u> is pushing me forward!
                    </p>
                    <p
                      key={i}
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
    </div>
  );
}
