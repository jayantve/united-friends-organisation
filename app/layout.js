import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/Component/Footer";
import Navbar from "@/Component/Navbar";
import { ThemeProvider } from "@/components/theme-provider";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "United Frirends Organisation",
  description: "United Friends Organisation is a dedicated NGO working together to uplift communities through education, support, and social awareness. It strives to bring people together to create positive change and build a brighter, more inclusive future for everyone.",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
  );
}
