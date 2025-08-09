"use client";

import { useState, useEffect } from "react";
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
      }, 3000); // 3 seconds loading

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

  if (loading) {
    return (
      <div
        className="fixed inset-0 bg-black flex items-center justify-center z-50 select-none"
        aria-live="polite"
      >
        <p className="text-white font-bold text-4xl font-mono">
          [ Dulquer Salmaan <span>{texts[textIndex]}</span> ]
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
