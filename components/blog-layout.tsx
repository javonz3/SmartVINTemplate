"use client";

import { useRouter } from "next/navigation";
import { BlogWithSlug } from "@/lib/blog";
import { IconArrowLeft } from "@tabler/icons-react";
import { Container } from "./container";
import Image from "next/image";
import { Logo } from "./Logo";
import Link from "next/link";
import { format } from "date-fns";
import { Background } from "./background";

export function BlogLayout({
  blog,
  children,
}: {
  blog: BlogWithSlug;
  children: React.ReactNode;
}) {
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
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <div className="mb-8 pt-20">
              <Link
                href="/blog"
                className="glass-card inline-flex items-center gap-2 px-4 py-2 text-white/90 hover:text-white transition-colors duration-200"
              >
                <IconArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>

            {/* Blog header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <Logo asLink={false} />
                <div className="text-white/70 text-sm">
                  {format(new Date(blog.date), "MMMM dd, yyyy")}
                </div>
              </div>
              
              <h1 className="ios-h1 text-white font-bold mb-4">
                {blog.title}
              </h1>
              
              <p className="ios-body text-white/90 max-w-2xl">
                {blog.description}
              </p>
            </div>

            {/* Blog image */}
            {blog.image && (
              <div className="mb-12 glass-card p-4">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}

            {/* Blog content */}
            <div className="glass-card p-8 prose-ios max-w-none">
              {children}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
