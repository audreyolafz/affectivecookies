import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Nav from "../components/nav";
import CookieModal from "../components/modal";
import Image from "next/image";

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black focus:cursor-auto">
      <Nav />
      <CookieModal />

      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Technology
      </h3>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="green-checkbox"
              type="checkbox"
              className="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="green-checkbox"
              className="py-3 ml-2 text-sm font-medium text-green-800 dark:text-green-300"
            >
              Green
            </label>
          </div>
        </li>
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="yellow-checkbox"
              type="checkbox"
              className="w-4 h-4 text-yellow-400 bg-gray-100 rounded border-gray-300 focus:ring-yellow-300 dark:focus:ring-yellow-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="yellow-checkbox"
              className="py-3 ml-2 text-sm font-medium text-yellow-500 dark:text-yellow-100"
            >
              Yellow
            </label>
          </div>
        </li>
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="red-checkbox"
              type="checkbox"
              className="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="red-checkbox"
              className="py-3 ml-2 text-sm font-medium text-red-800 dark:text-red-200"
            >
              Red
            </label>
          </div>
        </li>
      </ul>

      <div className="flex items-center mr-4"></div>
      <div className="flex items-center mr-4"></div>
    </div>
  );
}
