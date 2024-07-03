// pages/index.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Drafts() {
  return (
    <div className="flex flex-wrap mt-5">
      <div
        className="bg-white shadow-lg rounded-lg p-6 mb-4 w-full sm:w-full md:w-[400px]"
        style={{ height: "480px" }}
      >
        <FontAwesomeIcon
          icon={faImage}
          className="text-gray-400 mb-4"
          size="1x"
        />
        <p className="text-gray-400 text-xs mt-5">
          Last edited Jan 2, 2024, 12:25 PM
        </p>
        <p className="text-gray-400 text-xs mt-2">987 Characters</p>
        <p className="text-black text-xs mt-6">
          Founders and sales leaders, listen up
        </p>
        <p className="text-black text-xs mt-6">
          Every deal/opportunity in your CRM should have a "next step date"
          field and a "next step" field.
        </p>
        <p className="text-black text-xs mt-6">
          This is granular, so stay with me
        </p>
        <p className="text-black text-xs mt-6">
          You should be going deal-by-deal through your pipeline to make sure
          you understand
        </p>
        <div className="flex justify-between mt-16">
          <button className="flex items-center bg-gray-100 text-gray-600 px-6 py-2 mt-6 rounded-lg">
            <FontAwesomeIcon icon={faPencil} className="mr-2" />
            Edit
          </button>
          <button className="flex items-center bg-gray-100 text-gray-600 px-6 py-2 mt-6  rounded-lg">
            <FontAwesomeIcon icon={faTrash} className="mr-2" />
            Delete
          </button>
        </div>
      </div>

      <div className="w-full sm:w-full md:w-[400px] mt-1 ml-0 md:ml-4">
        <div
          className="bg-white shadow-lg rounded-lg p-6 w-full"
          style={{ height: "460px" }}
        >
          <FontAwesomeIcon
            icon={faImage}
            className="text-gray-400 mb-4"
            size="1x"
          />
          <p className="text-gray-500 text-xs mt-5">
            Last edited Jan 2, 2024, 12:25 PM <span></span> 0 Characters
          </p>
          <div className="flex justify-between mt-10 pt-60">
            <button className="flex items-center bg-gray-100 text-gray-600 px-6 py-2 rounded-lg">
              <FontAwesomeIcon icon={faPencil} className="mr-2" />
              Edit
            </button>
            <button className="flex items-center bg-gray-100 text-gray-600 px-6 py-2 rounded-lg">
              <FontAwesomeIcon icon={faTrash} className="mr-2" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

