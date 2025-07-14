import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Pricing } from "@/components/pricing";
import { PricingTable } from "./pricing-table";
import { Companies } from "@/components/companies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - SmartVIN",
  description:
    "SmartVIN offers comprehensive VIN analysis with flexible pricing plans. Choose from our simple pricing options to get instant vehicle insights, history reports, and AI-powered recommendations.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function PricingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
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
      
      {/* Main content */}
      <div className="relative z-10">
        <Container className="flex flex-col items-center justify-between pb-20">
          <div className="relative z-20 py-10 md:pt-40">
            <Heading as="h1" className="ios-h1 text-white font-bold mb-4">
              Simple Pricing for Smart Analysis
            </Heading>
            <Subheading className="text-center ios-body text-white/90 max-w-2xl mx-auto">
              SmartVIN offers a wide range of vehicle analysis services. Choose the plan
              that suits your needs and get started with comprehensive VIN insights instantly.
            </Subheading>
          </div>
          
          {/* Pricing Section */}
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            <div className="relative z-10">
              <Pricing />
            </div>
          </div>
          
          {/* Pricing Table */}
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            <div className="relative z-10">
              <PricingTable />
            </div>
          </div>
          
          {/* Companies Section */}
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            <div className="relative z-10">
              <Companies />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
