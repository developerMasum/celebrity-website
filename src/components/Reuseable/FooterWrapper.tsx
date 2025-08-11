// components/Reuseable/FooterWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  if (pathname === "/") return null; // Hide on home route
  return <Footer />;
}
