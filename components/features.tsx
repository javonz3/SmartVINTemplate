"use client";

import React from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Features = () => {
  const features = [
    {
      id: 1,
      title: "Instant VIN Decoding",
      description: "Get comprehensive vehicle information in seconds. Our AI analyzes VIN numbers to reveal specifications, features, and manufacturing details.",
      icon: "🔍",
      gradient: "from-ios-blue to-ios-teal",
      delay: 0.1
    },
    {
      id: 2,
      title: "Vehicle History Report",
      description: "Access detailed history including accidents, maintenance records, previous owners, and title information from multiple data sources.",
      icon: "📋",
      gradient: "from-ios-teal to-ios-purple",
      delay: 0.2
    },
    {
      id: 3,
      title: "Market Value Analysis",
      description: "Real-time pricing data and market trends to help you make informed decisions. Compare prices across different platforms and regions.",
      icon: "💰",
      gradient: "from-ios-purple to-ios-orange",
      delay: 0.3
    },
    {
      id: 4,
      title: "Smart Recommendations",
      description: "AI-powered maintenance suggestions, recall alerts, and performance optimization tips tailored to your specific vehicle.",
      icon: "🤖",
      gradient: "from-ios-orange to-ios-blue",
      delay: 0.4
    },
    {
      id: 5,
      title: "Mobile Scanner",
      description: "Use your phone camera to scan VIN barcodes instantly. Works in any lighting condition with advanced image recognition.",
      icon: "📱",
      gradient: "from-ios-blue to-ios-teal",
      delay: 0.5
    },
    {
      id: 6,
      title: "Secure & Private",
      description: "Bank-grade encryption protects your data. We never store personal information and all searches are completely anonymous.",
      icon: "🔒",
      gradient: "from-ios-teal to-ios-blue",
      delay: 0.6
    }
  ];

  return (
    <div className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-ios-background-light to-white dark:from-ios-background-dark dark:to-gray-900" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ios-blue/20 to-transparent" />
      
      <div className="relative z-10 ios-container">
        {/* Section Header */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heading as="h2" className="ios-h2 text-ios-text-light dark:text-ios-text-dark mb-4">
            Everything You Need to Know About Your Vehicle
          </Heading>
          <Subheading className="ios-body text-ios-text-secondary max-w-2xl mx-auto">
            Powered by advanced AI and comprehensive data sources, SmartVIN provides 
            the most accurate and detailed vehicle information available.
          </Subheading>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: feature.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card inline-flex items-center px-8 py-4 rounded-full">
            <span className="text-ios-text-light dark:text-ios-text-dark font-medium">
              Try SmartVIN free for 7 days
            </span>
            <div className="ml-4 w-2 h-2 bg-ios-blue rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FeatureCard = ({ feature }: { feature: any }) => {
  return (
    <div className="glass-card p-6 h-[280px] w-full max-w-[380px] mx-auto ios-card-hover group cursor-pointer">
      <div className="flex flex-col h-full justify-between">
        {/* Top section - Icon and Content */}
        <div className="flex flex-col">
          {/* Icon with gradient background */}
          <div className="mb-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <span className="text-xl">{feature.icon}</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg font-semibold text-ios-text-light dark:text-ios-text-dark mb-2 group-hover:text-ios-blue transition-colors duration-300 leading-tight">
              {feature.title}
            </h3>
            <p className="text-sm text-ios-text-secondary leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>

        {/* Bottom section - Hover indicator */}
        <div className="flex items-center text-ios-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
          <span className="text-xs font-medium">Learn more</span>
          <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// Alternative grid layout for larger screens
export const FeaturesGrid = () => {
  const gridFeatures = [
    {
      title: "Real-time Data",
      description: "Access the most current vehicle information from multiple verified sources.",
      icon: "⚡",
      className: "col-span-1 lg:col-span-2"
    },
    {
      title: "Global Coverage",
      description: "Support for vehicles from manufacturers worldwide.",
      icon: "🌍",
      className: "col-span-1"
    },
    {
      title: "API Integration",
      description: "Seamlessly integrate SmartVIN into your existing applications.",
      icon: "🔗",
      className: "col-span-1"
    },
    {
      title: "Advanced Analytics",
      description: "Deep insights and predictive analytics for vehicle performance and maintenance.",
      icon: "📊",
      className: "col-span-1 lg:col-span-2"
    }
  ];

  return (
    <div className="relative py-20 lg:py-32">
      <div className="ios-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {gridFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn("glass-card p-8 ios-card-hover", feature.className)}
            >
              <div className="flex items-start">
                <div className="w-12 h-12 bg-ios-gradient rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="ios-h3 text-ios-text-light dark:text-ios-text-dark font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="ios-body text-ios-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
