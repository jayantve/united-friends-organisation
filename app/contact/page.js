"use client";

import { MdEmail, MdAddCall, MdPerson } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://ik.imagekit.io/edvqduwc5k/captain-resturant/image-2')`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Contact Us
            </h1>
            <p className="mt-4 text-lg md:text-xl opacity-90">
              We&apos;d love to hear from you. Make a reservation or get in touch!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          <Card className="text-center shadow-sm">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <MdPerson className="text-primary text-3xl" />
              </div> 
              <CardTitle className="mt-4">Visit Us</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {process.env.NEXT_PUBLIC_NAME} <br />
              Plot 165,<br />
              Shakti Khand 2,<br />
              Indirapuram, Ghaziabad
            </CardContent>
          </Card>

          <Card className="text-center shadow-sm">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <MdAddCall className="text-primary text-3xl" />
              </div>
              <CardTitle className="mt-4">Call Us</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>Phone: +91 {process.env.NEXT_PUBLIC_MOBILE}</p>
              <p>Available 7 Days A Week</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-sm">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <FaDoorOpen className="text-primary text-3xl" />
              </div>
              <CardTitle className="mt-4">Hours</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Mon-Sun: 12:00 PM – 12:00 AM
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <Card className="shadow-sm">
              <CardHeader className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MdEmail className="text-primary text-2xl" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p><strong>General:</strong> {process.env.NEXT_PUBLIC_EMAIL_ID}</p>
                <p><strong>Reservations:</strong> {process.env.NEXT_PUBLIC_EMAIL_ID}</p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MdAddCall className="text-primary text-2xl" />
                </div>
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p><strong>Main Line:</strong> +91 {process.env.NEXT_PUBLIC_MOBILE}</p>
                <p><strong>Best Time:</strong> 12:00 PM - 12:00 AM</p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

    </div>
  );
}
