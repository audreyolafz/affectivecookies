import React from "react";
import { useForm } from "react-hook-form";
import { get as fetch } from "axios";
import Nav from "../components/nav";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
// import Login from "./login";

export default function Form() {
  const { register, handleSubmit } = useForm();
  // const { session, status } = useSession({ required: true });

  const onSubmit = async (data) => {
    fetch(
      "/api/create?name=" +
        data.name +
        `&` +
        "pic=" +
        data.pic +
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
    ).then((res) => console.log("IMGZZZZZ" + res.data));
  };
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="whateva u like"
              required
              minLength="2"
              maxLength="20"
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
              minLength="10"
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
              className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="mah future"
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
              className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="travel legend amirite"
              required
              minLength="2"
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
      </div>
    </div>
  );
}
