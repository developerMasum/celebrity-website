// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/mousewheel";
// import { Pagination, Mousewheel } from "swiper/modules";
// import Image from "next/image";
// import { Fans } from "@/lib/mockData";
// import { motion } from "framer-motion";

// export default function FansSlider() {
//   return (
//     <div className="w-full h-screen">
//       <Swiper
//         direction="vertical"
//         slidesPerView={1}
//         mousewheel
//         pagination={{ clickable: true }}
//         modules={[Pagination, Mousewheel]}
//         className="w-full h-full"
//       >
//         {Array.from({ length: Math.ceil(Fans.length / 2) }).map((_, i) => {
//           const leftFan = Fans[i * 2];
//           const rightFan = Fans[i * 2 + 1];

//           return (
//             <SwiperSlide key={i}>
//               <div className="flex w-full h-full">
//                 {/* Left */}
//                 {leftFan && (
//                   <motion.div
//                     initial={{ opacity: 0, x: -50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                     className={`w-1/2 flex flex-col justify-between items-center p-6 ${leftFan.bg}`}
//                   >
//                     <div
//                       className={`flex items-center justify-center gap-4 text-4xl font-bold ${leftFan.textColor}`}
//                     >
//                       <span className="opacity-20 text-6xl">{leftFan.id}</span>
//                       <span>{leftFan.name}</span>
//                     </div>

//                     <div className="flex-1 flex items-center justify-center w-[450px] h-[600px]">
//                       <Image
//                         src={leftFan.img}
//                         alt={leftFan.name}
//                         width={450}
//                         height={600}
//                       />
//                     </div>

//                     <button
//                       className={`mt-6 px-6 py-2 border ${leftFan.btnBorder} ${leftFan.btnText} hover:bg-[#d3a262] hover:text-white transition`}
//                     >
//                       FAN&#39;S INSTAGRAM
//                     </button>
//                   </motion.div>
//                 )}

//                 {rightFan && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                     className={`w-1/2 flex flex-col justify-between items-center p-6 ${rightFan.bg}`}
//                   >
//                     {/* Top */}
//                     <div
//                       className={`flex items-center justify-center gap-4 text-4xl font-bold ${rightFan.textColor}`}
//                     >
//                       <span className="opacity-20 text-6xl">{rightFan.id}</span>
//                       <span>{rightFan.name}</span>
//                     </div>

//                     <div className="flex-1 flex items-center justify-center w-[450px] h-[600px]">
//                       <Image
//                         src={rightFan.img}
//                         alt={rightFan.name}
//                         width={450}
//                         height={600}
//                       />
//                     </div>

//                     <button
//                       className={`mt-6 px-6 py-2 border ${rightFan.btnBorder} ${rightFan.btnText} hover:bg-[#d3a262] hover:text-white transition`}
//                     >
//                       FAN&#39;S INSTAGRAM
//                     </button>
//                   </motion.div>
//                 )}
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// }
