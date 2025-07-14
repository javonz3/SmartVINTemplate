import { LoginForm } from "@/components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - SmartVIN",
  description:
    "SmartVIN is a platform that provides comprehensive vehicle analysis through advanced AI technology. Get instant VIN decoding, vehicle history reports, and maintenance recommendations.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function LoginPage() {
  return <LoginForm />;
}
