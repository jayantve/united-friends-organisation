'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
              {process.env.NEXT_PUBLIC_NAME}
            </h3>
            <p className="text-gray-300 mb-4">
              Experience authentic Italian cuisine in a warm, welcoming atmosphere. 
              Fresh ingredients, traditional recipes, and modern presentation.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full cursor-pointer hover:bg-amber-700 transition-colors">
                <i className="ri-facebook-fill text-white"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full cursor-pointer hover:bg-amber-700 transition-colors">
                <i className="ri-instagram-fill text-white"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full cursor-pointer hover:bg-amber-700 transition-colors">
                <i className="ri-twitter-fill text-white"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Thursday: 11:00 AM - 10:00 PM</li>
              <li>Friday - Saturday: 11:00 AM - 11:00 PM</li>
              <li>Sunday: 12:00 PM - 9:00 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-fill text-amber-500"></i>
                </div>
                <span>123 Main Street, Downtown, NY 10001</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-phone-fill text-amber-500"></i>
                </div>
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-mail-fill text-amber-500"></i>
                </div>
                <span>info@bellavista.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="main-component border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {process.env.NEXT_PUBLIC_NAME} Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}