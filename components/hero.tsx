"use client";

import Balancer from "react-wrap-balancer";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import { Badge } from "./badge";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Link } from "next-view-transitions";
import { useState, useRef } from "react";

export const Hero = () => {
  const router = useRouter();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-32 lg:pt-0">
      {/* Background gradient */}
      <div className="absolute inset-0 ios-gradient-hero opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ios-background-light/20 to-ios-background-light/40" />
      
      {/* Floating elements background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-ios-blue/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-ios-teal/20 rounded-full blur-xl animate-pulse delay-300" />
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-ios-purple/20 rounded-full blur-xl animate-pulse delay-500" />
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-ios-orange/20 rounded-full blur-xl animate-pulse delay-700" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="mb-8"
        >
          <div className="glass-card inline-flex items-center px-6 py-3 rounded-full cursor-pointer hover:scale-105 transition-transform duration-300">
            <span className="text-ios-blue font-semibold text-sm mr-2">🚀</span>
            <span className="text-ios-text-light dark:text-ios-text-dark font-medium text-sm">
              Introducing SmartVIN - Your AI-Powered Vehicle Assistant
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.2 }}
          className="ios-h1 text-white font-sf-pro font-bold text-center mb-6 max-w-4xl"
        >
          <Balancer>
            Decode Your Vehicle&apos;s
            <span className="bg-gradient-to-r from-ios-teal to-ios-blue bg-clip-text text-transparent"> DNA </span>
            with AI
          </Balancer>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.4 }}
          className="ios-body text-white/90 text-center max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          <Balancer>
            Transform any VIN into comprehensive vehicle insights. Get instant access to
            specifications, history, market value, and maintenance recommendations
            powered by advanced AI technology.
          </Balancer>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-16 z-10"
        >
          <Button
            variant="primary"
            size="lg"
            className="bg-white text-ios-blue hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Free Analysis
          </Button>
          <Button
            variant="secondary"
            size="lg"
            as={Link}
            href="/contact"
            className="glass-card text-white border-white/20 hover:border-white/40 group"
          >
            <span>See Demo</span>
            <HiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </motion.div>

        {/* iPhone Mockup */}
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}
          className="relative ios-float will-change-transform"
        >
          <div className="relative">
            {/* iPhone Frame */}
            <div className="relative w-80 h-[600px] mx-auto">
              {/* iPhone outline */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl">
                <div className="absolute inset-2 bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Screen content */}
                  <div 
                    className="h-full flex flex-col relative"
                    style={{
                      backgroundImage: "url('/images/SmartVIN.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                    }}
                  >
                    {/* Background overlay for status bar readability */}
                    <div className="absolute inset-0 bg-black/10 rounded-[2.5rem]"></div>
                    <div className="relative z-10 h-full flex flex-col">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-white text-sm font-medium mb-8">
                      <span>9:41</span>
                      <span></span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-6 h-3 border border-white rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App content - removed to show only background image */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                      {/* Content removed to show only background image */}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-ios-blue/20 to-ios-teal/20 blur-xl scale-110 opacity-60"></div>
            </div>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6, delay: 1.2 }}
          className="mt-16 flex flex-col sm:flex-row items-center gap-8 text-white/70"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-sm">Trusted by 50,000+ users</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🔒</span>
            </div>
            <span className="text-sm">Bank-grade security</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">⚡</span>
            </div>
            <span className="text-sm">Instant results</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
