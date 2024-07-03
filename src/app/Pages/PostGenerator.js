import React from "react";
import Head from "next/head";

export default function PostGenerator() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-poppins">
      <Head>
        <title>My Posts</title>
        <meta name="description" content="A simple Next.js app with a navbar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};


