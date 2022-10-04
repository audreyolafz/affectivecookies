import React from "react";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import Image from "next/image";
import Nav from "../../components/nav";

export default function Gallery() {
  const cards = useSWR("/api/getcards", fetcher).data;

  return (
    <div>
      <Nav />
      <div className="grid md:grid-cols-1 lg:grid-cols-5 place-content-center border-separate rounded-lg">
        {cards?.map((card) => (
          <img className="rounded-lg max-h-72 p-5" src={card.love[0].url} />
        ))}
      </div>
    </div>
  );
}
