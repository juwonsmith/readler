"use client";
import { useState } from "react";
import Link from "next/link";
export default function page() {
  const [displayName, setdisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName);
  };

  return (
    <div className="h-full w-full">
      <div className="flex justify-center items-center h-screen w-full mt-[5rem] text-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-2xl shadow-black lg:w-[30.5rem] w-[15.5rem] ssm:w-[20.5rem] md:w-[30.5rem] h-[32.75rem] justify-items-center"
        >
          <h1 className="text-3xl font-bold text-gray-700 mb-6 ">Register</h1>
          <div className="mb-4 mt-3">
            <input
              type="text"
              name="username"
              id="name"
              className="bg-gray-200 rounded-lg py-2 px-3 w-[13rem] ssm:w-[17rem] md:w-[25rem] h-12"
              onChange={(e) => setdisplayName(e.target.value)}
              value={displayName}
              placeholder="username"
              required
            />
          </div>
          <div className="mb-4 mt-3">
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-200 rounded-lg py-2 px-3  w-[13rem] ssm:w-[17rem] md:w-[25rem] h-12"
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
              className="bg-gray-200 rounded-lg py-2 px-3  w-[13rem] ssm:w-[17rem] md:w-[25rem] h-12"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="password"
            />
          </div>
          <div className="mb-4 mt-8">
            <input
              type="password"
              name="password"
              id="confirmpassword"
              className="bg-gray-200 rounded-lg py-2 px-3 w-[13rem] ssm:w-[17rem] md:w-[25rem] h-12"
              required
              placeholder="confirm password"
            />
          </div>
          <small className="block md:text-lg text-base">
            Already have an account? Login{" "}
            <Link href="../login" className="text-red-800 underline">
              here
            </Link>
          </small>
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* {!ispending && (
              <button
                type="submit"
                className="bg-indigo-500 w-[13rem] ssm:w-[17rem] md:w-[25rem] h-12 mx-auto hover:bg-indigo-700 mt-4  text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              >
                sign up
              </button>
            )}
            {ispending && (
              <button
                type="submit"
                className="bg-indigo-500 w-[13rem] ssm:w-[17rem] md:w-[25rem] h-12  mt-4 mx-auto text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              >
                sign up
              </button>
            )}

            {ispending && (
              <img
                src={Loading}
                alt="loading-gif"
                className="relative left-2 top-3 w-8 h-8"
              />
            )} */}
            <button
              type="submit"
              className="bg-indigo-500 w-[13rem] ssm:w-[17rem] md:w-[25rem] h-12 hover:bg-indigo-700  mt-4 mx-auto text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              sign up
            </button>
          </div>
          {/* {error && <p className="text-red-600 text-base mt-3"> {error} </p>}  */}
        </form>
      </div>
    </div>
  );
}
