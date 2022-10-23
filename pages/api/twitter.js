import { TwitterApi } from "twitter-api-v2";
import { Client, auth } from "twitter-api-sdk";

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

export default async function displaySearchTweets(req) {
  try {
    const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);
    const searchTweets = await client.v2.search(req, { "media.fields": "url" });
    const display = searchTweets.data.data;
    return display;
  } catch (e) {
    return "Display Search Tweets error~ " + e;
  }
}
