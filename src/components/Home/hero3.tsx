"use client";
import image1 from "@/assets/hero/hero3.avif";
import Image from "next/image";

export default function HeroThree() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={image1}
        alt="Mountain retreat with panoramic forest views"
        fill
        className="object-cover pointer-events-none"
        priority
      />

      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <div className="mb-8 z-20">
          <h1 className="text-3xl md:text-3xl font-bold mb-2">
            Alpine Haven Retreat
          </h1>
          <p className="text-sm md:text-sm font-light tracking-wider">
            Aspen, Colorado
          </p>
        </div>

        {/* Action Buttons */}
        {/* <div className="flex justify-center gap-6 z-20">
          <AnimatedButton>Explore Property</AnimatedButton>
          <AnimatedButton isGhost>Contact Agent</AnimatedButton>
        </div> */}
      </div>
    </section>
  );
}
