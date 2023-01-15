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
          className="mx-auto rounded-lg mb-2 border-navy dark:border-sand"
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
          <b>Card</b> | Fill in the fields to create a custom animated mental
          health card! On desktop, hover over the card to reveal call/ text
          helplines, which are hyperlinked. Check out the card gallery below.
          <br />
          <b>Feed</b> | Since you are signed in, you can view your Twitter feed
          filtered with mental health in mind. Simply check the categories you
          want to see.
          <br />
          <b>Inclusion</b> | Your words matter. Make your words count by
          ensuring they use kinder and more inclusive phrases. Then, you can
          copy it and share it with the world!
        </p>
        <br />
        <br />
        <p className="text-center leading-loose text-xl sm:mx-3 md:mx-10 lg:mx-96">
          <h3>Here is a secret:</h3>
          Do you see the cookie jar in the right hand corner? Is it empty? Well,
          you can earn cookie points by doing certain things...😉
        </p>
        <br />
        <br />
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
