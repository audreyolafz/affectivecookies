import React from "react";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { ReqUser } from "../context/state";

// async function displayUserTimeline({ user }) {
//   try {
//     const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);
//     // const search = useSWR("/api/getsearch", fetcher).data;
//     // console.log(search);
//     const userToId = await client.v2.userByUsername(user);
//     // const userToId = await client.v2.userByUsername(search);
//     const userTweets = await client.v2.userTimeline(userToId.data.id, {
//       exclude: "replies",
//     });
//     const display = userTweets.data.data;
//     return display;
//   } catch (e) {
//     return "Display User Timeline error~ " + e;
//   }
// }

// const userReq = ReqUser();

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  // const userSearch = fetch(`http://localhost:3000/api/twitter`, {
  //   method: "post",
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(search),
  // }); //.then((response) => response.json());

  // const onSearch = async (data) => {
  //   fetch("/api/createsearch?search=" + data.search).then((res) =>
  //     console.log("NEW STUFF " + res.data)
  //   );
  // };
  // const userSearch = useSWR("/api/getsearch", fetcher).data;

  const handleSearch = (event) => {
    setSearch(event.target.value);

    // router.push({
    //   pathname: "../../api/twitter",
    //   query: { q: search },
    // });
  };

  const logValue = () => {
    console.log(search);
  };
  return (
    <div>
      <form className="object-center">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 lg:mx-96 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <ReqUser search={search} />

          <input
            type="text"
            id="search"
            className="block lg:mx-96 p-4 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-mint focus:border-mint dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mint dark:focus:border-mint"
            placeholder="Search User"
            required={true}
            // value={search}
            onChange={handleSearch}
            // {...register("search", { required: true })}
          />
          <button
            type="submit"
            onClick={logValue}
            className="text-white absolute lg:mr-96 right-2.5 bottom-2.5 bg-mint border-mint border-solid border-2 hover:text-black hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-lg text-sm px-4 py-2 dark:bg-mint dark:text-black dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
