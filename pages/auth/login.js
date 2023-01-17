import React from "react";
import Head from "next/head";
import Nav from "/components/nav";
import { useSession } from "next-auth/react";
import PrivacyPolicy from "../privacypolicy";

export default function Login() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div>
        <PrivacyPolicy />
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>Affective Cookies | Login</title>
          <link rel="icon" href="/illustrations/cookieOne.png" />
        </Head>
        <Nav />
        <p className="text-center text-xl lg:mx-96">
          You are not logged in! Head to the Sign In button to Sign in with
          Twitter.
        </p>
      </div>
    );
  }
}
