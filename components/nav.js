import React from "react";
import Link from "next/link";
import { CgDarkMode, CgExpand } from "react-icons/cg";
import { useTheme } from "next-themes";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useContext, useState, createContext, useEffect } from "react";
import Image from "next/image";
import jar from "/public/illustrations/jar.png";
import { useCounterContext } from "../context/state";
import { get as fetch } from "axios";
import useSWR from "swr";
import fetcher from "/lib/fetcher";

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();
  const [counter] = useCounterContext();
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  // useEffect(() => {
  //   async function getNum() {
  //     const count = await useSWR("/api/getcount", fetcher).data;
  //     console.log("hm " + count);
  //     setCounter(count);
  //   }
  //   getNum();
  // }, []);

  return (
    <div>
      <script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js"></script>
      <nav className="bg-white px-2 mb-8 sm:px-4 py-2.5 dark:bg-black fixed w-full z-20 top-0 left-0 border-gray-200 dark:border-gray-600 cursor-auto">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap hover:bg-transparent hover:text-golden dark:hover:text-golden dark:text-white">
              Affective Cookies
            </span>
          </a>

          <div className="flex md:order-2">
            {session ? (
              <button
                className="mt-2 text-black bg-mint border-mint border-solid border-2 transition duration-150 hover:duration-150 hover:bg-transparent hover:text-black hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-mint dark:text-white dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            ) : (
              <button
                className="mt-2 text-black bg-mint border-mint border-solid border-2 transition duration-150 hover:duration-150 hover:bg-transparent hover:text-black hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-mint dark:text-white dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint"
                onClick={() => signIn()}
              >
                Sign In
              </button>
            )}

            <Image
              // onClick={increment}
              src={jar}
              width="56px"
              height="28px"
              className="cursor-auto"
            />
            <span className="inline-flex justify-center items-center w-6 h-6 -translate-x-10 translate-y-6 text-sm font-semibold text-black bg-mint rounded-full dark:text-white">
              {counter}
            </span>

            <button
              data-collapse-toggle="true"
              // data-toggle="dropdown"
              type="button"
              className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg md:hidden lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="true"
              // id="triggerEl"
              onClick={() => handleClick()}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                document
                  .querySelector("#theme_toggle")
                  .classList.toggle("rotate-180");
              }}
              className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transform duration-200"
              id="theme_toggle"
            >
              <CgDarkMode size={28} />
            </button>
          </div>
          <div
            className={`${
              active ? "" : "hidden"
            }   items-center justify-between md:inline-flex md:w-auto`}
          >
            <div
              className="items-center justify-between w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 mt-4 font-semibold rounded-lg md:flex-row md:space-x-8 md:mt-0">
                <li>
                  <a
                    href="/cards/form"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:hover:text-golden md:p-0 dark:hover:text-golden dark:text-gray-400"
                  >
                    Card
                  </a>
                </li>
                {/* <li>
                  <a
                    href="/cookies/jar"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:hover:text-golden md:p-0 dark:hover:text-golden dark:text-gray-400"
                  >
                    Cookie
                  </a>
                </li> */}
                <li>
                  <a
                    href="/affect/affect"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:hover:text-golden md:p-0 dark:hover:text-golden dark:text-gray-400"
                  >
                    Affect
                  </a>
                </li>
                <li>
                  <a
                    href="/affect/inclusively"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:hover:text-golden md:p-0 dark:hover:text-golden dark:text-gray-400"
                  >
                    Inclusion
                  </a>
                </li>
                <li>
                  <a
                    href="/auth/account"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:hover:text-golden md:p-0 dark:hover:text-golden dark:text-gray-400"
                  >
                    Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
