import React from "react";
import { useState } from "react";
//import { Modal, Button, Label, TextInput, Checkbox } from "flowbite-react";
import cookies from "/public/cookies.png";
import cookieJar from "/public/cookieJar.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { get as fetch } from "axios";
import useSWR from "swr";
import fetcher from "/lib/fetcher";

export default function CookieModal() {
  const { register, handleSubmit } = useForm();
  const [showModal, setShowModal] = useState(false);
  const jars = useSWR("/api/gettitles", fetcher).data;

  function handleShowModal() {
    setShowModal(!showModal);
  }
  const onSubmit = async (data) => {
    fetch("/api/createtitle?title=" + data.title).then((res) =>
      console.log("IMGZZZZZ" + res.data)
    );
  };
  const titles = useSWR("/api/gettitles", fetcher).data;

  return (
    <div className="mx-auto">
      <h1 className="text-3xl text-center font-bold">
        What Cookie Jar Challenge Did You Overcome Today?
      </h1>
      <br />
      {/* <Image
        type="button"
        src={cookieJar}
        width="250px"
        height="250px"
        onClick={() => setShowModal(true)}
      /> */}
      <div className="flex justify-center items-center w-screen">
        <button
          type="button"
          className="mx-auto py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={handleShowModal}
        >
          + Create Cookie Jar
        </button>
      </div>
      <br />

      {showModal ? (
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
                onClick={handleShowModal}
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
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
                    htmlFor="text"
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
      ) : (
        <div></div>
      )}
      <br />
      <div className="flex flex-col items-center">
        <div className="grid grid-flow-row-dense sm: grid-cols-1 md: grid-cols-1 lg:grid-cols-4">
          {titles?.map((title) => (
            <div>
              <Image
                type="button"
                src={cookieJar}
                width="250px"
                height="250px"
              />
              <h1 className="text-center">{title.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
