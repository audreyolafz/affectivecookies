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
        <br />
        <p className="text-center leading-loose text-xl sm:mx-3 md:mx-10 lg:mx-96">
          <u>Here is an overview:</u>
          <br />
          <br />
          <b>Card</b> | Fill in the fields to create a custom mental health
          card! Check out the card gallery below.
          <br />
          <b>Affect</b> | Since you are signed in, you can view your Twitter
          feed filtered with mental health in mind.
          <br />
          <b>Inclusively</b> | Your words matter. Make your words count by
          ensuring they use kinder and more inclusive phrases.
          <br />
          <b>Gallery</b> | You can find the alt text to your image with a quick
          upload, to make your content more accessible.
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
