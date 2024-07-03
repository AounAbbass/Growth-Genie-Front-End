import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLaugh,
  faLightbulb,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const Published = () => {
  return (
    <div className="flex flex-wrap mt-5 mx-[-10px] sm:mx-8 lg:mx-[-4px]">
      <div className="bg-white shadow-lg rounded-lg p-6 m-2 w-full sm:w-full md:w-1/2 lg:w-[420px] sm:h-auto md:h-[410px]">
        <p className="text-gray-400 text-[16px] mt-5">
          Published on 23/12/2023
        </p>
        <p className="text-black-500 text-[12px] mt-6">
          Been taking a ton of demo's lately.
        </p>
        <p className="text-black-500 text-[12px] mt-6">
          It's tiring to be honest.
        </p>
        <p className="text-black-500 text-[12px] mt-6">
          This is a very very specific idea/problem/strategy
        </p>
        <p className="text-black-500 text-[12px] mt-6">
          That will have MEASURABLE impact on my org and company.
        </p>
        <div className="flex items-center mt-16">
          <div className="flex">
            <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-2" />
            <FontAwesomeIcon icon={faLaugh} className="text-yellow-500 mr-2" />
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-blue-500 mr-2"
            />
            <FontAwesomeIcon icon={faThumbsUp} className="text-green-500" />
          </div>
          <p className="text-gray-400 ml-4">1877</p>
          <span className="ml-16"></span>
          <p className="text-gray-400 ml-14">226 Comments</p>
        </div>
        <div className="flex justify-center mt-6">
          <button className="flex items-center bg-gray-100 text-gray-400 px-4 py-2 rounded-lg">
            View my LinkedIn Profile
          </button>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 m-2 w-full sm:w-5/6 md:w-1/2 lg:w-[420px] sm:h-auto md:h-[410px]">
        <p className="text-gray-400 text-[16px] mt-4">
          Published on 23/12/2023
        </p>
        <p className="text-black-400 text-[12px] mt-4">
          I am pleased to announce that I am starting a new position as Sales
          Director Specialist Bu CyberSecurity Bouygues Telecom Enterprises
        </p>
        <p className="text-black-400 text-[12px]">
          Activate to view larger image
        </p>
        <div className="flex items-center mt-16 pt-16">
          <div className="flex mt-3">
            <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-2" />
            <FontAwesomeIcon icon={faLaugh} className="text-yellow-500 mr-2" />
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-blue-500 mr-2"
            />
            <FontAwesomeIcon icon={faThumbsUp} className="text-green-500" />
          </div>
          <p className="text-gray-400 ml-4 mt-3">1877</p>
          <span className="ml-16"></span>
          <p className="text-gray-400 ml-8 mt-3">226 Comments</p>
        </div>
        <div className="flex justify-center mt-6">
          <button className="flex items-center bg-gray-100 text-gray-400 px-4 py-2 rounded-lg">
            View my LinkedIn Profile
          </button>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 m-2 w-full sm:w-5/6 md:w-1/2 lg:w-[420px] sm:h-auto md:h-[410px]">
        <p className="text-gray-400 text-[16px] mt-4">
          Published on 23/12/2023
        </p>
        <p className="text-black-500 text-[12px] mt-5">
          Founders and sales leaders, listen up.
        </p>
        <p className="text-black-500 text-[12px] mt-5">
          Every deal/opportunity in your CRM should have a "next step date"
          field and a "next step" field.
        </p>
        <p className="text-black-500 text-[12px] mt-5">
          This is granular, so stay with me...
        </p>
        <p className="text-black-500 text-[12px] mt-5">
          You should be going deal-by-deal through your pipeline to make sure
          you understand
        </p>
        <div className="flex items-center mt-7">
          <div className="flex">
            <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-2" />
            <FontAwesomeIcon icon={faLaugh} className="text-yellow-500 mr-2" />
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-blue-500 mr-2"
            />
            <FontAwesomeIcon icon={faThumbsUp} className="text-green-500" />
          </div>
          <p className="text-gray-400 ml-4">87</p>
          <span className="ml-16"></span>
          <p className="text-gray-400 ml-16">24 Comments</p>
        </div>
        <div className="flex justify-center mt-6">
          <button className="flex items-center bg-gray-100 text-gray-400 px-4 py-2 rounded-lg">
            View my LinkedIn Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Published;
