import Link from "next/link";
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "next-themes";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

const links = [
  { label: "Home", href: "/" },
  { label: "Card", href: "/web/cards/form" },
  { label: "Cookie", href: "/web/cookies/jar" },
  { label: "Affect", href: "/web/affects/affect" },
  { label: "Account", href: "/web/auth/account" },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();

  return (
    <nav className="bg-white sticky top-0 dark:text-white dark:bg-black">
      <ul className="flex flex-wrap sm:justify-between items-start sm:items-center p-8 border-lg mt-6 sm:mt-0">
        <ul className={`mx-auto sm:mx-0 flex flex-row space-x-5`}>
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link href={href}>
                <a
                  className={`px-4 py-2 rounded-lg hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10`}
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
              className="text-black bg-mint border-mint border-solid border-2 transition duration-150 hover:duration-150 hover:bg-transparent hover:text-black hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-mint dark:text-white dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          ) : (
            <button
              className="text-black bg-mint border-mint border-solid border-2 transition duration-150 hover:duration-150 hover:bg-transparent hover:text-black hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-mint dark:text-white dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          )}
        </div>
      </ul>
    </nav>
  );
}
