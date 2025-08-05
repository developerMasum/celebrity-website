"use client";
import image1 from "@/assets/hero/hero2.avif";
import Image from "next/image";

export default function HeroTwo() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={image1}
        alt="Modern luxury penthouse with city skyline views"
        fill
        className="object-cover pointer-events-none"
        priority
      />

      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <div className="mb-8 z-20">
          <h1 className="text-3xl md:text-3xl font-bold mb-2">
            The Skyline Penthouse
          </h1>
          <p className="text-sm md:text-sm font-light tracking-wider">
            Manhattan, New York
          </p>
        </div>

        {/* Action Buttons */}
        {/* <div className="flex justify-center gap-6 z-20">
          <AnimatedButton>View Listing</AnimatedButton>
          <AnimatedButton isGhost>Schedule Tour</AnimatedButton>
        </div> */}
      </div>
    </section>
  );
}
