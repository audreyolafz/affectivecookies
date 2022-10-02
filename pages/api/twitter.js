import { TwitterApi } from "twitter-api-v2";

export default async function displayUserTweets() {
  try {
    const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);
    const userTweets = await client.v2.userTimeline("80144576", {
      exclude: "replies",
    });
    const display = userTweets.data.data;
    return display;
  } catch (e) {
    return "There was an error calling the Twitter API. " + e;
  }
}
