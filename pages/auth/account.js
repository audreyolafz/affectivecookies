import React from "react";
import Nav from "/components/nav";
import Image from "next/image";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Head from "next/head";

export default function Account() {
  const { data: session, status } = useSession({ required: true });

  if (status === "authenticated") {
    return (
      <div>
        <Head>
          <title>Affective Cookies | Account</title>
          <link rel="icon" href="/illustrations/cookieOne.png" />
        </Head>

        <Nav />
        <img
          width="5%"
          height="5%"
          className="mx-auto rounded-lg mb-2"
          src={session.user.image}
        />
        <p className="text-3xl text-mint text-center font-semibold">
          Welcome, {session.user.name}!
        </p>
        <br />
        <br />
        <p className="text-center text-xl sm:mx-3 md:mx-10 lg:mx-96">
          <u>Here is an overview:</u>
          <br />
          <br />
          <b>Card</b> | Fill in the fields to create a custom mental health
          card! Check out the card gallery below. <br />
          <br />
          <br />
          <b>Cookie</b> | Write a short story about a time when you overcame
          something challenging, or wonderful things others have said about you.
          When you are feeling down, check out the random cookie generator to
          boost your self-esteem!
          <br />
          <br />
          <b>Affect</b> | Since you are signed in, you can view your Twitter
          feed filtered with mental health in mind.
          <br />
          <br />
          <b>Inclusively</b> | Your words matter. Make your words count by
          ensuring they use kinder and more inclusive phrases.
        </p>
      </div>
    );
  }
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
      },
    };
  }

  return {
    props: { session },
  };
};
