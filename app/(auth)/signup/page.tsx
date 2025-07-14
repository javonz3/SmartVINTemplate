import { SignupForm } from "@/components/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup - SmartVIN",
  description:
    "SmartVIN is a platform that provides comprehensive vehicle analysis through advanced AI technology. Get instant VIN decoding, vehicle history reports, and maintenance recommendations.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function SignupPage() {
  return <SignupForm />;
}
