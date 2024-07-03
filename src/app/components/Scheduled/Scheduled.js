import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGreaterThan,
  faLessThan,
  faFile,
  faPencilAlt,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Scheduled = () => {
  return (
    <div className="flex flex-col mt-12 ml-2">
      <div className="flex w-full justify-between items-center">
        <FontAwesomeIcon icon={faLessThan} className="text-gray-400" />

        <div className="flex flex-col items-center">
          <h1 className="font-bold text-black text-[20px]">
            January 02 - January 05, 2024
          </h1>
          <p className="font text-gray-500 text-[18px]">Asia/Calcutta</p>
        </div>

        <FontAwesomeIcon icon={faGreaterThan} className="text-gray-400" />
      </div>

      <div className="w-full border-t border-gray-300 mt-4"></div>

      <div className="flex flex-wrap justify-center md:justify-between mt-2 px-2">
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-auto mb-4 md:mb-0">
          <div className="flex items-center">
            <h2 className="text-black font-bold text-[16px]">Today</h2>
            <p className="text-gray-500 text-[14px] ml-2">January 02</p>
          </div>
          <div
            className="border border-dashed border-gray-300 rounded-lg mt-5 flex flex-col justify-between bg-white"
            style={{ height: "280px", width: "100%", maxWidth: "300px" }}
          >
            <h1 className="text-gray-400 text-[18px] mt-3 ml-3">09 00 am</h1>
            <div className="bg-gray-100 rounded-lg p-3 mx-3 mb-3">
              <p className="text-gray-400 text-[12px] mt-2">
                Last edited Jan 2, 2024, 12:25 PM
              </p>
              <p className="text-gray-400 text-[12px] mt-2">987 Characters</p>
              <p className="text-black-500 text-[12px] mt-4">
                Founders and sales leaders, listen up
              </p>
              <p className="text-black-500 text-[12px] mt-4">
                Every deal/opportunity in your CRM should have a "next step
                date" field and a "next step" field.
              </p>
            </div>
            <div className="flex justify-center mb-10">
              <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-lg mr-2">
                <FontAwesomeIcon icon={faPencil} className="mr-2" />
                Edit
              </button>
              <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-lg ml-2">
                <FontAwesomeIcon icon={faTrash} className="mr-2" />
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-auto mb-4 md:mb-0 mx-6">
          <div className="flex items-center">
            <h2 className="text-black font-bold text-[16px]">Tomorrow</h2>
            <p className="text-gray-400 text-[14px] ml-2">January 03</p>
          </div>
          <div
            className="border border-dashed border-gray-300 rounded-lg mt-5 flex flex-col justify-between items-center bg-white"
            style={{ height: "280px", width: "100%", maxWidth: "330px" }}
          >
            <h1 className="text-gray-400 text-[18px] mt-3 ml-3 self-start">
              09 00 am
            </h1>
            <p className="text-gray-400 text-[18px] font-italic flex-grow flex items-center justify-center">
              Empty...
            </p>
            <div className="flex mb-4">
              <button className="flex items-center bg-gray-100 text-gray-600 px-10 py-2 rounded-lg mr-2 ml-2 mr-2">
                <FontAwesomeIcon icon={faFile} className="mr-2 ml-1" />
              
              </button>
              <button className="flex items-center bg-gray-100 text-gray-600 px-10 py-2 rounded-lg ml-2 mr-2 ml-2">
                <FontAwesomeIcon icon={faPencilAlt} className="mr-2 ml-1" />
             
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-auto mb-4 md:mb-0 mx-4">
          <div className="flex items-center">
            <h2 className="text-black font-bold text-[16px]">Tomorrow</h2>
            <p className="text-gray-400 text-[14px] ml-2">January 03</p>
          </div>
          <div
            className="border border-dashed border-gray-300 rounded-lg mt-5 flex flex-col justify-between items-center bg-white"
            style={{ height: "280px", width: "100%", maxWidth: "300px" }}
          >
            <h1 className="text-gray-400 text-[18px] mt-3 ml-3 self-start">
              09 00 am
            </h1>
            <p className="text-gray-400 text-[18px] font-italic flex-grow flex items-center justify-center">
              Empty...
            </p>
            <div className="flex mb-4">
              <button className="flex items-center bg-gray-100 text-gray-600 px-10 py-2 rounded-lg mr-2 ml-2">
                <FontAwesomeIcon icon={faFile} className="mr-2 ml-1" />
              </button>
              <button className="flex items-center bg-gray-100 text-gray-600 px-10 py-2 rounded-lg ml-2 mr-2">
                <FontAwesomeIcon icon={faPencilAlt} className="mr-2 ml-1" />
    
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-auto mb-4 md:mb-0 mx-6">
          <div className="flex items-center">
            <h2 className="text-black font-bold text-[16px]">Tomorrow</h2>
            <p className="text-gray-400 text-[14px] ml-2">January 03</p>
          </div>
          <div
            className="border border-dashed border-gray-300 rounded-lg mt-5 flex flex-col justify-between items-center bg-white"
            style={{ height: "280px", width: "100%", maxWidth: "300px" }}
          >
            <h1 className="text-gray-400 text-[18px] mt-3 ml-3 self-start">
              09 00 am
            </h1>
            <p className="text-gray-400 text-[18px] font-italic flex-grow flex items-center justify-center">
              Empty...
            </p>
            <div className="flex mb-4">
              <button className="flex items-center bg-gray-100 text-gray-600 px-10 py-2 rounded-lg mr-2 ml-2">
                <FontAwesomeIcon icon={faFile} className="mr-2 ml-1" />
         
              </button>
              <button className="flex items-center bg-gray-100 text-gray-600 px-10 py-2 rounded-lg ml-2 mr-2">
                <FontAwesomeIcon icon={faPencilAlt} className="mr-3 ml-1" />
           
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduled;
