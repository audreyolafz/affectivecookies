import React from "react";
import { get as fetch } from "axios";
import useSWR from "swr";
import { useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../../lib/fetcher";
import Image from "next/image";
import cookieThree from "../../../public/illustrations/cookieThree.png";
import jar from "../../../public/illustrations/jar.png";
import Nav from "../../../components/nav";
import Head from "next/head";

export default function Jar({ cookies }) {
  const { register, handleSubmit } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [showCookies, setShowCookies] = useState(false);

  function handleShowModal() {
    setShowModal(!showModal);
  }

  function handleShowCookies() {
    setShowCookies(!showCookies);
  }
  const onCreate = async (data) => {
    fetch(
      "/api/createcookie?story=" + data.story + `&` + "Created=" + data.Created
    ).then((res) => console.log("YUMTUM " + res.data));
  };
  const cook = useSWR("../../api/getcookies", fetcher).data;

  return (
    <div className="mx-auto">
      <Head>
        <title>Cookie Jar</title>
      </Head>
      <Nav />

      <br />
      <h1 className="mb-4 text-center text-lg font-bold text-gray-900 md:text-lg lg:text-2xl lg:mx-80 dark:text-white">
        Cookies for Contentment
      </h1>
      <div className="relative flex justify-center items-center w-screen">
        <Image src={jar} width="300px" height="300px" />
        <button
          type="button"
          className="absolute top-50 bg-mint text-black border-mint border-solid border-2 transition duration-150 hover:duration-150 hover:bg-transparent hover: text-white hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-mint dark: text-white dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint"
          onClick={handleShowModal}
        >
          + Create Cookie
        </button>
      </div>
      <br />
      <br />
      {showModal ? (
        <div className="flex justify-center items-center mx-auto">
          <div className="px-auto mx-auto relative bg-white rounded-lg shadow md:w-full lg:w-1/2 dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mx-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
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
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Create a Cookie
              </h3>
              <form
                className="space-y-6 mx-auto"
                onSubmit={handleSubmit(onCreate)}
              >
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Tell your story:
                  </label>
                  <textarea
                    rows="2"
                    className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-mint focus:border-mint dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mint dark:focus:border-mint"
                    placeholder="deliver a good story"
                    required
                    minLength="2"
                    {...register("story", { required: true })}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  value="submit"
                  className="top-50 bg-mint text-black border-mint border-solid border-2 transition duration-150 hover:duration-150 hover:bg-transparent hover: text-white hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-mint dark: text-white dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint"
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
      <br />
      <div className="relative flex justify-center items-center w-screen">
        <button
          type="button"
          className="absolute top-50 bg-mint text-black border-mint border-solid border-2 transition duration-150 hover:duration-150 hover:bg-transparent hover: text-white hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-mint dark: text-white dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint"
          onClick={handleShowCookies}
        >
          Generate a random cookie!
        </button>
      </div>
      {showCookies ? (
        <div className="flex flex-col items-center mx-auto">
          <div className="grid grid-flow-row-dense gap-7 justify-items-center grid-cols-1">
            {cook?.map((coo, i) => (
              <div>
                <br />
                <br />
                <Image
                  type="button"
                  className="mx-auto"
                  src={cookieThree}
                  width="150px"
                  height="150px"
                />
                <h1>{coo.story}</h1>
                <h2>{coo.Created}</h2>
                <br />
                <br />
                <br />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
