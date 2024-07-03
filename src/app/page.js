// pages/index.js

// pages/page.js
"use client"; // Mark this file as a Client Component
import { useState } from "react";
import Head from "next/head";
import MyPosts from "../app/Pages/MyPosts";
import PostGenerator from "../app/Pages/PostGenerator";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faStar,
  faQuestionCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Assuming XIcon is imported from Heroicons

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("MyPosts");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon - Visible on Mobile */}
      <button
        className="fixed right-0 top-0 mr-4 mt-4 md:hidden"
        onClick={toggleNavbar}
      >
        {isOpen ? (
          <XIcon className="h-6 w-6" />
        ) : (
          <MenuIcon className="h-6 w-6" />
        )}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`fixed z-10 top-0 right-0 md:left-0 w-64 h-full bg-white shadow-md transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 overflow-y-auto pb-10`}
      >
        <div className="flex flex-col items-center">
          {/* Logo and Branding */}
          <div className="flex items-center mb-2 mt-10 mr-10">
            <span className="font-bold text-black text-[24px]">Growth</span>
            <span className="text-black text-[24px] ml-1">Genie</span>
          </div>

          {/* Create Post Button */}
          <button className="flex items-center bg-primary text-white px-5 py-3 rounded-[7.5px] mt-5 mr-10">
            <span className="text-white mr-2">+</span>
            Create a Post
          </button>

          {/* Main Menu Links */}
          <div className="mt-10 w-full items-center">
            <ul className="w-full ml-7">
              <li className="mb-4 flex items-center ">
                <FontAwesomeIcon icon={faList} className="mr-2 size-[16px] " />
                <a
                  className={`text-[16px] cursor-pointer ${
                    activeLink === "PostGenerator"
                      ? "bg-blue-500 text-white"
                      : "text-black"
                  }`}
                  onClick={() => setActiveLink("PostGenerator")}
                >
                  Post Generator
                </a>
              </li>
          
              <li className="mb-4 flex items-center">
                <a
                  className={`flex items-center text-[16px] cursor-pointer ${
                    activeLink === "MyPosts"
                      ? "bg-blue-400 p-3 pr-8 pl-6 text-black"
                      : "text-black"
                  }`}
                  onClick={() => setActiveLink("MyPosts")}
                >
                  <FontAwesomeIcon icon={faList} className="mr-2" />
                  <span
                    className={activeLink === "MyPosts" ? "text-black" : ""}
                  >
                    My Posts
                  </span>
                </a>
              </li>
              <li className="mb-4 flex items-center ">
                <FontAwesomeIcon icon={faList} className="mr-2 size-[16px]" />
                <Link
                  href="/ContentInspiration"
                  className={`text-[16px] ${
                    activeLink === "ContentInspiration"
                      ? "bg-lightblue-200 text-black p-4"
                      : "text-black"
                  }`}
                  onClick={() => setActiveLink("ContentInspiration")}
                >
                  Content Inspiration
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Menu Items */}
          <div className="mt-10 border-t-[2px] border-gray-200 pt-10 pr-16 mr-9">
            <ul>
              <li className="mb-4 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faStar}
                  className="mr-2 size-[16px] stroke-current"
                />
                <Link href="/Upgrade" className="text-black text-[16px]">
                  Upgrade
                </Link>
              </li>
              <li className="mb-4 flex items-center ">
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="mr-2 size-[16px] stroke-current"
                />
                <Link href="/Help" className="text-black text-[16px]">
                  Help
                </Link>
              </li>
              <li className="mb-4 flex items-center ">
                <FontAwesomeIcon
                  icon={faCog}
                  className="mr-2 size-[16px] stroke-current"
                />
                <Link href="/Settings" className="text-black text-[16px]">
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* User Profile */}
          <div className="flex justify-center mt-10 pt-20">
            <div className="flex items-center">
              <img
                src="path_to_your_image.jpg"
                alt="Logo"
                className="h-8 w-8 mr-2 pt-5"
              />
              <h3 className="text-[16px] font-bold pr-20">John Doe</h3>
            </div>
          </div>
          {/* Email */}
          <p className="text-gray-500 text-center pl-10 text-[10px]">
            johndoe@email.com
          </p>
        </div>

        {/* Close Button - Inside Navigation for Mobile */}
        <button
          className="fixed top-12 right-0  mr-4 md:hidden"
          onClick={closeNavbar}
        >
          <XIcon className="h-6 w-6" />
        </button>
      </nav>

      {/* Content Display */}
      {activeLink === "MyPosts" && <MyPosts />}
      {activeLink === "PostGenerator" && <PostGenerator />}
      <div className="ml-0 md:ml-0">
        {" "}
        {/* Adjust margin left for content based on nav width */}
        {/* Main Content */}
        <div className="flex items-center justify-between">
          {/* Hamburger Icon - Visible on Medium and Large Screens */}
          <button className="hidden md:block" onClick={toggleNavbar}>
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
        {/* Conditional Rendering of Components */}
      </div>
    </div>
  );
}
