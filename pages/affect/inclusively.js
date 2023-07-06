import Head from "next/head";
import Link from "next/link";
import Sentiment from "sentiment";
import { options } from "/components/trainData";
import { useState } from "react";
import Nav from "/components/nav";
import { useCounterContext } from "/context/state";

export default function Inclusively() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useCounterContext();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await fetch(`/api/inclusion?prompt=${input}`);
    const data = await res.json();
    setAnswer(data.text);
    setLoading(false);
    setCounter(counter + 1);
  };

  let sentimentColor = "";
  var sentiment = new Sentiment();
  let result = sentiment.analyze(answer, options);
  if (result.score > 1) {
    sentimentColor = "bg-green";
  } else if (result.score <= 1 && result.score >= -1) {
    sentimentColor = "bg-yellow";
    // setCounter(counter + 1);
  } else if (result.score < -1 && result.score >= -10) {
    sentimentColor = "bg-orange";
  } else if (result.score < -10) {
    sentimentColor = "bg-red";
  }

  function copyToClipboard() {
    var range = document.createRange();
    range.selectNode(copyme);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Copied!");
    window.getSelection().removeAllRanges();
  }

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Nav />
      <div className="flex justify-center">
        <Head>
          <title>Affective Cookies | Inclusively</title>
          <meta
            name="description"
            content="Project that makes words more inclusive"
          />
          <link rel="icon" href="/illustrations/cookieOne.png" />
        </Head>
        <div className="flex pt-40 p-4 flex-col max-w-lg w-full h-screen gap-6">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col gap-5"
          >
            <label className="block text-xl font-medium text-gray-900 dark:text-white">
              Enter text that you want to make more inclusive.
            </label>
            <textarea
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows="2"
              className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border-navy dark:border-sand border-solid border-2 focus:ring-mint focus:border-mint dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mint dark:focus:border-mint"
              placeholder="choose kindness :)"
              required
              minLength="2"
            ></textarea>
            <input
              className="mt-2 self-center text-black bg-mint border-navy dark:border-sand border-solid border-2 transition duration-150 hover:duration-150 hover:bg-transparent hover:text-black hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-full text-base px-5 py-2.5 mr-2 mb-2 dark:bg-mint dark:text-white dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint"
              type="submit"
              value="Submit"
              // onClick={increment}
            />
          </form>
          {loading && <div>Loading...</div>}
          {answer && (
            <>
              <h2 className="font-medium text-lg">
                Feel free to copy the generated text below!
              </h2>
              <div className="flex space-x-3">
                <div
                  className={`p-3 rounded-lg border border-gray-400 ${sentimentColor}-100 dark:${sentimentColor}-600`}
                >
                  <div className="text-gray-800 dark:text-gray-100" id="copyme">
                    {answer}
                  </div>
                </div>

                <div
                  id="tooltip-default"
                  role="tooltip"
                  className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-mint rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                >
                  Tooltip content
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>

                {document.queryCommandSupported("copy") && (
                  <button
                    type="button"
                    data-tooltip-target="tooltip-copy"
                    data-tooltip-placement="top"
                    onClick={copyToClipboard}
                    className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-mint rounded-lg border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-4 focus:ring-mint focus:outline-none dark:focus:ring-mint"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path>
                      <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path>
                    </svg>
                    <span className="sr-only">Copy</span>
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
