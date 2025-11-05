"use client"

import React from "react"
import { FaPeopleGroup , FaHandsHoldingChild  } from "react-icons/fa6"
import { GiHumanPyramid  } from "react-icons/gi"

// shadcn imports
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
    name: "Jane Doe",
    prof: "CEO, Tech Solutions",
    desc: "This platform has completely transformed my workflow. The ease of use and powerful features are unmatched!",
  },
  {
    name: "John Smith",
    prof: "Founder, Creative Agency",
    desc: "I was able to launch my new website in record time. The tools are intuitive and the results are stunning.",
  },
]

const features = [
  {
    svg: <FaPeopleGroup className="w-6 h-6" />,
    name: "Community Development Programs",
    desc: "Works to improve living conditions through education and support activities.",
  },
  {
    svg: <GiHumanPyramid className="w-6 h-6" />,
    name: "Youth Empowerment",
    desc: "Encourages young people to develop skills and become responsible leaders.",
  },
  {
    svg: <FaHandsHoldingChild className="w-6 h-6" />,
    name: "Collaboration and Volunteering",
    desc: "Promotes active community participation and collaboration.",
  },
]



export default function App() {
  
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans min-h-screen w-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[75vh] text-center p-4 md:p-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
          United Friends Organisation
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          United Friends Organisation is a dedicated NGO working together to uplift communities through education, support, and social awareness. It strives to bring people together to create positive change and build a brighter, more inclusive future for everyone.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-slate-800">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 bg-slate-50 dark:bg-slate-800 min-h-[85vh]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Powerful Features
          </h2>
          <p className="mt-4 text-center max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Discover how our platform can help you streamline your workflow and achieve your goals faster.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((item) => (
              <Card
                key={item.name}
                className="transition-shadow duration-300 hover:shadow-xl dark:bg-slate-900"
              >
                <CardHeader className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
                    {item.svg}
                  </div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
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
      <section className="py-16 px-4 md:px-8 min-h-[85vh]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Users Say</h2>
          <p className="mt-4 text-center max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Don&apos;t just take our word for it. Hear from our satisfied customers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((item) => (
              <Card
                key={item.name}
                className="bg-slate-50 dark:bg-slate-800 shadow-md border-none"
              >
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


      {/* Final CTA Section */}
      <section className=" py-16 px-4 md:px-8 text-center rounded-lg m-4 md:m-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to get started?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-foreground">
            Join thousands of satisfied users and elevate your workflow today.
          </p>
          <div className="mt-8">
            <Button variant="secondary" size="lg" className="bg-emerald-500">
              Sign Up Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}