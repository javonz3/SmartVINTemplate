"use client";

import { Logo } from "../Logo";
import { Button } from "../button";
import { NavBarItem } from "./navbar-item";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "next-view-transitions";

type Props = {
  navItems: {
    link: string;
    title: string;
    target?: "_blank";
  }[];
};

export const DesktopNavbar = ({ navItems }: Props) => {
  const { scrollY } = useScroll();
  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 50) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });

  return (
    <motion.div
      className={cn(
        "w-full h-16 flex items-center justify-between px-6 rounded-2xl transition-all duration-300 ease-ios relative z-100",
        showBackground ? "glass-navbar shadow-ios-navbar" : "bg-transparent"
      )}
      animate={{
        backdropFilter: showBackground ? "blur(8px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Background overlay for better contrast */}
      <AnimatePresence>
        {showBackground && (
          <motion.div
            key="navbar-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-white/80 dark:bg-black/80 rounded-2xl backdrop-blur-ios-nav"
          />
        )}
      </AnimatePresence>

      {/* Left side - Logo and Navigation */}
      <div className="flex items-center gap-8 relative z-10">
        <Logo />
                 <nav className="hidden md:flex items-center gap-2">
           {navItems.map((item) => (
             <div key={item.title}>
               <NavBarItem
                 href={item.link}
                 target={item.target}
                 className="px-4 py-2 rounded-xl text-ios-text-light dark:text-ios-text-dark hover:bg-ios-blue/10 hover:text-ios-blue transition-all duration-200 font-medium"
               >
                 {item.title}
               </NavBarItem>
             </div>
           ))}
         </nav>
      </div>

      {/* Right side - Auth buttons */}
      <div className="flex items-center gap-3 relative z-10">
        {/* Login Button */}
        <Button
          variant="secondary"
          size="sm"
          as={Link}
          href="/login"
          className="hidden sm:flex glass-button text-ios-text-light dark:text-ios-text-dark hover:text-ios-blue border-ios-border-light dark:border-ios-border-dark"
        >
          Login
        </Button>
        
        {/* Sign Up Button */}
        <Button
          variant="primary"
          size="sm"
          as={Link}
          href="/signup"
          className="bg-ios-blue hover:bg-ios-blue-dark text-white shadow-ios-button"
        >
          Sign Up
        </Button>
      </div>
    </motion.div>
  );
};

// Enhanced navbar item component for iOS styling
export const IOSNavbarItem = ({
  href,
  children,
  target,
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "relative px-4 py-2 rounded-xl text-ios-text-light dark:text-ios-text-dark font-medium transition-all duration-200 hover:bg-ios-blue/10 hover:text-ios-blue active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
