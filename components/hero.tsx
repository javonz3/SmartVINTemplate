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
                                    <div className="h-full flex flex-col relative">
                    {/* SmartVIN App Interface */}
                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                      <div className="w-full h-full flex items-center justify-center">
                        <svg viewBox="15 0 250 600" className="w-full h-full" preserveAspectRatio="none" style={{filter: "brightness(0.95) contrast(1.1)"}}>
                        <defs>
                          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1C1C1E" />
                            <stop offset="100%" stopColor="#2C2C2E" />
                          </linearGradient>
                          <linearGradient id="card" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#2C2C2E" />
                            <stop offset="100%" stopColor="#3A3A3C" />
                          </linearGradient>
                          <linearGradient id="blue" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#007AFF" />
                            <stop offset="100%" stopColor="#5AC8FA" />
                          </linearGradient>
                        </defs>
                        
                        {/* Background */}
                        <rect width="280" height="600" fill="url(#bg)" rx="0"/>
                        
                        {/* Status Bar */}
                        <text x="20" y="25" fill="white" fontSize="14" fontWeight="600">9:41</text>
                        <text x="140" y="25" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">SmartVIN</text>
                        <rect x="240" y="18" width="20" height="10" rx="2" fill="none" stroke="white" strokeWidth="1"/>
                        <rect x="242" y="20" width="16" height="6" rx="1" fill="white"/>
                        
                        {/* Header Card */}
                        <rect x="20" y="45" width="240" height="70" rx="16" fill="url(#card)"/>
                        <text x="140" y="70" fill="white" fontSize="20" fontWeight="700" textAnchor="middle">SmartVIN</text>
                        <text x="140" y="90" fill="#E5E5E7" fontSize="12" fontWeight="500" textAnchor="middle">AI-Powered Vehicle Valuation</text>
                        
                        {/* Plan Status */}
                        <rect x="20" y="130" width="240" height="40" rx="12" fill="#2C2C2E" stroke="#48484A" strokeWidth="1"/>
                        <circle cx="45" cy="150" r="10" fill="#FF9F00"/>
                        <text x="45" y="155" fill="white" fontSize="12" textAnchor="middle">⚡</text>
                        <text x="65" y="145" fill="white" fontSize="13" fontWeight="600">3/3 free lookups</text>
                        <text x="65" y="158" fill="#8E8E93" fontSize="11">Upgrade for unlimited access</text>
                        <rect x="210" y="138" width="30" height="24" rx="12" fill="url(#blue)"/>
                        <text x="225" y="152" fill="white" fontSize="11" fontWeight="600" textAnchor="middle">Pro</text>
                        
                        {/* Vehicle Information */}
                        <rect x="20" y="185" width="240" height="350" rx="16" fill="url(#card)"/>
                        <text x="35" y="210" fill="white" fontSize="18" fontWeight="700">Vehicle Information</text>
                        
                        {/* VIN Number */}
                        <text x="35" y="235" fill="white" fontSize="14" fontWeight="600">VIN Number</text>
                        <rect x="35" y="245" width="180" height="32" rx="8" fill="#1C1C1E" stroke="#48484A" strokeWidth="1"/>
                        <text x="45" y="265" fill="#8E8E93" fontSize="12">Enter 17-digit VIN</text>
                        <rect x="225" y="245" width="32" height="32" rx="8" fill="url(#blue)"/>
                        <text x="241" y="265" fill="white" fontSize="14" textAnchor="middle">📷</text>
                        
                        {/* Mileage */}
                        <text x="35" y="300" fill="white" fontSize="14" fontWeight="600">Mileage</text>
                        <rect x="35" y="310" width="210" height="32" rx="8" fill="#1C1C1E" stroke="#48484A" strokeWidth="1"/>
                        <text x="45" y="330" fill="#8E8E93" fontSize="12">Enter current mileage</text>
                        
                        {/* Vehicle Condition */}
                        <text x="35" y="365" fill="white" fontSize="14" fontWeight="600">Vehicle Condition</text>
                        <rect x="35" y="375" width="50" height="24" rx="12" fill="#48484A"/>
                        <text x="60" y="390" fill="white" fontSize="11" textAnchor="middle">Excellent</text>
                        <rect x="95" y="375" width="35" height="24" rx="12" fill="url(#blue)"/>
                        <text x="112.5" y="390" fill="white" fontSize="11" textAnchor="middle">Good</text>
                        <rect x="140" y="375" width="30" height="24" rx="12" fill="#48484A"/>
                        <text x="155" y="390" fill="white" fontSize="11" textAnchor="middle">Fair</text>
                        <rect x="180" y="375" width="30" height="24" rx="12" fill="#48484A"/>
                        <text x="195" y="390" fill="white" fontSize="11" textAnchor="middle">Poor</text>
                        
                        {/* Accident History */}
                        <text x="35" y="425" fill="white" fontSize="14" fontWeight="600">Accident History</text>
                        <rect x="35" y="435" width="35" height="24" rx="12" fill="url(#blue)"/>
                        <text x="52.5" y="450" fill="white" fontSize="11" textAnchor="middle">None</text>
                        <rect x="80" y="435" width="35" height="24" rx="12" fill="#48484A"/>
                        <text x="97.5" y="450" fill="white" fontSize="11" textAnchor="middle">Minor</text>
                        <rect x="125" y="435" width="50" height="24" rx="12" fill="#48484A"/>
                        <text x="150" y="450" fill="white" fontSize="11" textAnchor="middle">Moderate</text>
                        
                        {/* ZIP Code */}
                        <text x="35" y="485" fill="white" fontSize="14" fontWeight="600">ZIP Code (Optional)</text>
                        <rect x="35" y="495" width="210" height="32" rx="8" fill="#1C1C1E" stroke="#48484A" strokeWidth="1"/>
                        <circle cx="50" cy="511" r="6" fill="#8E8E93"/>
                        <text x="50" y="515" fill="white" fontSize="10" textAnchor="middle">📍</text>
                        <text x="65" y="515" fill="#8E8E93" fontSize="12">Enter ZIP for local pricing</text>
                        
                        {/* Bottom Navigation */}
                        <rect x="0" y="520" width="280" height="50" fill="#1C1C1E"/>
                        <line x1="0" y1="520" x2="280" y2="520" stroke="#48484A" strokeWidth="0.5"/>
                        
                        {/* VIN Lookup Active */}
                        <circle cx="50" cy="540" r="14" fill="url(#blue)"/>
                        <text x="50" y="545" fill="white" fontSize="12" textAnchor="middle">🔍</text>
                        <text x="50" y="560" fill="#007AFF" fontSize="9" fontWeight="600" textAnchor="middle">VIN Lookup</text>
                        
                        {/* Other Nav Items */}
                        <text x="100" y="545" fill="#8E8E93" fontSize="14" textAnchor="middle">🕐</text>
                        <text x="100" y="560" fill="#8E8E93" fontSize="9" textAnchor="middle">History</text>
                        
                        <text x="150" y="545" fill="#8E8E93" fontSize="14" textAnchor="middle">📊</text>
                        <text x="150" y="560" fill="#8E8E93" fontSize="9" textAnchor="middle">Analytics</text>
                        
                        <text x="200" y="545" fill="#8E8E93" fontSize="14" textAnchor="middle">☰</text>
                        <text x="200" y="560" fill="#8E8E93" fontSize="9" textAnchor="middle">More</text>
                        
                        {/* Home Indicator */}
                        <rect x="120" y="575" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.6)"/>
                      </svg>
                        </div>
                    </div>
                    <div className="relative z-10 h-full flex flex-col">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-white text-sm font-medium mb-8">
                      <span></span>
                      <span></span>
                      <div className="flex items-center gap-1">
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
