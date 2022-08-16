import React from "react";
import { useForm } from "react-hook-form";
import { get as fetch } from "axios";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Image from "next/image";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    fetch(
      "/api/create?name=" +
        data.name +
        `&` +
        "love=" +
        data.love +
        `&` +
        "people=" +
        data.people +
        `&` +
        "future=" +
        data.future +
        `&` +
        "place=" +
        data.place
    ).then((res) => console.log("IMGZZZZZ" + res.data));
  };
  const cards = useSWR("/api/get", fetcher).data;
  return (
    <div className="dark:text-white dark:bg-black p-10 focus:cursor-auto">
      <h1 className="text-black text-5xl font-bold">stay.</h1>
      <br />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:mx-96 mb-5 p-8 rounded-lg space-y-5 bg-meshRed bg-cover bg-no-repeat bg-opacity-80 bg-clip-padding rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="mb-6">
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
            your preferred name
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="whateva u like"
            required
            minlength="2"
            maxlength="20"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
            image url
          </label>
          <input
            className="select-all bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="unsplash + pexels have hq images!"
            minlength="10"
            type="url"
            required
            {...register("pic", { required: true })}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
            who cannot live without me?
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="my favorite humaaans"
            required
            minlength="2"
            {...register("people", { required: true })}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
            where do I see myself in 5 years?
          </label>
          <textarea
            rows="3"
            className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="mah future"
            required
            minlength="2"
            {...register("future", { required: true })}
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
            what places do I still want to go?
          </label>
          <textarea
            rows="2"
            className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="travel legend amirite"
            required
            minlength="2"
            {...register("place", { required: true })}
          ></textarea>
        </div>
        <button
          type="submit"
          value="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          generate!
        </button>
      </form>

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 auto-cols-max bg-transparent group perspective">
        {cards?.map((card, i) => (
          <div className="m-5 p-6 aspect-video rounded-lg bg-meshBlue shadow-lg max-w-sm relative preserve-3d hover:my-rotate-y-180 duration-1000">
            <div className="absolute backface-hidden">
              <p
                key={i}
                className="text-neutral-100 text-2xl text-center font-bold backface-hidden"
              >
                {card.name}
              </p>

              <img
                key={i}
                id="picture"
                layout="fill"
                className="rounded-lg object-contain float-left h-28"
                src={card.love[0].url}
              />
              <p
                key={i}
                className="text-neutral-100 text-base text-center backface-hidden px-2"
              >
                🫂 <u>{card.people}</u> could not have done it without me 🫶
              </p>
              <p
                key={i}
                className="text-neutral-100 text-base text-center backface-hidden px-2"
              >
                🤩 <u>{card.future}</u> is exciting me and pushing me forward!
              </p>
              <p
                key={i}
                className="text-neutral-100 text-base text-center backface-hidden px-2"
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
