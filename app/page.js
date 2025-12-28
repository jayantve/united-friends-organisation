"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaPeopleGroup, FaHandsHoldingChild } from "react-icons/fa6"
import { GiHumanPyramid } from "react-icons/gi"
import pic from '@/public/favicon.ico'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const testimonials = [
  {
    name: "Suryansh Singh Kandari",
    prof: "Student",
    desc: "Their initiatives have uplifted families in our region. Truly impactful work!",
  },
  {
    name: "Rahul Mehta",
    prof: "Social Worker",
    desc: "A wonderful organisation that focuses relentlessly on grassroots development.",
  },
]

const features = [
  {
    svg: <FaPeopleGroup className="w-6 h-6" />,
    name: "Community Development Programs",
    desc: "Improving living conditions through structured education and support programs.",
  },
  {
    svg: <GiHumanPyramid className="w-6 h-6" />,
    name: "Youth Empowerment",
    desc: "Providing skill-building opportunities to help the youth become future leaders.",
  },
  {
    svg: <FaHandsHoldingChild className="w-6 h-6" />,
    name: "Volunteer Collaboration",
    desc: "Connecting people who want to make a positive impact in society.",
  },
]

export default function App() {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans min-h-screen w-full overflow-x-hidden mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[75vh] text-center p-4 md:p-8 w-full max-w-6xl mx-auto overflow-hidden">
      <div className=" md:hidden">
        <Image src={pic} height={64} width={64} alt="logo" className="rounded-full mx-2 flex size-40" />
      </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
          United Friends Organisation
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          United Friends Organisation is committed to uplifting communities through education, support, and social awareness.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/about">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto">
              Get Started
            </Button>
          </Link>

          <Link href="/blog">
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-slate-800 w-full sm:w-auto"
            >
              Read Blogs
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 bg-slate-50 dark:bg-slate-800 min-h-[85vh] overflow-hidden w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Powerful Features</h2>
          <p className="mt-4 text-center max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Explore how we help communities grow stronger.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((item) => (
              <Card key={item.name} className="transition-shadow duration-300 hover:shadow-xl dark:bg-slate-900">
                <CardHeader className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
                    {item.svg}
                  </div>
                  <CardTitle className="text-lg text-center">{item.name}</CardTitle>
                  <CardDescription className="text-center text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 min-h-[85vh] overflow-hidden w-full">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What People Say</h2>
          <p className="mt-4 text-center max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Inspiring words from community contributors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((item) => (
              <Card key={item.name} className="bg-slate-50 dark:bg-slate-800 shadow-md border-none">
                <CardContent className="p-8">
                  <p className="text-lg italic text-slate-700 dark:text-slate-300">{item.desc}</p>
                  <div className="mt-4 flex flex-col items-center">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.prof}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 text-center rounded-lg m-4 md:m-8 overflow-hidden w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to attempt a Quiz?</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-foreground">
            Become part of a movement creating positive change.
          </p>

          <div className="mt-8">
            <Link href="/quiz">
              <Button variant="secondary" size="lg" className="bg-emerald-500 w-full sm:w-auto">
                Quiz
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
