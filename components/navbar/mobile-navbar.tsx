"use client";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { Button } from "../button";
import { Logo } from "../Logo";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { Background } from "../background";

export const MobileNavbar = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();
  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
    };
  }, [open]);

  return (
    <>
      <div
        className={cn(
          "flex justify-between glass-navbar items-center w-full rounded-full px-4 py-3 transition duration-200 relative z-50",
          showBackground && "shadow-ios-navbar"
        )}
      >
        <Logo />
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200 touch-manipulation"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <IoIosMenu
            className="text-ios-text-light dark:text-ios-text-dark h-6 w-6"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex flex-col items-start justify-start overflow-hidden"
            style={{ 
              paddingTop: 'env(safe-area-inset-top)',
              paddingBottom: 'env(safe-area-inset-bottom)',
              paddingLeft: 'env(safe-area-inset-left)',
              paddingRight: 'env(safe-area-inset-right)'
            }}
          >
            {/* Hero-style Background gradient */}
            <div className="absolute inset-0 ios-gradient-hero opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
            
            {/* Floating elements background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-10 w-32 h-32 bg-ios-blue/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute top-40 right-20 w-24 h-24 bg-ios-teal/20 rounded-full blur-xl animate-pulse delay-300" />
              <div className="absolute bottom-40 left-20 w-28 h-28 bg-ios-purple/20 rounded-full blur-xl animate-pulse delay-500" />
              <div className="absolute bottom-20 right-10 w-20 h-20 bg-ios-orange/20 rounded-full blur-xl animate-pulse delay-700" />
            </div>
            
            {/* Background pattern */}
            <Background />
            
            {/* Content */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative z-10 w-full h-full flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between w-full px-6 py-6">
                <div className="flex items-center">
                  <div className="h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm mr-2" />
                  <span className="font-medium text-white text-lg">SmartVIN</span>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200 touch-manipulation"
                    aria-label="Close menu"
                  >
                    <IoIosClose className="h-8 w-8 text-white" />
                  </button>
                </div>
              </div>
              
              {/* Navigation Items */}
              <div className="flex flex-col items-start justify-start gap-4 px-6 flex-1 pt-8">
                {navItems.map((navItem: any, idx: number) => (
                  <motion.div 
                    key={`nav-item-${idx}`} 
                    className="w-full"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                  >
                    {navItem.children && navItem.children.length > 0 ? (
                      <div key={`nav-parent-${idx}`}>
                        {navItem.children.map((childNavItem: any, childIdx: number) => (
                          <Link
                            key={`nav-child-${idx}-${childIdx}`}
                            href={childNavItem.link}
                            onClick={() => setOpen(false)}
                            className="relative text-left block py-4 px-6 rounded-2xl glass-card bg-white/10 hover:bg-white/20 active:bg-white/30 transition-all duration-200 mb-3 touch-manipulation min-h-[60px] flex items-center"
                          >
                            <span className="text-xl font-medium text-white">
                              {childNavItem.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={`nav-link-${idx}`}
                        href={navItem.link}
                        onClick={() => setOpen(false)}
                        className="relative block py-4 px-6 rounded-2xl glass-card bg-white/10 hover:bg-white/20 active:bg-white/30 transition-all duration-200 w-full touch-manipulation min-h-[60px] flex items-center"
                      >
                        <span className="text-xl font-medium text-white">
                          {navItem.title}
                        </span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col w-full items-stretch gap-4 px-6 py-8 pt-16"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Button 
                  as={Link} 
                  href="/signup"
                  variant="primary"
                  size="lg"
                  onClick={() => setOpen(false)}
                  className="bg-white text-ios-blue hover:bg-gray-100 shadow-lg w-full min-h-[56px] touch-manipulation"
                >
                  Sign Up
                </Button>
                <Button 
                  variant="secondary" 
                  as={Link} 
                  href="/login"
                  size="lg"
                  onClick={() => setOpen(false)}
                  className="glass-card text-white border-white/20 hover:border-white/40 w-full min-h-[56px] touch-manipulation"
                >
                  Login
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
