"use client";

import * as React from "react";
import Link from "next/link";

import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

// Importing Shadcn UI components
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ModeToggle } from "./ModeToggler";

// Icons from Lucide React and React Icons
import { Menu } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Navigation links configuration
const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/quiz", label: "Quiz" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    return (
        <header className="client-side sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center px-4">
                {/* Logo or Site Title */}
                <div className="mr-4 md:flex">
                    <Link href="/" className="flex items-center space-x-2 font-bold text-lg">
                        United Friends Organisation
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-1 items-center justify-end space-x-6">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                            <Button variant="ghost" className="text-sm font-medium transition-colors hover:text-primary">
                                {link.label}
                            </Button>
                        </Link>
                    ))}
                    <ModeToggle />
                    <header className="flex justify-end items-center p-4 gap-4 h-16">
                        <SignedOut>
                            <SignInButton />
                            <SignUpButton>
                                <Button variant="ghost" className="text-sm font-medium transition-colors hover:text-primary">
                                    Sign Up
                                </Button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </header>
                </nav>

                {/* Mobile Navigation */}
                <div className="flex flex-1 items-center justify-end md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <ModeToggle />
                        <header className="flex justify-end items-center p-4 gap-4 h-16">
                            <SignedOut>
                                <SignInButton />
                                <SignUpButton>
                                    <Button variant="ghost" className="text-sm font-medium transition-colors hover:text-primary">
                                        Sign Up
                                    </Button>
                                </SignUpButton>
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </header>
                        <SheetContent side="left" className="pr-0">
                            <Link href="/" className="pl-4 mt-5">
                                <span className="font-bold">Shree Krishna FM Services</span>
                            </Link>
                            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                                <div className="flex flex-col space-y-3">
                                    {navLinks.map((link) => (
                                        <Link key={link.href} href={link.href}>
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                                <Separator className="my-4" />
                                {/* Additional mobile links or sections can be added here */}
                            </ScrollArea>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}