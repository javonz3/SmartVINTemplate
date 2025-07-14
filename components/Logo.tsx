"use client";
import Link from "next/link";
import React from "react";

export const Logo = ({ 
  asLink = true, 
  showSubtitle = false, 
  variant = "default" 
}: { 
  asLink?: boolean;
  showSubtitle?: boolean;
  variant?: "default" | "hero" | "compact";
}) => {
  const logoContent = (
    <div className="flex items-center">
      {/* Logo Icon */}
      <div className="flex items-center mr-2">
        <div className="relative">
          <div className="h-6 w-7 bg-gradient-to-br from-ios-blue to-ios-teal rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-xs">VIN</span>
          </div>
        </div>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <span className={`font-bold ${
          variant === "hero" ? "text-xl" : "text-base"
        } text-black dark:text-white leading-tight`}>
          SmartVIN
        </span>
        {showSubtitle && (
          <span className={`${
            variant === "hero" ? "text-sm" : "text-xs"
          } text-ios-text-secondary font-medium leading-tight`}>
            AI-Powered Vehicle Valuation
          </span>
        )}
      </div>
    </div>
  );

  if (!asLink) {
    return (
      <div className="flex items-center relative z-20">
        {logoContent}
      </div>
    );
  }

  return (
    <Link
      href="/"
      className="flex items-center relative z-20 hover:opacity-80 transition-opacity duration-200"
    >
      {logoContent}
    </Link>
  );
};
