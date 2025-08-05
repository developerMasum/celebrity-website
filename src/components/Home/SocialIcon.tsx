"use client";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <div className="fixed top-1/2 left-0 z-20 -translate-y-1/2 pl-10">
      <div className="flex flex-col items-start gap-24">
        <div className="h-6 rotate-90 origin-left whitespace-nowrap">
          <Link
            href="#"
            className="text-white hover:text-yellow-500 flex items-center transition-colors"
          >
            <Facebook size={18} className="mr-2" />
            Facebook
          </Link>
        </div>
        <div className="h-6 rotate-90 origin-left whitespace-nowrap">
          <Link
            href="#"
            className="text-white hover:text-yellow-500 flex items-center transition-colors"
          >
            <Instagram size={18} className="mr-2" />
            Instagram
          </Link>
        </div>
        <div className="h-6 rotate-90 origin-left whitespace-nowrap">
          <Link
            href="#"
            className="text-white hover:text-yellow-500 flex items-center transition-colors"
          >
            <Youtube size={18} className="mr-2" />
            YouTube
          </Link>
        </div>
      </div>
    </div>
  );
}
