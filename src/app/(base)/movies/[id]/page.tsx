// components/MovieDetailPage.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function MovieDetailPage() {
  const [likes, setLikes] = useState(20);

  return (
    <div className=" container mx-auto py-10 min-h-screen  mt-32">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">King of Kotha</h1>
      <p className="text-gray-400 mb-6">August 24, 2023</p>

      {/* Movie Poster */}
      <div className="mb-6">
        <Image
          src="/king-of-kotha.jpg" // replace with actual image path
          alt="King of Kotha Poster"
          width={900}
          height={500}
          className="w-full rounded-lg object-cover"
        />
      </div>

      {/* Watch Now Button */}
      <div className="text-center mb-8">
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-white font-semibold flex items-center justify-center gap-2 mx-auto">
          <span>📺</span> WATCH NOW
        </button>
      </div>

      {/* Info Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-700 text-sm">
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold w-1/4">Directed by</td>
              <td className="p-3">Abhilash Joshiy</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold">Written by</td>
              <td className="p-3">Abhilash N. Chandran</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-3 font-semibold">Produced by</td>
              <td className="p-3">
                <ul className="list-disc ml-5">
                  <li>Dulquer Salmaan</li>
                  <li>Zee Studios</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">Starring</td>
              <td className="p-3">
                <ul className="list-disc ml-5">
                  <li>Dulquer Salmaan</li>
                  <li>Shabeer Kallarakkal</li>
                  <li>Prasanna</li>
                  <li>Gokul Suresh</li>
                  <li>Aishwarya Lekshmi</li>
                  <li>Nyla Usha</li>
                  <li>Chemban Vinod Jose</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Likes */}
      <div className="mb-8 flex items-center gap-2">
        <button
          className="flex items-center gap-2 text-orange-400 hover:text-orange-500"
          onClick={() => setLikes(likes + 1)}
        >
          ❤️ {likes} likes
        </button>
      </div>

      {/* Comment Form */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Leave a comment</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter your Name..."
              className="bg-transparent border border-gray-700 p-3 rounded w-full focus:outline-none focus:border-orange-500"
            />
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="bg-transparent border border-gray-700 p-3 rounded w-full focus:outline-none focus:border-orange-500"
            />
          </div>
          <textarea
            placeholder="Enter your comment..."
            className="bg-transparent border border-gray-700 p-3 rounded w-full h-32 focus:outline-none focus:border-orange-500"
          ></textarea>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="save-info"
              className="accent-orange-500"
            />
            <label htmlFor="save-info" className="text-sm text-gray-300">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded text-white font-semibold"
          >
            SEND
          </button>
        </form>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex justify-between text-sm text-gray-400">
        <a href="#" className="hover:text-orange-500">
          ← previous post
        </a>
        <a href="#" className="hover:text-orange-500">
          next post →
        </a>
      </div>
    </div>
  );
}
