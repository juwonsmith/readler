"use client";
import { useEffect, useState } from "react";

export default function page() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const [successflash, setsuccessflash] = useState(null);

  const [completed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-full text-black mt-5">
      <div className="flex justify-center items-center h-screen w-full text-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 ssm:p-10 rounded-lg shadow-lg w-[15.5rem] ssm:w-[21.5rem] md:w-[30.5rem] h-[27.75rem] justify-items-center"
          onClick={console.log("hello world")}
        >
          <h1 className="text-xl ssm:text-3xl font-bold text-gray-700 mb-6 ">
            Add books here.
          </h1>
          <div className="mb-4 mt-3">
            <input
              type="Title"
              name="text"
              id="Title"
              className="bg-gray-200 rounded-lg py-2 px-3  w-[13rem] ssm:w-[17rem] md:w-[25rem] h-12"
              required
              placeholder="Title of book"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              minLength="3"
              maxLength="50"
            />
          </div>

          <div className="mb-4 mt-8">
            <label className="">
              {/* <p className="text-left ml-2 text-bold">Genre:</p> */}
              <select
                className=" w-[13rem] ssm:w-[17rem] md:w-[25rem] h-12 bg-gray-200 "
                onChange={(e) => setGenre(e.target.value)}
                value={genre}
                required
              >
                <option value="">Genre</option>
                <option value="self help">self help</option>
                <option value="fiction">Fiction</option>
                <option value="spirituality">Spirituality</option>
                <option value="short-story">Short Story</option>
                <option value="other">other</option>
              </select>
            </label>
          </div>
          <div className="mb-4 mt-8">
            <input
              type="text"
              name="author"
              className="bg-gray-200 rounded-lg py-2 px-3  w-[13rem] ssm:w-[17rem] md:w-[25rem] h-12"
              required
              placeholder="Author"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              minLength="3"
              maxLength="20"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 w-[13rem] ssm:w-[17rem] md:w-[25rem] h-12 hover:bg-indigo-700 mt-4  text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Add
          </button>
          {/* {error && <p>some error occurred</p>}
          {success && successflash && (
            <button className="text-green-800">Book added successfully.</button>
          )}
          {ispending && <p>loading...</p>} */}
        </form>
      </div>
    </div>
  );
}
