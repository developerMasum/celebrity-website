"use client";
import assets from "@/assets";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen  text-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-black/40 backdrop-blur-md rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left: Image */}
        <div className="md:w-1/2 relative h-80 md:h-auto">
          <Image
            src={assets.hero.about}
            alt="Dulquer Salmaan"
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dulquer Salmaan
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Dulquer Salmaan is a popular Indian actor and producer known for his
            work in Malayalam, Tamil, Telugu, and Hindi cinema. He is admired
            for his versatile acting and charismatic screen presence.
          </p>

          <ul className="space-y-2 text-yellow-300 font-semibold">
            <li>🎬 Born: July 28, 1986, Kochi, Kerala, India</li>
            <li>🏆 Awards: Multiple Filmfare Awards South</li>
            <li>📽️ Debut: Second Show (2009, Malayalam)</li>
            <li>
              🎓 Education: Purdue University, USA (B.Tech in Mechanical
              Engineering)
            </li>
          </ul>

          <button className="mt-6 bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-400 transition-colors w-40 text-center">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}
