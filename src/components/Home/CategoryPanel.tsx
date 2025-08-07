interface CategoryPanelProps {
  onClose: () => void;
}

const categories = [
  {
    name: "Malayalam",
    image: "/categories/malayalam.jpg",
    link: "https://dulquer.com/malayalam-movies/",
  },
  {
    name: "Tamil",
    image: "/categories/tamil.jpg",
    link: "https://dulquer.com/tamil-movies/",
  },
  {
    name: "Telugu",
    image: "/categories/telugu.jpg",
    link: "https://dulquer.com/telugu-movies/",
  },
  {
    name: "Bollywood",
    image: "/categories/hindi.jpg",
    link: "https://dulquer.com/hindi-movies/",
  },
];

export default function CategoryPanel({ onClose }: CategoryPanelProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-40 flex flex-col md:flex-row bg-black text-white">
      {categories.map((cat, i) => (
        <a
          href={cat.link}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
          className="relative w-1/4 h-full overflow-hidden group"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
          <h2 className="absolute bottom-6 left-6 text-xl font-bold text-white z-10">
            {cat.name}
          </h2>
          <span className="absolute top-1/2 right-2 -translate-y-1/2 rotate-90 text-4xl text-white font-bold opacity-20 pointer-events-none select-none">
            {cat.name.toUpperCase()}
          </span>
        </a>
      ))}
    </div>
  );
}
