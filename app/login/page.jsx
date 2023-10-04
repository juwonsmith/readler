"use client";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="h-screen w-full">
      <div className="flex justify-center items-center h-full w-full text-center text-black">
        <form
          className="bg-white p-6  rounded-lg shadow-2xl shadow-black lg:w-[30.5rem] w-[15.5rem] ssm:w-[20.5rem] md:w-[30.5rem] h-[24rem] md:h-[23rem] justify-items-center"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl ssm:text-2xl md:text-3xl font-bold text-gray-700 mb-6">
            Login
          </h1>
          <div className="mb-4 mt-3">
            <input
              type="email"
              name="email"
              id="email"
              className=" bg-gray-200 rounded-lg py-2 px-3 w-[13rem] ssm:w-[17rem] md:w-[25rem] h-12"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="email"
            />
          </div>
          <div className="mb-4 mt-8">
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-200  rounded-lg py-2 px-3  w-[13rem] ssm:w-[17rem] md:w-[25rem] h-12"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="password"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center ">
            <button
              type="submit"
              className="bg-indigo-500  w-[13rem] ssm:w-[17rem] md:w-[25rem] h-12 hover:bg-indigo-700 mt-2 mx-auto  text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Log in
            </button>

            {/* {ispending && (
              <button
                type="submit"
                className="bg-indigo-100  w-[13rem] ssm:w-[17rem] md:w-[25rem] h-12 mt-8 mx-auto  text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                disabled
              >
                Log in
              </button>
            )} */}
            {/* {ispending && (
              <img
                src={Loading}
                alt="loading-gif"
                className="relative left-2 top-3 w-8 h-8 mb-2"
              />
            )} */}
          </div>

          <p className="mt-2">
            New to Readler?
            <Link href="/signup" className="text-red-800 underline">
              Sign up
            </Link>
          </p>
          {/* {error && <p className="text-red-600 text-lg mt-3"> error </p>} */}
        </form>
      </div>
    </div>
  );
}
