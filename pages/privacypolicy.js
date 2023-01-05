import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="m-10 text-center cursor-auto">
      <h3 className="text-2xl font-semibold">Copyright Policy</h3>
      <br />
      <p className="text-xl">
        All content on this website, including text, graphics, images, and
        information, is the property of Affective Cookies and is protected by
        copyright laws. The content on this website may be used for personal,
        non-commercial use only. Any unauthorized use of the content on this
        website, including reproduction, distribution, or modification, is
        strictly prohibited. If you wish to use any of the content on this
        website for commercial purposes, you must obtain written permission from
        Affective Cookies in advance.
      </p>
      <br />
      <h3 className="text-2xl font-semibold">Privacy Policy</h3>
      <br />
      <p className="text-xl">
        Affective Cookies is committed to protecting your privacy. We will only
        collect and use personal information in accordance with this privacy
        policy. We may collect personal information from you when you visit our
        website, such as your name, email address, and IP address. This
        information will be used to respond to your inquiries, send you
        newsletters or updates, and improve our website. We will not sell or
        disclose your personal information to any third parties without your
        consent, except as required by law. We may use cookies to collect
        information about your visit to our website and your browsing history.
        This information is used to improve your user experience and to track
        website usage statistics. We use secure servers to protect your personal
        information, and we have implemented appropriate security measures to
        protect your information from unauthorized access.
      </p>
      <br />
      <Link
        //
        href="/auth/account"
      >
        <h3 className="mt-2 self-center text-black bg-mint border-navy dark:border-sand border-solid border-2 transition duration-150 hover:duration-150 hover:bg-transparent hover:text-black hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-full text-base px-5 py-2.5 mr-2 mb-2 dark:bg-mint dark:text-white dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint">
          {" "}
          I Agree
        </h3>
      </Link>
    </div>
  );
}
