"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
export default function navBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav
        className="w-full fixed top-0 h-32 items-center justify-between p-4 flex list-none first-letter first-letter
       bg-gradient-to-tl from-cyan-500 to-gray-950 bg-slate-600 "
      >
        <p className="font-mono font-bold text-2xl">Walker</p>

        <div
          className=" gap-6 items-center justify-center h-16 cursor-pointer
       font-nunito text-white font-bold hidden sm:flex "
        >
          <Link href="/addBook">
            <li className="navlink">Add book</li>
          </Link>
          <Link href="/completed">
            <li className="navlink">Completed</li>
          </Link>
          {/* <Link href="/">
          <li className="">Logoout</li>
        </Link> */}
          <Link href="/login">
            <li
              className="bg-green-400 w-full h-max p-4 rounded-md hover:bg-gradient-to-r
           hover:from-green-500 hover:to-gray-400 hover:shadow-xl hover:shadow-slate-950 duration-300 transition-all"
            >
              Login
            </li>
          </Link>
        </div>

        {/* //mobile view */}
        <div className="block sm:hidden">
          {!nav ? (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 cursor-pointer"
              onClick={handleClick}
            >
              <motion.path
                animate={{ pathLength: 1, opacity: 1 }}
                initial={{ pathLength: 0, opacity: 0 }}
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </motion.svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              onClick={handleClick}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 z-20 relative"
            >
              <motion.path
                animate={{ pathLength: 1, rotate: 0 }}
                initial={{ pathLength: 0, rotate: 180 }}
                transition={{ duration: 2 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </nav>
      {nav && (
        <div className="list-none fixed top-32 justify-center flex-col gap-2  w-full bg-gray-400 p-2  sm:hidden flex ">
          <Link href="/addBook">
            <p className="navlinkphone">Add book</p>
          </Link>
          <Link href="/completed">
            <p className="navlinkphone">completed</p>
          </Link>
          <Link href="/login">
            <p className="navlinkphone">Login</p>
          </Link>
          <Link href="/signup">
            <p className="navlinkphone">signup</p>
          </Link>
        </div>
      )}
    </>
  );
}
