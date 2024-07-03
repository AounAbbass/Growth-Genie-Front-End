// "use client";

// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faList,
//   faStar,
//   faQuestionCircle,
//   faCog,
// } from "@fortawesome/free-solid-svg-icons";

// const Navigation = ({ setActivePage }) => {
//   const router = useRouter();
//   const [activeLink, setActiveLink] = useState("");

//   useEffect(() => {
//     if (router.isReady) {
//       setActiveLink(router.pathname);
//     }
//   }, [router.isReady, router.pathname]);

//   const handleLinkClick = (page) => {
//     setActiveLink(page);
//     setActivePage(page);
//   };
//   return (
//     <nav
//       className={`fixed z-10 top-0 left-0 w-64 h-full bg-white shadow-md transition-transform transform ${
//         isOpen ? "translate-x-0" : "-translate-x-full"
//       } md:translate-x-0 overflow-y-auto pb-10`}
//     >
//       <div className="flex flex-col items-center">
//         <div className="flex items-center mb-2 mt-10 mr-10">
//           <span className="font-bold text-black text-[24px]">Growth</span>
//           <span className="text-black text-[24px] ml-1">Genie</span>
//         </div>
//         <button className="flex items-center bg-primary text-white px-5 py-3 rounded-[7.5px] mt-5  mr-10">
//           <span className="text-white mr-2">+</span>
//           Create a Post
//         </button>

//         <div className="mt-10 w-full items-center">
//           <ul className="w-full ml-7">
//             <li
//               className={`mb-4 flex items-center ${
//                 activeLink === "/Pages/PostGenerator" ? "bg-blue-500" : ""
//               }`}
//             >
//               <FontAwesomeIcon icon={faList} className="mr-2 size-[16px]" />
//               <Link href="/Pages/PostGenerator">
//                 <a
//                   className={`text-black text-[16px] ${
//                     activeLink === "/Pages/PostGenerator" ? "text-white" : ""
//                   }`}
//                   onClick={() => handleLinkClick("PostGenerator")}
//                 >
//                   Post Generator
//                 </a>
//               </Link>
//             </li>
//             <li
//               className={`mb-4 flex items-center ${
//                 activeLink === "/Pages/MyPosts" ? "bg-blue-500" : ""
//               }`}
//             >
//               <FontAwesomeIcon icon={faList} className="mr-2 size-[16px]" />
//               <Link href="/Pages/MyPosts">
//                 <a
//                   className={`text-black text-[16px] ${
//                     activeLink === "/Pages/MyPosts" ? "text-white" : ""
//                   }`}
//                   onClick={() => handleLinkClick("MyPosts")}
//                 >
//                   My Posts
//                 </a>
//               </Link>
//             </li>
//             <li
//               className={`mb-4 flex items-center ${
//                 activeLink === "/ContentInspiration" ? "bg-blue-500" : ""
//               }`}
//             >
//               <FontAwesomeIcon icon={faList} className="mr-2 size-[16px]" />
//               <Link href="/ContentInspiration">
//                 <a
//                   className={`text-black text-[16px] ${
//                     activeLink === "/ContentInspiration" ? "text-white" : ""
//                   }`}
//                   onClick={() => handleLinkClick("ContentInspiration")}
//                 >
//                   Content Inspiration
//                 </a>
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="mt-10 border-t-[2px] border-gray-200 pt-10 pr-16 mr-9">
//           <ul>
//             <li className="mb-4 flex items-center justify-center">
//               <FontAwesomeIcon
//                 icon={faStar}
//                 className="mr-2 size-[16px] stroke-current"
//               />
//               <Link href="/Upgrade" className="text-black text-[16px]">
//                 Upgrade
//               </Link>
//             </li>
//             <li className="mb-4 flex items-center ">
//               <FontAwesomeIcon
//                 icon={faQuestionCircle}
//                 className="mr-2 size-[16px] stroke-current"
//               />
//               <Link href="/Help" className="text-black text-[16px]">
//                 Help
//               </Link>
//             </li>
//             <li className="mb-4 flex items-center ">
//               <FontAwesomeIcon
//                 icon={faCog}
//                 className="mr-2 size-[16px] stroke-current"
//               />
//               <Link href="/Settings" className="text-black text-[16px]">
//                 Settings
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="flex w-full mt-10">
//           <div className="p-4 rounded border  border-gray-300 mx-5 my-5">
//             {/* Previous nav-links */}
//             {/* Heading */}
//             <h2 className="mt-10 text-[18px]">Words Generated</h2>
//             {/* Small text */}
//             <p className="text-gray-500 text-[14px]">0k/10k</p>
//             {/* Border */}
//             <div className="border border-gray-300 mt-5 mb-5"></div>
//             {/* Small text */}
//             <p className="text-gray-500  text-[14px]">
//               You are on a free trial which ends on DD/MM/YY
//             </p>
//           </div>
//         </div>

//         <div className="flex justify-center mt-10">
//           <div className="flex items-center">
//             {/* Image */}
//             <img
//               src="path_to_your_image.jpg"
//               alt="Logo"
//               className="h-8 w-8 mr-2 pt-5"
//             />
//             {/* Heading */}
//             <h3 className=" text-size[-16px] font-bold pr-20">John Doe</h3>
//           </div>
//         </div>
//         {/* Email */}
//         <p className="text-gray-500 text-center pl-10 text-size[-10px]">
//           johndoe@email.com
//         </p>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
