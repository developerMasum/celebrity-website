// "use client";

// import { useEffect, useRef, useState } from "react";

// const heroes = [HeroOne, HeroTwo, HeroThree];

// export default function ParentHero() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const scrollY = useMotionValue(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       scrollY.set(window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [scrollY]);

//   const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 1;
//   const heroSectionHeight = viewportHeight * heroes.length;
//   const totalScroll = heroSectionHeight;

//   const scrollProgress = useTransform(
//     scrollY,
//     [0, totalScroll],
//     [0, heroes.length],
//     { clamp: true }
//   );

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [progressBetween, setProgressBetween] = useState(0);

//   useEffect(() => {
//     const unsubscribe = scrollProgress.on("change", (value) => {
//       const floor = Math.min(Math.floor(value), heroes.length - 1);
//       const progress = value - floor;
//       setCurrentIndex(floor);
//       setProgressBetween(progress);
//     });
//     return () => unsubscribe();
//   }, [scrollProgress]);

//   const nextIndex = Math.min(currentIndex + 1, heroes.length - 1);

//   const CurrentHero = heroes[currentIndex];
//   const NextHero = heroes[nextIndex];

//   return (
//     <section
//       ref={containerRef}
//       className="relative"
//       style={{ height: `${heroes.length * 100}vh` }}
//     >
//       <div className="fixed inset-0 z-10">
//         {/* Current Hero */}
//         <motion.div
//           key={`hero-current-${currentIndex}`}
//           className="absolute inset-0 z-10"
//         >
//           <CurrentHero />
//         </motion.div>

//         {/* Next Hero */}
//         {nextIndex !== currentIndex && (
//           <motion.div
//             key={`hero-next-${nextIndex}`}
//             className="absolute inset-0 z-20"
//             style={{
//               transform: `translateY(${(1 - progressBetween) * 100}%)`,
//             }}
//           >
//             <NextHero />
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }
