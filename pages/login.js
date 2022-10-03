import React from "react";
import Nav from "../components/nav";
import { useSession, signIn, signOut } from "next-auth/react";
import Account from "./account";

export default function Login() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div>
        <Account />
      </div>
    );
  } else {
    return (
      <div>
        <Nav />
        <p className="text-center">
          You are not logged in! Head to "Login" to Sign in with Twitter.
        </p>
      </div>
    );
  }
}
