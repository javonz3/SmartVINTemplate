import { Background } from "@/components/background";
import { Metadata } from "next";
import { FeaturedTestimonials } from "@/components/featured-testimonials";
import { cn } from "@/lib/utils";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { ContactForm } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us - SmartVIN",
  description:
    "Get in touch with SmartVIN for comprehensive vehicle analysis services. Our expert team is ready to help you with VIN decoding, vehicle history reports, and AI-powered automotive insights.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function ContactPage() {
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
      <div className="relative z-10 py-20 md:py-0 px-4 md:px-20">
        <div className="w-full min-h-screen grid grid-cols-1 relative overflow-hidden">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
