"use client";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-black/40 backdrop-blur-md rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left: Contact Info */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-white/80">
            I would love to hear from you! Whether it&#39;s a project inquiry,
            collaboration, or just a hello, feel free to reach out.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-yellow-400" />
              <span className="text-white font-semibold">
                contact@example.com
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-yellow-400" />
              <span className="text-white font-semibold">+880 1234 567890</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-yellow-400" />
              <span className="text-white font-semibold">
                Kochi, Kerala, India
              </span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/2 p-8 bg-black/30 backdrop-blur-md flex flex-col justify-center">
          <form className="space-y-4">
            <div>
              <label className="text-white font-semibold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full mt-2 p-3 rounded-lg bg-black/50 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="text-white font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full mt-2 p-3 rounded-lg bg-black/50 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="text-white font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows={5}
                className="w-full mt-2 p-3 rounded-lg bg-black/50 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
