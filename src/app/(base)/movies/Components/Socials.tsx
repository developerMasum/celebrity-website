import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

interface SocialsProps {
  title: string;
  date: string;
}

const Socials = ({ title, date }: SocialsProps) => {
  return (
    <div>
      <div className="relative flex">
        {/* Share section - fixed to the left of the content */}
        <div className="absolute -left-12 top-2 transform rotate-90 origin-left flex items-center gap-3 text-sm text-white">
          <p>Share :</p>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Facebook size={18} stroke="#000" className="bg-white rounded-sm" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Twitter size={18} stroke="#000" className="bg-white rounded-sm" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Instagram
              size={18}
              stroke="#000"
              className="bg-white rounded-sm"
            />
          </a>
        </div>

        {/* Movie details */}
        <div>
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="border border-yellow-500 mb-3 mt-3 w-8"></p>
          <p className="text-gray-400 mb-6">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Socials;
