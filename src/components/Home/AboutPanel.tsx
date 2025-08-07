"use client";
import assets from "@/assets";
import Image from "next/image";

export interface AboutPanelProps {
  onClose: () => void;
}

export default function AboutPanel({ onClose }: AboutPanelProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-40 flex flex-col md:flex-row bg-black text-white">
      {/* Left Image */}
      <div className="w-full md:w-1/2 h-64 md:h-full relative">
        <Image
          src={assets.hero.about}
          alt="Dulquer Salmaan portrait"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 h-full p-8 md:p-12 flex flex-col justify-center relative bg-[#141414]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-sm text-white hover:text-yellow-500 transition"
        >
          ✕ CLOSE
        </button>

        <p className="text-sm text-yellow-400 uppercase tracking-widest mb-2">
          About Dulquer Salmaan
        </p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">Dulquer Salmaan</h1>

        <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
          Known for his exceptional performances in Malayalam, Tamil, Telugu,
          and Hindi, Dulquer Salmaan is one of the best and most versatile
          actors in the Indian film industry.
        </p>

        <a
          href="https://en.wikipedia.org/wiki/Dulquer_Salmaan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 font-medium hover:underline flex items-center gap-1"
        >
          Read more →
        </a>
      </div>
    </div>
  );
}
