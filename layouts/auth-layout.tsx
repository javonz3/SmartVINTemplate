import { cn } from "@/lib/utils";
import Image from "next/image";
import { useId } from "react";
import { motion } from "framer-motion";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { FeaturedTestimonials } from "@/components/featured-testimonials";
import { Background } from "@/components/background";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Hero-style Background gradient */}
      <div className="absolute inset-0 ios-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
      
      {/* Floating elements background - same as hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-ios-blue/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-ios-teal/20 rounded-full blur-xl animate-pulse delay-300" />
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-ios-purple/20 rounded-full blur-xl animate-pulse delay-500" />
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-ios-orange/20 rounded-full blur-xl animate-pulse delay-700" />
      </div>
      
      {/* Background pattern */}
      <Background />
      
      {/* Content */}
      <div className="relative z-10 w-full min-h-screen grid grid-cols-1">
        {children}
      </div>
    </div>
  );
}
