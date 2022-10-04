import React from "react";
import Nav from "../../../components/nav";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

export default function Account() {
  const { data: session, status } = useSession({ required: true });

  if (status === "authenticated") {
    return (
      <div>
        <Nav />
        <p className="text-3xl text-center font-semibold">
          Welcome, {session.user.name}!
        </p>
        <br />
        <p className="text-center">Head to your account.</p>
        {/* <button
          className="bg-teal-300 box-content m-3 p-3 float-right"
          onClick={() => signOut()}
        >
          Log out
        </button> */}
      </div>
    );
  }
  return (
    <div>
      <Nav />
      <p>you are not logged in</p>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  } else if (session) {
    return {
      redirect: {
        destination: "../cards/form",
      },
    };
  }

  return {
    props: { session },
  };
};
