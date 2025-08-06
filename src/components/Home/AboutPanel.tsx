interface AboutPanelProps {
  onClose: () => void;
}

export default function AboutPanel({ onClose }: AboutPanelProps) {
  return (
    <div className="fixed top-0 right-0 w-full h-full z-50 flex bg-black text-white">
      <div className="w-1/2 h-full relative">
        <img
          src="/about/dq.jpg"
          alt="Dulquer Salmaan"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-1/2 h-full p-12 flex flex-col justify-center relative bg-[#141414]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-sm text-white hover:text-yellow-500"
        >
          ✕ CLOSE
        </button>

        <p className="text-sm text-yellow-400 uppercase tracking-widest mb-2">
          About Dulquer Salmaan
        </p>

        <h1 className="text-4xl font-bold mb-6">Dulquer Salmaan,</h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Known for his exceptional performances in Malayalam, Tamil, Telugu,
          and Hindi, Dulquer Salmaan is one of the best and most versatile
          actors in the Indian film industry.
        </p>

        <a
          href="https://en.wikipedia.org/wiki/Dulquer_Salmaan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 font-medium hover:underline flex items-center gap-1"
        >
          Read more →
        </a>
      </div>
    </div>
  );
}
