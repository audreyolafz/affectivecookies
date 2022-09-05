import React from "react";
import { get as fetch } from "axios";
import useSWR from "swr";
import { useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../lib/fetcher";
import Image from "next/image";
import cookie from "../../public/cookies.png";
import Nav from "../../components/nav";

export default function Jar({ cookies }) {
  const { register, handleSubmit } = useForm();
  const [showModal, setShowModal] = useState(false);
  const onCreate = async (data) => {
    fetch(
      "/api/createcookie?story=" +
        data.story +
        `&` +
        "jartitle=" +
        data.jartitle +
        `&` +
        "media=" +
        data.media
    ).then((res) => console.log("YUMTUM " + res.data));
  };
  const cook = useSWR("../../api/getcookies", fetcher).data;

  return (
    <div>
      <Nav />

      <h1 className="text-3xl text-center font-bold">Create a Cookie</h1>
      <br />
      {/* <button
          type="button"
          className=" text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => setShowModal(true)}
        >
          + Create Cookie
        </button>
        <br /> */}
      {/* {showModal ? ( */}
      <div className="flex justify-center items-center">
        <div className="py-2.5 px-5 mr-2 mb-2 relative bg-white rounded-lg shadow md:w-full lg:w-1/2 dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            // data-modal-toggle="authentication-modal"
          >
            {/* <svg
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
              <span className="sr-only">Close modal</span> */}
          </button>
          <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              First Step: Cookie
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit(onCreate)}>
              <div>
                <label
                  for="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name Your Cookie:
                </label>
                <textarea
                  rows="2"
                  className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="deliver a good story"
                  required
                  minLength="2"
                  {...register("story", { required: true })}
                ></textarea>
                {/* <input
                    type="text"
                    name="text"
                    id="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Gratitude"
                    required
                    {...register("story", { required: true })}
                  /> */}
              </div>
              <label
                for="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Type
              </label>
              <select
                name="media"
                id="media"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                {...register("media", { required: true })}
              >
                <option value="text">Text</option>
              </select>
              <label
                for="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Jar Name
              </label>
              <select
                name="jartitle"
                id="jartitle"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                {...register("jartitle", { required: true })}
              >
                <option value="Gratitude">Gratitude</option>
              </select>
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
      {/* ) : null} */}
      <br />
      <div className="flex flex-col items-center">
        <div className="grid grid-flow-row-dense gap-7 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
          {cook?.map((coo, i) => (
            <div>
              <Image type="button" src={cookie} width="250px" height="250px" />
              <h1>{coo.story}</h1>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps({ params }) {
//   const cookies = useSWR(
//     `http://localhost:3000/api/gettitles?title=${params.title}`,
//     fetcher
//   ).data;
//   return {
//     props: {
//       cookie: cookies,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const jarName = await fetch("http://localhost:3000/api/gettitles", fetcher)
//     .data;
//   return {
//     paths: jarName.map((cookie) => {
//       return {
//         params: {
//           jarId: cookie.name,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }
