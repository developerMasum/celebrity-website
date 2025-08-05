"use client";
import { useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import image1 from "@/assets/hero/hero1.webp";
import Image from "next/image";
import CategoryPanel from "./CategoryPanel";
import AboutPanel from "./AboutPanel";
import RightStaticMenu from "./RightStaticMenu ";
import SocialIcons from "./SocialIcon";

export default function HeroOne() {
  const [showCategories, setShowCategories] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleClose = () => {
    setShowCategories(false);
    setShowAbout(false);
  };

  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image1}
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
      <div className="relative z-20 flex flex-col justify-end h-full px-10 pb-10">
        <p className="text-sm text-yellow-500">Releasing on 31st October</p>
        <h1 className="text-5xl font-bold">Lucky Baskhar</h1>
        <button className="mt-4 w-2/12 border border-yellow-500 px-6 py-2 hover:bg-yellow-500 hover:text-black transition">
          Book Your Tickets
        </button>
        <div className="flex items-center gap-2 mt-4">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                num === 1
                  ? "bg-yellow-500 text-black"
                  : "border-white text-white"
              }`}
            >
              0{num}
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
