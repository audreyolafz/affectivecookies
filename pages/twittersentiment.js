import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Sentiment from "sentiment";
import displayUserTweets from "./api/twitter";
import Nav from "../components/nav";

export default function TwitterSentiment({ tweets, home }) {
  const { data: session } = useSession();
  // console.log(tweets);
  var sentiment = new Sentiment();
  var options = {
    extras: {
      totally: -100,
    },
  };
  let green_result = [];
  let yellow_result = [];
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
    }
  }

  const [checkedGr, setCheckedGr] = React.useState(false);
  const [checkedYe, setCheckedYe] = React.useState(false);
  const [checkedRe, setCheckedRe] = React.useState(false);

  function handleGreenCheck() {
    setCheckedGr(!checkedGr);
  }
  function handleYellowCheck() {
    setCheckedYe(!checkedYe);
  }
  function handleRedCheck() {
    setCheckedRe(!checkedRe);
  }
  return (
    <div>
      {session ? (
        <div>
          <Nav />

          <ul className="ml-5 w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
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
                  className="py-3 ml-2 text-sm font-medium text-green-800 dark:text-green-300"
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
                  className="py-3 ml-2 text-sm font-medium text-yellow-500 dark:text-yellow-100"
                >
                  Neutral
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
                  className="py-3 ml-2 text-sm font-medium text-red-800 dark:text-red-200"
                >
                  Negative
                </label>
              </div>
            </li>
          </ul>

          {/* {green_result.map((i) => (
            <div className="mx-96">
              <h2 className="border-green-800 p-2 rounded-lg border-solid border-4">
                {i}
              </h2>
              <br />
            </div>
          ))}
          {yellow_result.map((i) => (
            <div className="mx-96">
              <h2 className="border-yellow-400 p-2 rounded-lg border-solid border-4">
                {i}
              </h2>
              <br />
            </div>
          ))}
          {red_result.map((i) => (
            <div className="mx-96">
              <h2 className="border-red-600 p-2 rounded-lg border-solid border-4">
                {i}
              </h2>
              <br />
            </div>
          ))} */}
          {checkedGr ? (
            <div className="p-5 mb-4 mx-96 bg-green-100 rounded-lg border border-green-800 dark:bg-green-600 dark:border-green-50">
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
            <div className="p-5 mb-4 mx-96 bg-yellow-100 rounded-lg border border-yellow-400 dark:bg-yellow-400 dark:border-yellow-50">
              <h1 className="text-lg font-semibold text-yellow-400 dark:text-white">
                Neutral
              </h1>
              <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                {yellow_result.map((i) => (
                  <li>
                    <a
                      href="#"
                      className="block items-center p-3 rounded-lg sm:flex hover:bg-yellow-200 dark:hover:bg-yellow-600"
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
            <div className="p-5 mb-4 mx-96 bg-red-100 rounded-lg border border-red-600 dark:bg-red-600 dark:border-red-50">
              <h1 className="text-lg font-semibold text-red-600 dark:text-white">
                Negative
              </h1>
              <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                {yellow_result.map((i) => (
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
      ) : (
        <div>
          <Nav />
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      tweets: await displayUserTweets(req, res),
      // home: await displayhomeTimeline(req, res),
    },
  };
}
