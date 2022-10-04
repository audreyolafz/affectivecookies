import React, { useContext } from "react";
import { get as fetch } from "axios";
import useSWR from "swr";
import { useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../lib/fetcher";
import Image from "next/image";
import cookie from "../../public/cookies.png";
import Nav from "../../../components/nav";

export default function Affirmations({ c }) {
  const displayCookies = useSWR("/api/getcookies", fetcher).data;
  return (
    <div>
      {displayCookies?.map((c, i) => (
        <div>
          <Image type="button" src={cookie} width="250px" height="250px" />
          <h1>{c.story}</h1>
        </div>
      ))}
    </div>
  );
}

// export async function getStaticProps() {
//   const cookies = await useSWR("http://localhost:3000/api/getcookies", fetcher)
//     .data;

//   return {
//     props: {
//       cookies,
//     },
//   };
// }
