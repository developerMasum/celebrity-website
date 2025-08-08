import React from "react";

interface MovieCardProps {
  imageUrl: string;
  title: string;
  date: string;
  likes: number;
  comments: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  imageUrl,
  title,
  date,
  likes,
  comments,
}) => (
  <div className="bg-black rounded-lg overflow-hidden shadow-lg">
    <div
      className="w-full h-72 bg-center bg-cover"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-yellow-500 mt-1">{date}</p>
    </div>
    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-800 text-gray-300 text-sm">
      <span>❤ {likes} likes</span>
      <span>💬 {comments > 0 ? `${comments} Comments` : "No Comments"}</span>
    </div>
  </div>
);

export default MovieCard;
