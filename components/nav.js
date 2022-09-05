import Link from "next/link";
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "next-themes";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

const links = [
  { label: "Home", href: "/" },
  { label: "Image Gallery", href: "/gallery" },
  // { label: "Form", href: "/form" },
  // { label: "Login", href: "/login" },
  { label: "Account", href: "/account" },
  { label: "Cards", href: "/cards" },
  // { label: "Dashboard", href: "/modal" },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();

  return (
    <nav className="dark:text-white">
      <ul className="flex flex-wrap sm:justify-between items-start sm:items-center p-8 border-lg mt-6 sm:mt-0">
        <ul className={`mx-auto sm:mx-0 flex flex-row space-x-5`}>
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link href={href}>
                <a
                  className={`font-inter px-4 py-2 rounded hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10`}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
          <li>
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
              <CgDarkMode size={24} />
            </button>
          </li>
        </ul>
        <div className="rounded-lg">
          {session ? (
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          ) : (
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => signIn()}
            >
              Sign In
            </button>
            // <button className="bg-teal-300 p-3" onClick={() => signIn()}>
            //   Log In
            // </button>
          )}
        </div>
      </ul>
    </nav>
  );
}
