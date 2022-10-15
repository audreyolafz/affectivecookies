import { TwitterApi } from "twitter-api-v2";
import { Client, auth } from "twitter-api-sdk";

export default async function displayUserTimeline(req) {
  try {
    const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);
    // const search = useSWR("/api/getsearch", fetcher).data;
    // const search = req.query
    // console.log(search);
    const userToId = await client.v2.userByUsername(req);
    const userTweets = await client.v2.userTimeline(userToId.data.id, {
      exclude: "replies",
    });
    const display = userTweets.data.data;
    return display;
  } catch (e) {
    return "Display User Timeline error~ " + e;
  }
}

// export default async function displayHomeTimeline() {
//   try {
//     const readline = require("readline").createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });

//     const getQueryStringParams = (query) => {
//       return query
//         ? (/^[?#]/.test(query) ? query.slice(1) : query)
//             .split(/[\?\&]/)
//             .reduce((params, param) => {
//               let [key, value] = param.split("=");
//               params[key] = value
//                 ? decodeURIComponent(value.replace(/\+/g, " "))
//                 : "";
//               return params;
//             }, {})
//         : {};
//     };

//     async function input(prompt) {
//       return new Promise(async (resolve, reject) => {
//         readline.question(prompt, (out) => {
//           readline.close();
//           resolve(out);
//         });
//       });
//     }

//     const CLIENT_ID = process.env.CLIENT_ID;
//     const CLIENT_SECRET = process.env.CLIENT_SECRET;

//     const params = {
//       expansions: "author_id",
//       "user.fields": ["username", "created_at"],
//       "tweet.fields": ["geo", "entities", "context_annotations"],
//     };

//     (async () => {
//       const authClient = new auth.OAuth2User({
//         client_id: CLIENT_ID,
//         client_secret: CLIENT_SECRET,
//         callback: "http://localhost:3000/api/auth/callback/twitter",
//         scopes: ["tweet.read", "users.read"],
//       });

//       const client = new Client(authClient);
//       const STATE = "my-state";

//       const authUrl = authClient.generateAuthURL({
//         state: STATE,
//         code_challenge: "challenge",
//       });

//       console.log(`Please go here and authorize:`, authUrl);

//       const redirectCallback = await input(
//         "Paste the redirected callback here: "
//       );

//       try {
//         const { state, code } = getQueryStringParams(redirectCallback);
//         if (state !== STATE) {
//           console.log("State isn't matching");
//         }
//         await authClient.requestAccessToken(code);

//         const {
//           data: { id },
//         } = await client.users.findMyUser();
//         console.log(id);
//         const getUsersTimeline = await client.tweets.usersIdTimeline(
//           id,
//           params
//         );
//         for await (tweet of getUsersTimeline) {
//           console.log(tweet);
//         }
//         // console.dir(getUsersTimeline, {
//         //   depth: null,
//         // });
//         // const display = getUsersTimeline.fields;
//         // return display;
//         // process.exit();
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//     //   const homeTimeline = await client.v2.homeTimeline({ exclude: "replies" });
//     //   const display = homeTimeline.data.data;
//     //   return display;
//   } catch (e) {
//     return "Display Home Timeline error~ " + e;
//   }
// }

// export default async function searchTweets() {
//   try {
//     const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);
//     const searchedTweets = await client.v2.search("anxiety", {
//       "media.fields": "url",
//     });
//     const display = searchedTweets.data.data;
//     return display;
//   } catch (e) {
//     return "Search Tweets error~ " + e;
//   }
// }

// export default {displayUserTimeline };
