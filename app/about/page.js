"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skills } from "@/Component/Data";
import Link from "next/link";

const SkillCard = ({ skill }) => (
    <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="text-emerald-600 mb-4 flex items-center justify-center text-4xl">
            {skill.icon}
        </div>
        <CardTitle className="text-xl font-semibold text-center">{skill.name}</CardTitle>
        <CardContent className="mt-2 text-slate-600 text-center">
            {skill.description}
        </CardContent>
    </Card>
);

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-slate-800 font-sans ">

            {/* Hero Image */}
            <Image
                src="/aboutus.jpg"
                width={1200}
                height={500}
                alt="About Banner"
                className="w-full h-[40vh] md:h-[60vh] object-cover"
            />

            {/* About Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-12">
                <div className="w-full md:w-1/2">
                    <Image src="/favicon.jpg" width={500} height={500} alt="About" className="w-full object-cover rounded-lg" />
                </div>

                <section className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-extrabold">Hi,</h1>
                    <p className="mt-4 text-lg text-slate-600">
                        United Friends Organisation is a dedicated NGO working together to uplift communities through education, support, and social awareness. It strives to bring people together to create positive change and build a brighter, more inclusive future for everyone.
                    </p>
                </section>
            </div>

            {/* Why Choose Us Section */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 p-6 md:p-12">
                <section className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-extrabold">Why Choose Us?</h1>
                    <p className="mt-4 text-lg text-slate-600">
                        We believe in working with people, not just for them. Our approach is transparent, community-driven, and focused on real results. We involve youth, volunteers, and local communities to make every project meaningful and impactful. Choosing us means choosing unity, compassion, and long-term positive change in society.
                    </p>
                </section>

                <div className="w-full md:w-1/2">
                    <Image src="/doubt.jpg" width={500} height={500} alt="Why Choose Us" className="w-full object-cover rounded-lg" />
                </div>
            </div>

            {/* CTA */}
            <section className="bg-emerald-600 text-white py-16 px-6 md:px-12 text-center rounded-lg m-6 md:m-12">
                <h2 className="text-3xl md:text-4xl font-bold">Let&apos;s Connect!</h2>
                <p className="mt-4 max-w-xl mx-auto text-lg text-emerald-200">
                    We are always open to new opportunities and collaborations.
                </p>
                
                <Link href='/contact'>
                <Button variant="secondary" size="lg" className="mt-8">
                    Contact Us
                </Button>
                </Link>
            </section>
        </div>
    );
}
