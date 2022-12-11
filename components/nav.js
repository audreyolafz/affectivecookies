import Link from "next/link";
import { CgDarkMode, CgExpand } from "react-icons/cg";
import { useTheme } from "next-themes";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useState } from "react";

// const links = [
//   { label: "Home", href: "/" },
//   { label: "Card", href: "/web/cards/form" },
//   // { label: "Upload", href: "/web/cards/gallery" },
//   { label: "Cookie", href: "/web/cookies/jar" },
//   { label: "Affect", href: "/web/affect/affect" },
//   { label: "Inclusion", href: "/web/affect/inclusively" },
//   { label: "Account", href: "/web/auth/account" },
// ];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  // function openHamburger() {
  //   open
  // }

  // const targetEl = document.getElementById("targetEl");
  // const options = {
  //   triggerEl: triggerEl,
  //   onCollapse: () => {
  //     console.log("element has been collapsed");
  //     collapse.collapse();
  //   },
  //   onExpand: () => {
  //     console.log("element has been expanded");
  //     collapse.expand();
  //   },
  //   onToggle: () => {
  //     console.log("element has been toggled");
  //     collapse.toggle();
  //   },
  // };
  // const collapse = new Collapse(targetEl, options);
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
            <button
              data-collapse-toggle="true"
              // data-toggle="dropdown"
              type="button"
              className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="true"
              // id="triggerEl"
              // onClick={() => console.log("hi")}
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
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 font-semibold rounded-lg md:flex-row md:space-x-8 md:mt-0">
              <li>
                <a
                  href="/cards/form"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:hover:text-golden md:p-0 dark:hover:text-golden dark:text-gray-400"
                  aria-current="page"
                >
                  Card
                </a>
              </li>
              <li>
                <a
                  href="/cookies/jar"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:hover:text-golden md:p-0 dark:hover:text-golden dark:text-gray-400"
                >
                  Cookie
                </a>
              </li>
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
      </nav>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>

    //     <nav className="bg-white sticky top-0 dark:text-white dark:bg-black">
    //       <ul className="flex flex-wrap sm:justify-between items-start sm:items-center p-8 border-lg mt-6 sm:mt-0">
    //         <ul className={`mx-auto sm:mx-0 flex flex-row space-x-5`}>
    //           {links.map(({ href, label }) => (
    //             <li className="self-center" key={`${href}${label}`}>
    //               <Link href={href}>
    //                 <a
    //                   className={`px-4 py-2 rounded-lg hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10`}
    //                 >
    //                   {label}
    //                 </a>
    //               </Link>
    //             </li>
    //           ))}
    //           <li>
    //             <button
    //               onClick={() => {
    //                 setTheme(theme === "dark" ? "light" : "dark");
    //                 document
    //                   .querySelector("#theme_toggle")
    //                   .classList.toggle("rotate-180");
    //               }}
    //               className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transform duration-200"
    //               id="theme_toggle"
    //             >
    //               <CgDarkMode size={24} />
    //             </button>
    //           </li>
    //         </ul>
    //         <div className="rounded-lg">
    //           {session ? (
    //             <button
    //               className="text-black bg-mint border-mint border-solid border-2 transition duration-150 hover:duration-150 hover:bg-transparent hover:text-golden hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-mint dark:text-white dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint"
    //               onClick={() => signOut()}
    //             >
    //               Sign Out
    //             </button>
    //           ) : (
    //             <button
    //               className="text-black bg-mint border-mint border-solid border-2 transition duration-150 hover:duration-150 hover:bg-transparent hover:text-golden hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-mint dark:text-white dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint"
    //               onClick={() => signIn()}
    //             >
    //               Sign In
    //             </button>
    //           )}
    //         </div>
    //       </ul>
    //     </nav>
  );
}
