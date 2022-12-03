import React from "react";
import { useSession } from "next-auth/react";
import Sentiment from "sentiment";
import displayHomeTimeline from "../../api/twitter";
import Nav from "../../../components/nav";
import { options } from "../../../components/trainData";

export default function Affect({ tweets }) {
  const { data: session } = useSession();
  console.log(tweets);

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
      <div>
        <Nav />
        <br />
        {session ? (
          <ul className="float-left ml-5 w-56 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="green-checkbox"
                  type="checkbox"
                  onClick={handleGreenCheck}
                  checked={checkedGr}
                  className="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="green-checkbox"
                  className="py-3 ml-2 text-sm font-medium text-green-700 dark:text-green-300"
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
                  onClick={handleYellowCheck}
                  checked={checkedYe}
                  className="w-4 h-4 text-yellow-400 bg-gray-100 rounded border-gray-300 focus:ring-yellow-300 dark:focus:ring-yellow-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="yellow-checkbox"
                  className="py-3 ml-2 text-sm font-medium text-yellow-400 dark:text-yellow-100"
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
                  onClick={handleOrangeCheck}
                  checked={checkedOr}
                  data-modal-toggle="popup-modal"
                  className="w-4 h-4 text-orange-500 bg-gray-100 rounded border-gray-300 focus:ring-orange-400 dark:focus:ring-orange-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="green-checkbox"
                  className="py-3 ml-2 text-sm font-medium text-orange-500 dark:text-orange-300"
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
                  onClick={handleRedCheck}
                  checked={checkedRe}
                  className="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="red-checkbox"
                  className="py-3 ml-2 text-sm font-medium text-red-700 dark:text-red-200"
                >
                  Negative 😟
                </label>
              </div>
            </li>
          </ul>
        ) : (
          <div>
            <h1 className="mb-4 text-center text-md tracking-tight leading-none text-gray-900 md:text-3xl lg:text-xl lg:mx-80 dark:text-white">
              Oops! Please sign in with Twitter.
            </h1>
          </div>
        )}
        <div className="sm:mb-48 md:mb-48 lg:mb-0"></div>
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
