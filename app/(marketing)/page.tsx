import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Background } from "@/components/background";
import { Features } from "@/components/features";
import { Companies } from "@/components/companies";
import { CTA } from "@/components/cta";
import { Pricing } from "@/components/pricing";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-ios-background-light dark:bg-ios-background-dark">
      {/* Background with iOS gradient */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ios-background-light via-white to-ios-background-light dark:from-ios-background-dark dark:via-gray-900 dark:to-ios-background-dark" />
        <Background />
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <Features />
        
        {/* Pricing Section */}
        <div className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ios-background-light/30 to-transparent dark:via-ios-background-dark/30" />
          <div className="relative z-10 ios-container">
            <div className="text-center mb-16">
              <Heading as="h2" className="ios-h2 text-ios-text-light dark:text-ios-text-dark mb-4">
                Simple Pricing for Smart Analysis
              </Heading>
              <Subheading className="ios-body text-ios-text-secondary max-w-2xl mx-auto">
                Choose the perfect plan for your vehicle analysis needs. All plans include 
                comprehensive VIN decoding, vehicle history, and AI-powered insights.
              </Subheading>
            </div>
            <Pricing />
          </div>
        </div>
        
        {/* Companies/Trust Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ios-background-light/50 to-transparent dark:via-ios-background-dark/50" />
          <Companies />
        </div>
        
        {/* Call to Action */}
        <div className="relative">
          <div className="absolute inset-0 h-full w-full overflow-hidden">
            <div className="absolute inset-0 ios-gradient-hero opacity-90" />
            <Background />
          </div>
          <CTA />
        </div>
      </div>
    </div>
  );
}
