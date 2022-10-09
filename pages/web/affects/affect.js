import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Sentiment from "sentiment";
import displayUserTimeline from "../../api/twitter";
import Nav from "../../../components/nav";
import { options } from "../../../components/trainData";

export default function Affect({ tweets }) {
  const { data: session } = useSession();
  // console.log(tweets);

  function handleSearch(search) {
    console.log(search);
  }

  var sentiment = new Sentiment();

  let green_result = [];
  let yellow_result = [];
  let orange_result = [];
  let red_result = [];

  for (const tweet of tweets) {
    let result = sentiment.analyze(tweet.text, options);
    // console.log(`${result.score}`);
    if (result.score > 1) {
      green_result.push(tweet.text);
    } else if (result.score <= 1 && result.score >= -1) {
      yellow_result.push(tweet.text);
    } else if (result.score < -1 && result.score >= -10) {
      red_result.push(tweet.text);
    } else if (result.score < -10) {
      orange_result.push(tweet.text);
    }
  }

  const [checkedGr, setCheckedGr] = React.useState(false);
  const [checkedYe, setCheckedYe] = React.useState(false);
  const [checkedOr, setCheckedOr] = React.useState(false);
  const [checkedRe, setCheckedRe] = React.useState(false);

  function handleGreenCheck() {
    setCheckedGr(!checkedGr);
  }
  function handleYellowCheck() {
    setCheckedYe(!checkedYe);
  }
  function handleOrangeCheck() {
    setCheckedOr(!checkedOr);
  }
  function handleRedCheck() {
    setCheckedRe(!checkedRe);
  }
  return (
    <div>
      {/* {session ? ( */}
      <div>
        <Nav />

        <form className="float-right" onSubmit={handleSearch()}>
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required=""
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        <ul className="float-left ml-5 w-56 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="green-checkbox"
                type="checkbox"
                onClick={handleGreenCheck}
                className="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="green-checkbox"
                className="py-3 ml-2 text-sm font-medium text-green-700 dark:text-green-300"
              >
                Positive
              </label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="yellow-checkbox"
                type="checkbox"
                onClick={handleYellowCheck}
                className="w-4 h-4 text-yellow-400 bg-gray-100 rounded border-gray-300 focus:ring-yellow-300 dark:focus:ring-yellow-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="yellow-checkbox"
                className="py-3 ml-2 text-sm font-medium text-yellow-400 dark:text-yellow-100"
              >
                Neutral
              </label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="orange-checkbox"
                type="checkbox"
                onClick={handleOrangeCheck}
                className="w-4 h-4 text-orange-500 bg-gray-100 rounded border-gray-300 focus:ring-orange-400 dark:focus:ring-orange-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="green-checkbox"
                className="py-3 ml-2 text-sm font-medium text-orange-500 dark:text-orange-300"
              >
                Mental Health Sensitive
              </label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="red-checkbox"
                type="checkbox"
                onClick={handleRedCheck}
                className="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="red-checkbox"
                className="py-3 ml-2 text-sm font-medium text-red-700 dark:text-red-200"
              >
                Negative
              </label>
            </div>
          </li>
        </ul>
        <br />
        {checkedGr ? (
          <div className="p-5 mb-4 sm:ml-4 lg:mx-96 bg-green-100 rounded-lg border border-green-800 dark:bg-green-600 dark:border-green-50">
            <h1 className="text-lg font-semibold text-green-800 dark:text-white">
              Positive
            </h1>
            <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
              {green_result.map((i) => (
                <li>
                  <a
                    href="#"
                    className="block items-center p-3 rounded-lg sm:flex hover:bg-green-200 dark:hover:bg-green-700"
                  >
                    <div className="text-gray-800 dark:text-gray-100">
                      <div className="text-base font-normal">
                        <h2>{i}</h2>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div></div>
        )}
        {checkedYe ? (
          <div className="p-5 mb-4 sm:mx-4 lg:mx-96 bg-yellow-100 rounded-lg border border-yellow-400 dark:bg-yellow-400 dark:border-yellow-50">
            <h1 className="text-lg font-semibold text-yellow-400 dark:text-white">
              Neutral
            </h1>
            <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
              {yellow_result.map((i) => (
                <li>
                  <a
                    href="#"
                    className="block items-center p-3 rounded-lg sm:flex hover:bg-yellow-200 dark:hover:bg-yellow-500"
                  >
                    <div className="text-gray-800 dark:text-gray-100">
                      <div className="text-base font-normal">
                        <h2>{i}</h2>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div></div>
        )}

        {checkedOr ? (
          <div className="p-5 mb-4 sm:mx-4 lg:mx-96 bg-orange-100 rounded-lg border border-red-600 dark:bg-orange-600 dark:border-orange-50">
            <h1 className="text-lg font-semibold text-orange-500 dark:text-white">
              Mental Health Sensitive
            </h1>
            <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
              {orange_result.map((i) => (
                <li>
                  <a
                    href="#"
                    className="block items-center p-3 rounded-lg sm:flex hover:bg-orange-200 dark:hover:bg-orange-700"
                  >
                    <div className="text-gray-800 dark:text-gray-100">
                      <div className="text-base font-normal">
                        <h2>{i}</h2>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div></div>
        )}

        {checkedRe ? (
          <div className="p-5 mb-4 sm:mx-10 lg:mx-96 bg-red-100 rounded-lg border border-red-600 dark:bg-red-600 dark:border-red-50">
            <h1 className="text-lg font-semibold text-red-600 dark:text-white">
              Negative
            </h1>
            <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
              {red_result.map((i) => (
                <li>
                  <a
                    href="#"
                    className="block items-center p-3 rounded-lg sm:flex hover:bg-red-200 dark:hover:bg-red-700"
                  >
                    <div className="text-gray-800 dark:text-gray-100">
                      <div className="text-base font-normal">
                        <h2>{i}</h2>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {/* ) : (
        <div>
          <Nav />
        </div>
      )} */}
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      tweets: await displayUserTimeline(req, res),
      // tweets: await displayHomeTimeline(req, res),
      // tweets: await searchTweets(req, res),
    },
  };
}
