import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/context/theme-provider";
import { StagewiseToolbar } from "@stagewise/toolbar-next";
import ReactPlugin from "@stagewise-plugins/react";

export const metadata: Metadata = {
  title: "SmartVIN - AI-Powered Vehicle Analysis",
  description:
    "Transform any VIN into comprehensive vehicle insights with SmartVIN. Get instant access to specifications, history, market value, and AI-powered maintenance recommendations. Choose from flexible pricing plans for individuals, professionals, and enterprises.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            GeistSans.className,
            "bg-white dark:bg-black antialiased h-full w-full"
          )}
        >
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
            defaultTheme="light"
          >
            {children}
            <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
