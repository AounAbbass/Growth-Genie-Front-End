"use client";

import { useState } from "react";
import Head from "next/head";
import { MenuIcon, XIcon } from "@heroicons/react/outline";



import dynamic from "next/dynamic";

// Dynamically import the Drafts component
const Drafts = dynamic(() => import("../components/Drafts/Drafts"));
const Scheduled = dynamic(() => import("../components/Scheduled/Scheduled"));
const Published = dynamic(() => import("../components/Published/Published"));


export default function MyPosts() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Drafts":
        return <Drafts />;
      case "Scheduled":
        return <Scheduled />;
      case "Published":
        return <Published />;
      // Add cases for other components when created
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-poppins-regular">
      <Head>

        <title>My Posts</title>
        <meta name="description" content="A simple Next.js app with a navbar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="flex-1 p-4 md:ml-64 mt-7">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">My Posts</h1>
      
        </div>
        <div className="mt-10 flex space-x-4 border-b border-gray-200">
          <button
            className={` ${
              activeTab === "Drafts"
                ? "border-b-2 border-blue-500 text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("Drafts")}
          >
            Drafts
          </button>
          <button
            className={` ${
              activeTab === "Scheduled"
                ? "border-b-2 border-blue-500 text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("Scheduled")}
          >
            Scheduled
          </button>
          <button
            className={` ${
              activeTab === "Published"
                ? "border-b-2 border-blue-500 text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("Published")}
          >
            Published
          </button>
          <button
            className={` ${
              activeTab === "Insights"
                ? "border-b-2 border-blue-500 text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("Insights")}
          >
            Insights
          </button>
        </div>

        <div className="mt-4">{renderContent()}</div>
      </div>
    </div>
  );
}
