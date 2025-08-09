"use client";

import { useState } from "react";
import MovieCard from "./Components/MovieCard";
import { moviesData } from "@/lib/mockData";

const tabs = ["All", "Malayalam", "Tamil", "Telugu", "Hindi"];

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
