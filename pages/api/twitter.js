import { TwitterApi } from "twitter-api-v2";

export default async function displayHomeTimeline() {
  try {
    const client = new TwitterApi({
      appKey: process.env.TWITTER_API_KEY,
      appSecret: process.env.TWITTER_API_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_TOKEN_SECRET,
    });
    const homeTimeline = await client.v2.homeTimeline({ exclude: "replies" });
    const display = homeTimeline.data.data;
    return display;
  } catch (e) {
    return "Display Home Timeline error~ " + e;
  }
}
