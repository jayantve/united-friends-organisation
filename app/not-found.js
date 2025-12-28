"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export  default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-foreground">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have
          been removed or doesn&apos;t exist.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-4">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}