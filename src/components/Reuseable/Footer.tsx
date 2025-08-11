import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1b1b1b] pt-6 pb-4 px-6">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6 text-gray-300">
          <a href="#" className="flex items-center gap-2 hover:text-white">
            <Facebook /> facebook
          </a>
          <span>•</span>
          <a href="#" className="flex items-center gap-2 hover:text-white">
            <Instagram /> instagram
          </a>
          <span>•</span>
          <a href="#" className="flex items-center gap-2 hover:text-white">
            <Youtube /> youtube
          </a>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-t border-gray-700 pt-8">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start max-w-xs">
            <Image
              src="https://via.placeholder.com/100x100?text=DQ"
              alt="DQ Logo"
              width={100}
              height={100}
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
                src="https://via.placeholder.com/100x100"
                alt="Photo 1"
                width={100}
                height={100}
                className="rounded"
              />
              <Image
                src="https://via.placeholder.com/100x100"
                alt="Photo 2"
                width={100}
                height={100}
                className="rounded"
              />
              <Image
                src="https://via.placeholder.com/100x100"
                alt="Photo 3"
                width={100}
                height={100}
                className="rounded"
              />
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left">
              Copyright © 2023-24 Dulquer Salmaan. All Rights Reserved.
              <br />
              Website Powered by Cynix Webtech.
              <br />
              DQ’s Official logo by Ashwin Vishesh.
              <br />
              Graphics by Krishnachandran Pillai.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
