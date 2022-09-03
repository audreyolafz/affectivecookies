import React from "react";
import { get as fetch } from "axios";
import useSWR from "swr";
import { useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../lib/fetcher";
import Image from "next/image";
import cookie from "../../public/cookies.png";
import Nav from "../../components/nav";

export default function Affirmations() {
  const cookies = useSWR("/api/getcookies", fetcher).data;
  return (
    <div>
      {cookies?.map((cookie, i) => (
        <div>
          <h1>{cookie.story}</h1>
        </div>
      ))}
    </div>
  );
}
