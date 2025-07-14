"use client";
import Link from "next/link";
import React from "react";

export const Logo = ({ asLink = true }: { asLink?: boolean }) => {
  const logoContent = (
    <>
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
      <span className="font-medium text-black dark:text-white">SmartVIN</span>
    </>
  );

  if (!asLink) {
    return (
      <div className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20">
        {logoContent}
      </div>
    );
  }

  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
    >
      {logoContent}
    </Link>
  );
};
