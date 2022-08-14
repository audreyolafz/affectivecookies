import React from "react";
import { useForm } from "react-hook-form";
import { get as fetch } from "axios";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    fetch(
      "/api/create?name=" +
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
    ).then((r) => console.log(r.data));
  };
  const todos = useSWR("/api/get", fetcher).data;
  return (
    <div className="dark:text-white dark:bg-black p-10 font-sans">
      <h1 className="text-5xl font-bold">stay.</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mx-52 mb-5 p-8 rounded-lg space-y-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            your preferred name
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="whateva u like"
            required=""
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            who cannot live without me?
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="my favorite humaaans"
            required=""
            {...register("people", { required: true })}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            where do I see myself in 5 years?
          </label>
          <textarea
            rows="3"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="mah future"
            {...register("future", { required: true })}
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            what places do I still want to go?
          </label>
          <textarea
            rows="2"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="travel legend amirite"
            {...register("place", { required: true })}
          ></textarea>
        </div>
        <button
          type="submit"
          value="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          generate!
        </button>
      </form>

      <div className="grid sm: grid-cols-1 md: grid-cols-2 lg:grid-cols-3 auto-cols-max">
        {todos?.map((todo) => (
          <div className=" m-5 p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <p key={todo.id} className="text-gray-700 text-base text-center">
              {todo.name}
            </p>
            <p key={todo.id} className="text-gray-700 text-base text-center">
              {todo.people}
            </p>
            <p key={todo.id} className="text-gray-700 text-base text-center">
              {todo.future}
            </p>
            <p key={todo.id} className="text-gray-700 text-base text-center">
              {todo.place}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
