import React from "react";
import Link from "next/link";
import { GoMarkGithub } from "react-icons/go";

export default function Footer() {
  return (
    <div className="float-right my-5 mr-10">
      Github Repository:
      <Link
        className="cursor-pointer"
        href="https://github.com/audreyolafz/affectivecookies"
        rel="noreferrer noopener"
        target="_blank"
      >
        <GoMarkGithub size={28} />
      </Link>
    </div>
  );
}
