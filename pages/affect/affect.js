import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Sentiment from "sentiment";
import displayHomeTimeline from "../api/twitter";
import Nav from "/components/nav";
import { options } from "/components/trainData";
import Head from "next/head";

export default function Affect({ tweets }) {
  const { data: session } = useSession();

  var sentiment = new Sentiment();

  let green_result = [];
  let yellow_result = [];
  let orange_result = [];
  let red_result = [];

  for (const tweet of tweets) {
    let result = sentiment.analyze(tweet.text, options);
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
      <div>
        <Head>
          <title>Affective Cookies | Mental Health Feed</title>
          <link rel="icon" href="/illustrations/cookieOne.png" />
        </Head>

        <Nav />
        <br />
        {session ? (
          <div>
            <ul className="mb-48 lg:mb-0 float-left ml-5 w-56 text-lg font-medium text-gray-900 bg-white rounded-lg border-navy dark:border-sand border-solid border-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <h3 className="text-lg text-center m-2">
                Check or uncheck the boxes to view your Twitter feed
                sentimentally.
              </h3>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    id="green-checkbox"
                    type="checkbox"
                    // onClick={handleGreenCheck}
                    checked={checkedGr}
                    onChange={handleGreenCheck}
                    className="w-4 h-4 text-green-600 bg-gray-100 rounded border-navy dark:border-sand border-solid border-2 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="green-checkbox"
                    className="py-3 ml-2 text-lg font-medium text-green-700 dark:text-green-300"
                  >
                    Positive 😀
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    id="yellow-checkbox"
                    type="checkbox"
                    // onClick={handleYellowCheck}
                    checked={checkedYe}
                    onChange={handleYellowCheck}
                    className="w-4 h-4 text-yellow-400 bg-gray-100 rounded border-navy dark:border-sand border-solid border-2 focus:ring-yellow-300 dark:focus:ring-yellow-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="yellow-checkbox"
                    className="py-3 ml-2 text-lg font-medium text-yellow-400 dark:text-yellow-100"
                  >
                    Neutral 😐
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    id="orange-checkbox"
                    type="checkbox"
                    checked={checkedOr}
                    onChange={handleOrangeCheck}
                    data-modal-toggle="popup-modal"
                    className="w-4 h-4 text-orange-500 bg-gray-100 rounded border-navy dark:border-sand border-solid border-2 focus:ring-orange-400 dark:focus:ring-orange-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="green-checkbox"
                    className="py-3 ml-2 text-lg font-medium text-orange-500 dark:text-orange-300"
                  >
                    Mental Health Sensitive 🧠
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    checked={checkedRe}
                    onChange={handleRedCheck}
                    className="w-4 h-4 text-red-600 bg-gray-100 rounded border-navy dark:border-sand border-solid border-2 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="py-3 ml-2 text-lg font-medium text-red-700 dark:text-red-200"
                  >
                    Negative 😟
                  </label>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <h1 className="mb-4 text-center text-base tracking-tight leading-none text-gray-900 cursor-pointer md:text-3xl lg:text-xl lg:mx-80 dark:text-white">
              Hi there, with the current current changes to{" "}
              <Link
                className="ml-3 text-left subpixel-antialiased dark:text-black hover:text-golden"
                href="https://twitter.com/TwitterDev/status/1641222782594990080"
                target="_blank"
              >
                <u>Twitter&apos;s API</u>
              </Link>
              , unfortunately this functionality has been broken.
            </h1>
          </div>
        )}
        {checkedGr ? (
          <div className="p-5 mb-4 sm:mx-10 lg:mx-96 bg-green-100 rounded-lg border border-green-800 dark:bg-green-600 dark:border-green-50">
            <h1 className="text-lg font-semibold text-green-800 dark:text-white">
              Positive
            </h1>
            <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
              {green_result.map((item, index) => (
                <li className="block items-center p-3 rounded-lg sm:flex hover:bg-green-200 dark:hover:bg-green-700">
                  <div className="text-gray-800 dark:text-gray-100">
                    <div className="text-base font-normal">
                      <h2 key={index}>{item}</h2>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div></div>
        )}
        {checkedYe ? (
          <div className="p-5 mb-4 sm:mx-10 lg:mx-96 bg-yellow-100 rounded-lg border border-yellow-400 dark:bg-yellow-600 dark:border-yellow-50">
            <h1 className="text-lg font-semibold text-yellow-400 dark:text-white">
              Neutral
            </h1>
            <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
              {yellow_result.map((item, index) => (
                <li className="block items-center p-3 rounded-lg sm:flex hover:bg-yellow-200 dark:hover:bg-yellow-600">
                  <div className="text-gray-800 dark:text-gray-100">
                    <div className="text-base font-normal">
                      <h2 key={index}>{item}</h2>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div></div>
        )}

        {checkedOr ? (
          <div className="p-5 mb-4 sm:mx-10 lg:mx-96 bg-orange-100 rounded-lg border border-red-600 dark:bg-orange-600 dark:border-orange-50">
            <h1 className="text-lg font-semibold text-orange-500 dark:text-white">
              Mental Health Sensitive
            </h1>
            <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
              {orange_result.map((item, index) => (
                <li className="block items-center p-3 rounded-lg sm:flex hover:bg-orange-200 dark:hover:bg-orange-700">
                  <div className="text-gray-800 dark:text-gray-100">
                    <div className="text-base font-normal">
                      <h2 key={index}>{item}</h2>
                    </div>
                  </div>
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
              {red_result.map((item, index) => (
                <li className="block items-center p-3 rounded-lg sm:flex hover:bg-red-200 dark:hover:bg-red-700">
                  <div className="text-gray-800 dark:text-gray-100">
                    <div className="text-base font-normal">
                      <h2 key={index}>{item}</h2>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      tweets: await displayHomeTimeline(),
    },
  };
}
