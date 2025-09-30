"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import CategoryPanel from "./CategoryPanel";
import AboutPanel from "./AboutPanel";
import SocialIcons from "./SocialIcon";
import RightStaticMenu from "./RightStaticMenu ";

import image1 from "@/assets/hero/hero1.webp";
import image2 from "@/assets/hero/hero2.webp";
import image3 from "@/assets/hero/hero3.webp";

export default function HeroOne() {
  const [showCategories, setShowCategories] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // Images for slider
  const images = [image1, image2, image3];
  const [current, setCurrent] = useState(0);

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleClose = () => {
    setShowCategories(false);
    setShowAbout(false);
  };

  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 transition-opacity duration-700">
        <Image
          src={images[current]}
          alt="Modern luxury penthouse with city skyline views"
          fill
          className="object-cover pointer-events-none"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Social Icons */}
      <SocialIcons />

      {/* Right Static Menu */}
      <RightStaticMenu
        showCategories={showCategories}
        showAbout={showAbout}
        setShowCategories={setShowCategories}
        setShowAbout={setShowAbout}
        handleClose={handleClose}
      />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-end h-full px-60 pb-10">
        <p className="text-sm text-yellow-500">Releasing on 31st October</p>
        <h1 className="text-5xl font-bold">Lucky Baskhar</h1>
        <button className="mt-4 w-2/12 border border-yellow-500 px-6 py-2 hover:bg-yellow-500 hover:text-black transition">
          Book Your Tickets
        </button>

        {/* Dynamic Dots */}
        <div className="flex items-center gap-3 mt-4">
          {images.map((_, idx) => (
            <div
              key={idx}
              className="relative w-10 h-10 flex items-center justify-center cursor-pointer"
              onClick={() => setCurrent(idx)}
            >
              {/* Number */}
              <span
                className={`relative z-10 text-sm font-semibold ${
                  current === idx ? "text-white" : "text-white"
                }`}
              >
                0{idx + 1}
              </span>

              {/* Static Border */}
              <span
                className={`absolute inset-0 rounded-full border transition ${
                  current === idx ? "border-yellow-500" : "border-white/60"
                }`}
              />

              {/* Progress Ring (active only) */}
              {current === idx && (
                <span className="absolute inset-0 rounded-full border-[2px] border-transparent border-t-yellow-500 animate-spin-progress"></span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Panels */}
      {showCategories && <CategoryPanel onClose={handleClose} />}
      {showAbout && <AboutPanel onClose={handleClose} />}
    </section>
  );
}
