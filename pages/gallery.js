import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Image from "next/image";
import Nav from "../components/Nav";

export default function Gallery() {
  const cards = useSWR("/api/get", fetcher).data;

  return (
    <div>
      <Nav />
      <div className="grid grid-cols-5 place-content-center border-separate rounded-lg">
        {cards?.map((card) => (
          <img className="rounded-lg max-h-72 p-5" src={card.love[0].url} />
        ))}
      </div>
    </div>
  );
}
