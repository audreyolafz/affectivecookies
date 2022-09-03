import React from "react";
import { useState } from "react";
//import { Modal, Button, Label, TextInput, Checkbox } from "flowbite-react";
import cookies from "../public/cookies.png";
import cookieJar from "../public/cookieJar.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { get as fetch } from "axios";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function CookieModal() {
  const { register, handleSubmit } = useForm();
  const [showModal, setShowModal] = useState(false);
  const jars = useSWR("/api/gettitles", fetcher).data;

  const onSubmit = async (data) => {
    fetch("/api/createtitle?title=" + data.title).then((res) =>
      console.log("IMGZZZZZ" + res.data)
    );
  };
  const titles = useSWR("/api/gettitles", fetcher).data;

  return (
    <div>
      <h1 className="text-3xl text-center font-bold">
        What Cookie Jar Challenge Did You Overcome Today?
      </h1>
      {/* <Image
        type="button"
        src={cookieJar}
        width="250px"
        height="250px"
        onClick={() => setShowModal(true)}
      /> */}
      <button
        type="button"
        className="border border-blue-100 text-gray-800  hover:text-white active:bg-black hover:bg-black flex justify-center items-center gap-2 font-bold px-6 h-12 rounded-md hover:shadow-lg outline-none focus:outline-none"
        onClick={() => setShowModal(true)}
      >
        + Create Cookie Jar
      </button>
      <br />

      {showModal ? (
        // <div
        //   id="authentication-modal"
        //   tabindex="-1"
        //   aria-hidden="true"
        //   className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
        // >
        <div className="flex justify-center items-center">
          <div className="relative bg-white rounded-lg shadow md:w-full lg:w-1/2 dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setShowModal(false)}
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                First Step: Cookie Jar Title
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    for="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Name Your Cookie Jar:
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Gratitude"
                    required
                    {...register("title", { required: true })}
                  />
                </div>
                <button
                  type="submit"
                  value="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create!
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : // </div>
      null}
      <br />
      <div className="grid grid-flow-row-dense sm: grid-cols-1 md: grid-cols-1 lg:grid-cols-5">
        {titles?.map((title) => (
          <div>
            <Image type="button" src={cookieJar} width="250px" height="250px" />
            <h1 className="text-center">{title.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
