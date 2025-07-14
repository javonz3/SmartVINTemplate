import { type Metadata } from "next";
import { getAllBlogs } from "@/lib/blog";
import { Background } from "@/components/background";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { BlogCard } from "@/components/blog-card";

export const metadata: Metadata = {
  title: "Blog - SmartVIN",
  description:
    "SmartVIN provides comprehensive insights into vehicle analysis, VIN decoding, and automotive AI technology. Discover expert articles, tips, and guides to maximize your vehicle knowledge.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default async function ArticlesIndex() {
  let blogs = await getAllBlogs();

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
              SmartVIN Blog
            </Heading>
            <Subheading className="text-center ios-body text-white/90 max-w-2xl mx-auto">
              Discover insightful resources and expert advice about vehicle analysis,
              VIN decoding, and automotive technology to enhance your knowledge.
            </Subheading>
          </div>

          {/* Featured Blog Posts */}
          <div className="relative w-full mb-10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-20 w-full">
              {blogs.slice(0, 2).map((blog, index) => (
                <BlogCard blog={blog} key={blog.title + index} />
              ))}
            </div>
          </div>

          {/* Additional Blog Posts */}
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-20 w-full">
              {blogs.slice(2).map((blog, index) => (
                <BlogCard blog={blog} key={blog.title + index} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
