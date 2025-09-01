'use client';

import { MdEmail , MdAddCall , MdPerson } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";

import { useState } from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://ik.imagekit.io/edvqduwc5k/captain-resturant/image-2')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              We&apos;d love to hear from you. Make a reservation or get in touch!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MdPerson className="ri-map-pin-fill text-2xl text-amber-600" />
                <MdPerson className="ri-map-pin-fill text-2xl text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Us</h3>
              <p className="text-gray-600">
        {process.env.NEXT_PUBLIC_NAME} <br />
                Plot 165, <br />
                Shakti Khand 2,<br />
                Indirapuram, Ghaziabad
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MdAddCall className="ri-map-pin-fill text-2xl text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600">
                Phone:+91 {process.env.NEXT_PUBLIC_MOBILE} <br />
                Reservations: +91 {process.env.NEXT_PUBLIC_MOBILE} <br />
                Available 7 days a week
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaDoorOpen className="ri-map-pin-fill text-2xl text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hours</h3>
              <p className="text-gray-600">
                Mon-Thu: 12:00 PM  12:00 AM <br />
                Fri-Sat: 12:00 PM  12:00 AM <br />
                Sunday: 12:00 PM  12:00 AM 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form and Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md mb-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.83816040510573!2d77.37233450787637!3d28.647422973727206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb0077905a03%3A0xcccc96f40ddd355e!2sCaptain&#39;s%20Vintage%20Restro%20and%20Cafe!5e0!3m2!1sen!2sin!4v1754046789288!5m2!1sen!2sin" 
                  width="600" 
                  height="450" 
                  className="border-0 w-full lg:h-auto h-screen" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" />
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5 mr-3">
                      <i className="ri-parking-line text-amber-600"></i>
                    </div>
                    <span>Valet parking available ($15)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5 mr-3">
                      <i className="ri-wheelchair-line text-amber-600"></i>
                    </div>
                    <span>Wheelchair accessible</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5 mr-3">
                      <i className="ri-restaurant-line text-amber-600"></i>
                    </div>
                    <span>Private dining room available</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5 mr-3">
                      <i className="ri-wifi-line text-amber-600"></i>
                    </div>
                    <span>Free WiFi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              We&apos;re here to help with any questions or special requests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <MdEmail className="ri-mail-line text-xl text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">For general inquiries</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>General:</strong> {process.env.NEXT_PUBLIC_EMAIL_ID}
                </p>
                <p className="text-gray-700">
                  <strong>Reservations:</strong> {process.env.NEXT_PUBLIC_EMAIL_ID}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <MdAddCall className="ri-mail-line text-xl text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">Speak directly with our team</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Main Line:</strong> +91 {process.env.NEXT_PUBLIC_MOBILE}
                </p>
                <p className="text-gray-700">
                  <strong>Reservations:</strong> +91 {process.env.NEXT_PUBLIC_MOBILE}
                </p>
                <p className="text-gray-700">
                  <strong>Best Time to Call:</strong> 12:00 PM – 12:00 AM 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}