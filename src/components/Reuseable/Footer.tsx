import assets from "@/assets";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1b1b1b] pt-6 pb-4 px-6">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6 text-gray-300">
          <a href="#" className="flex items-center gap-2 hover:text-yellow-400">
            <Facebook className="stroke-current" size={20} strokeWidth={2} />
            facebook
          </a>
          <span className="text-yellow-500">•</span>
          <a href="#" className="flex items-center gap-2 hover:text-yellow-400">
            <Instagram className="stroke-current" size={20} strokeWidth={2} />
            instagram
          </a>
          <span className="text-yellow-500">•</span>
          <a href="#" className="flex items-center gap-2 hover:text-yellow-400">
            <Youtube className="stroke-current" size={20} strokeWidth={2} />
            youtube
          </a>
        </div>
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-t border-gray-700 pt-8">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start max-w-xs">
            <Image
              src={assets.hero.footerLogo}
              alt="DQ Logo"
              width={70}
              height={70}
              className="mb-3"
            />
            <p className="text-gray-400 text-center md:text-left">
              Dulquer Salmaan is an Indian actor, playback singer and film
              producer who predominantly works in Malayalam, Tamil, Telugu and
              Hindi films.
            </p>
          </div>

          {/* Latest Photos */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-3">Latest Photos</h3>
            <div className="flex gap-3 mb-4">
              <Image
                src={assets.hero.hero1}
                alt="Photo 1"
                width={100}
                height={100}
                className="rounded"
              />
              <Image
                src={assets.hero.hero1}
                alt="Photo 2"
                width={100}
                height={100}
                className="rounded"
              />
              <Image
                src={assets.hero.hero1}
                alt="Photo 3"
                width={100}
                height={100}
                className="rounded"
              />
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left">
              Copyright © 2025-2026 Dulquer Salmaan. All Rights Reserved.
              <br />
              Website Powered by Farhan Adnan Masum.
              <br />
              DQ’s Official logo by Farhan Adnan Masum.
              <br />
              Graphics by Farhan Adnan Masum.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
