"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Password from "./password";
import { Button } from "./button";
import { Logo } from "./Logo";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your name",
    })
    .min(1, "Please enter email"),
  email: z
    .string({
      required_error: "Please enter email",
    })
    .email("Please enter valid email")
    .min(1, "Please enter email"),
  company: z
    .string({
      required_error: "Please enter your company's name",
    })
    .min(1, "Please enter your company's name"),
  message: z
    .string({
      required_error: "Please enter your message",
    })
    .min(1, "Please enter your message"),
});

export type LoginUser = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<LoginUser>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: LoginUser) {
    try {
      console.log("submitted form", values);
    } catch (e) {}
  }

  const socials = [
    {
      title: "twitter",
      href: "https://twitter.com/mannupaaji",
      icon: (
        <IconBrandX className="h-5 w-5 text-muted dark:text-muted-dark hover:text-black" />
      ),
    },
    {
      title: "github",
      href: "https://github.com/manuarora700",
      icon: (
        <IconBrandGithub className="h-5 w-5 text-muted dark:text-muted-dark hover:text-black" />
      ),
    },
    {
      title: "linkedin",
      href: "https://linkedin.com/manuarora28",
      icon: (
        <IconBrandLinkedin className="h-5 w-5 text-muted dark:text-muted-dark hover:text-black" />
      ),
    },
  ];

  return (
    <Form {...form}>
      <div className="flex relative z-20 items-center w-full justify-center px-4 py-4 lg:py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          <div>
            <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-white">
              Contact Us
            </h1>
            <p className="mt-4 text-white/90 text-sm max-w-sm">
              Please reach out to us and we will get back to you at the speed of
              light.
            </p>
          </div>

          <div className="py-10">
            <div>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-white/90"
                      >
                        Full Name
                      </label>
                      <div className="mt-2">
                        <FormControl>
                          <input
                            id="name"
                            type="text"
                            autoComplete="name"
                            {...field}
                            className="glass-card block w-full rounded-md border-0 py-1.5 text-white placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-ios-blue sm:text-sm sm:leading-6"
                            placeholder="John Doe"
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-white/90"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <FormControl>
                          <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            {...field}
                            className="glass-card block w-full rounded-md border-0 py-1.5 text-white placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-ios-blue sm:text-sm sm:leading-6"
                            placeholder="john@company.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium leading-6 text-white/90"
                      >
                        Company
                      </label>
                      <div className="mt-2">
                        <FormControl>
                          <input
                            id="company"
                            type="text"
                            autoComplete="organization"
                            {...field}
                            className="glass-card block w-full rounded-md border-0 py-1.5 text-white placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-ios-blue sm:text-sm sm:leading-6"
                            placeholder="Company Inc."
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium leading-6 text-white/90"
                      >
                        Message
                      </label>
                      <div className="mt-2">
                        <FormControl>
                          <textarea
                            id="message"
                            rows={4}
                            {...field}
                            className="glass-card block w-full rounded-md border-0 py-1.5 text-white placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-ios-blue sm:text-sm sm:leading-6"
                            placeholder="Hi there, I'd like to talk about..."
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="flex w-full justify-center"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

            <div className="mt-10">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-transparent px-6 text-white/90">
                    Or connect with us on
                  </span>
                </div>
              </div>

              <div className="mt-6 flex gap-4 justify-center">
                {socials.map((social) => (
                  <Link
                    key={social.title}
                    href={social.href}
                    className="glass-card p-2 rounded-lg text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}
