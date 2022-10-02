import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Sentiment from "sentiment";
import displayUserTweets from "./api/twitter";

export default function TwitterSentiment({ tweets, home }) {
  const { data: session } = useSession();
  // console.log(tweets);
  var sentiment = new Sentiment();
  var options = {
    extras: {
      totally: -100,
    },
  };
  let green_result = [];
  let yellow_result = [];
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
    }
  }
  return (
    <div>
      {session ? (
        <div>
          <h3>Signed in as {session.user.name}</h3>
          <br />
          {green_result.map((i) => (
            <div>
              <h2
                style={{
                  borderColor: "green",
                  borderRadius: "10px",
                  borderStyle: "solid",
                  borderWidth: "medium",
                }}
              >
                {i}
              </h2>
              <br />
            </div>
          ))}
          {yellow_result.map((i) => (
            <div>
              <h2
                style={{
                  borderColor: "yellow",
                  borderRadius: "10px",
                  borderStyle: "solid",
                  borderWidth: "medium",
                }}
              >
                {i}
              </h2>
              <br />
            </div>
          ))}
          {red_result.map((i) => (
            <div>
              <h2
                style={{
                  borderColor: "red",
                  borderRadius: "10px",
                  borderStyle: "solid",
                  borderWidth: "medium",
                }}
              >
                {i}
              </h2>
              <br />
            </div>
          ))}
          <br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <div>
          <h3>Not signed in</h3>
          <br />
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      tweets: await displayUserTweets(req, res),
      // home: await displayhomeTimeline(req, res),
    },
  };
}
