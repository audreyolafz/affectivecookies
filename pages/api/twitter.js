import { TwitterApi } from "twitter-api-v2";

// export default async function displayUserTimeline(req) {
//   try {
//     const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);
//     // const search = useSWR("/api/getsearch", fetcher).data;
//     // const search = req.query
//     // console.log(search);
//     const userToId = await client.v2.userByUsername(req);
//     const userTweets = await client.v2.userTimeline(userToId.data.id, {
//       exclude: "replies",
//     });
//     const display = userTweets.data.data;
//     return display;
//   } catch (e) {
//     return "Display User Timeline error~ " + e;
//   }
// }

// export default async function displaySearchTweets(req) {
//   try {
//     const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);
//     const searchTweets = await client.v2.search(req, { "media.fields": "url" });
//     const display = searchTweets.data.data;
//     return display;
//   } catch (e) {
//     return "Display Search Tweets error~ " + e;
//   }
// }

export default async function displayHomeTimeline() {
  try {
    const client = new TwitterApi({
      appKey: process.env.TWITTER_API_KEY,
      appSecret: process.env.TWITTER_API_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_TOKEN_SECRET,
    });
    const homeTimeline = await client.v2.homeTimeline({ exclude: "replies" });

    // console.log(homeTimeline.tweets.length, "fetched.");
    // const nextHomePage = await homeTimeline.next();
    // console.log(
    //   "Fetched tweet IDs in next page:",
    //   nextHomePage.tweets.map((tweet) => tweet.id_str)
    // );
    // const appOnly = await client.appLogin();

    console.log("LOOK AT ME: " + homeTimeline);
    const display = homeTimeline.data.data;
    return display;
  } catch (e) {
    return "Display Home Timeline error~ " + e;
  }
}
