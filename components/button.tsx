"use client";

import { cn } from "@/lib/utils";
// @ts-ignore
import React from "react";
// @ts-ignore
import { motion } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  as?: React.ElementType;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  // @ts-ignore
  ({
    children,
    className,
    variant = "primary",
    size = "md",
    isLoading = false,
    as: Component = "button",
    disabled,
    ...props
  }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-sf-pro font-semibold transition-all duration-300 ease-ios focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform";
    
    const variantStyles = {
      primary: "bg-ios-blue text-white hover:bg-ios-blue-dark shadow-ios-button hover:shadow-[0_8px_24px_rgba(0,122,255,0.4)] hover:scale-[1.02] active:scale-[0.98]",
      secondary: "glass-button text-ios-blue hover:text-ios-blue-dark border border-ios-border-light dark:border-ios-border-dark hover:border-ios-blue/30",
      glass: "glass-card text-ios-text-light dark:text-ios-text-dark hover:bg-white/90 dark:hover:bg-gray-800/90",
      outline: "border-2 border-ios-blue text-ios-blue hover:bg-ios-blue hover:text-white hover:scale-[1.02] active:scale-[0.98]"
    };
    
    const sizeStyles = {
      sm: "px-4 py-2 text-sm rounded-ios-button h-9",
      md: "px-6 py-3 text-base rounded-ios-button h-11",
      lg: "px-8 py-4 text-lg rounded-ios-button h-14"
    };
    
    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant as keyof typeof variantStyles],
      sizeStyles[size as keyof typeof sizeStyles],
      isLoading && "cursor-not-allowed",
      className
    );
    
    const buttonContent = (
      <>
        {isLoading && (
          <motion.div
            className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
        {children}
      </>
    );
    
    if (Component === "button") {
      // Exclude conflicting Framer Motion properties from HTML attributes
      const { 
        onDrag, 
        onDragStart, 
        onDragEnd, 
        onAnimationStart, 
        onAnimationEnd, 
        onAnimationIteration,
        ...htmlProps 
      } = props;
      return (
        <motion.button
          ref={ref}
          className={combinedClassName}
          disabled={disabled || isLoading}
          whileHover={{ scale: variant === "glass" ? 1.02 : 1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          {...htmlProps}
        >
          {buttonContent}
        </motion.button>
      );
    }
    
    return (
      <motion.div
        whileHover={{ scale: variant === "glass" ? 1.02 : 1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Component
          ref={ref}
          className={combinedClassName}
          {...props}
        >
          {buttonContent}
        </Component>
      </motion.div>
    );
  }
);

Button.displayName = "Button";

// iOS-specific button variants for common use cases
export const IOSButton = {
  Primary: (props: ButtonProps) => <Button variant="primary" {...props} />,
  Secondary: (props: ButtonProps) => <Button variant="secondary" {...props} />,
  Glass: (props: ButtonProps) => <Button variant="glass" {...props} />,
  Outline: (props: ButtonProps) => <Button variant="outline" {...props} />
};

// Export the original button interface for backward compatibility
export { Button as default };
