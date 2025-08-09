"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ClientRouteLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  const texts = ["Movies", "Ads", "Photoshoots", "Production", "Fans"];
  const [textIndex, setTextIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (pathname !== prevPath) {
      setLoading(true);

      const timeout = setTimeout(() => {
        setLoading(false);
        setPrevPath(pathname);
        setTextIndex(0);
        setDirection(1);
      }, 2000); // 3 seconds loading

      return () => clearTimeout(timeout);
    }
  }, [pathname, prevPath]);

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setTextIndex((current) => {
        if (current === texts.length - 1) {
          setDirection(-1);
          return current - 1;
        } else if (current === 0) {
          setDirection(1);
          return current + 1;
        } else {
          return current + direction;
        }
      });
    }, 700);

    return () => clearInterval(interval);
  }, [loading, direction, texts.length]);

  // Height of one text item (adjust if you change font size)
  const itemHeight = 48; // px (roughly for text-5xl)

  if (loading) {
    return (
      <div
        className="fixed inset-0 bg-black flex items-center justify-center z-50 select-none"
        aria-live="polite"
      >
        <div className="text-white font-bold text-4xl font-mono flex items-center">
          <span className="text-yellow-500 text-5xl pr-4">[</span> Dulquer
          Salmaan{" "}
          <span
            className="text-yellow-500 overflow-hidden h-[48px] relative inline-block w-[220px] ml-2"
            aria-label={texts[textIndex]}
          >
            <div
              style={{
                transform: `translateY(-${textIndex * itemHeight}px)`,
                transition: "transform 0.5s ease",
              }}
            >
              {texts.map((text, i) => (
                <div
                  key={i}
                  style={{
                    height: `${itemHeight}px`,
                    lineHeight: `${itemHeight}px`,
                  }}
                >
                  {text}
                </div>
              ))}
            </div>
          </span>
          <span className="text-yellow-500 text-5xl pl-4">]</span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
