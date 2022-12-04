import Head from "next/head";
import Link from "next/link";

import { useState } from "react";
import Nav from "../../../components/nav";

export default function Inclusively() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await fetch(`/api/inclusion?prompt=${input}`);
    const data = await res.json();
    setAnswer(data.text);
    setLoading(false);
  };

  return (
    <div>
      <Nav />
      <div className="flex justify-center">
        <Head>
          <title>Inclusively</title>
          <meta
            name="description"
            content="App that gives advice using OpenAI GPT-3"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex pt-40 p-4 flex-col max-w-lg w-full h-screen gap-6">
          <h1 className="text-2xl">Inclusively.</h1>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col gap-5"
          >
            <label className="block text-lg font-medium text-gray-900 dark:text-white">
              Enter text that you want to make more inclusive.
            </label>
            <textarea
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows="2"
              className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-mint focus:border-mint dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mint dark:focus:border-mint"
              placeholder=":)"
              required
              minLength="2"
            ></textarea>
            <input
              className="self-end text-black bg-mint border-mint border-solid border-2 hover:text-black hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 border-mint border-solid border-2 transition duration-150 hover:duration-150 hover:bg-transparent hover: text-white hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint dark:bg-mint dark:text-white dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint"
              type="submit"
              value="Submit"
            />
          </form>
          {loading && <div>Loading...</div>}
          {answer && (
            <>
              <h2>Result:</h2>
              <div>{answer}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
