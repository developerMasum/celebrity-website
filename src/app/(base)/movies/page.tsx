"use client";

import { useState } from "react";
import MovieCard from "./Components/MovieCard";

const tabs = ["All", "Malayalam", "Tamil", "Telugu", "Hindi"];

const moviesData = [
  {
    id: 1,
    title: "Lucky Baskhar",
    date: "July 27, 2024",
    likes: 103,
    comments: 0,
    category: "Telugu",
    imageUrl:
      "https://cdn.statically.io/img/dulquer.com/wp-content/uploads/2024/07/1526108-lucky-baskar-1024x614.webp", // Replace with Google image URL
  },
  {
    id: 2,
    title: "Kalki 2898 AD",
    date: "June 27, 2024",
    likes: 60,
    comments: 0,
    category: "Telugu",
    imageUrl:
      "https://cdn.statically.io/img/dulquer.com/wp-content/uploads/2024/07/1526108-lucky-baskar-1024x614.webp", // Replace with Google image URL
  },
  {
    id: 3,
    title: "King of Kotha",
    date: "August 24, 2023",
    likes: 20,
    comments: 0,
    category: "Malayalam",
    imageUrl:
      "https://cdn.statically.io/img/dulquer.com/wp-content/uploads/2024/07/1526108-lucky-baskar-1024x614.webp", // Replace with Google image URL
  },
];

export default function Movies() {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  const filtered =
    activeTab === "All"
      ? moviesData
      : moviesData.filter((m) => m.category === activeTab);

  return (
    <section className="bg-black min-h-screen py-10 px-5">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Movies</h2>
      <div className="flex justify-center gap-6 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 text-lg ${
              activeTab === tab
                ? "text-yellow-500 border-b-2 border-t-2 border-s-2 p-2 border-yellow-500"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.slice(0, visibleCount).map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      {visibleCount < filtered.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((v) => v + 3)}
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
