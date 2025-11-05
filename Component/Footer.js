// components/Footer.jsx
import * as React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

// Social media icons from React Icons
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// Data for navigation links
const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Quiz", href: "/quiz" },
      { name: "Contact Us", href: "/contact" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQs", href: "/faqs" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "Latest Blog",
    links: [
      { name: "Starting of United Friends Organisation", href: "/security-gaurd" },
      { name: "Plumber", href: "/plumber" },
      { name: "Electrician", href: "/electrician" },
      { name: "House Keeping", href: "/house-keeping" },
    ],
  },
];

const socialLinks = [
  { icon: FaFacebook, href: "https://www.facebook.com/shreekrishnafm", label: "Facebook" },
  { icon: FaWhatsapp, href: "https://wa.me/919650899278", label: "Twitter" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t">
      <div className="container py-12 px-4 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link href="/" className="font-bold text-xl">
              United Friends Organisation
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Building the future with modern and accessible web components.
            </p>
          </div>

          {/* Navigation Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-base font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media Links */}
          <div className="col-span-1">
            <h3 className="text-base font-semibold text-foreground mb-4">
              Social
            </h3>
            <ul className="flex space-x-4">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-muted"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p className="text-center md:text-left mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} United Friends Organisation. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}