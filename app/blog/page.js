"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BeatLoader } from "react-spinners";

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const res = await fetch("/api/blog");
      const data = await res.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Blog</h1>
        <ul className="space-y-6">
          {blogs.map((blog) => (
            <li
              key={blog.slug}
              className="p-6 rounded-lg bg-primary-foreground shadow-xl hover:shadow-md transition"
            >
              <Link href={`/blog/${blog.slug}`}>
                <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
                  {blog.slug.toUpperCase().replaceAll("-", " ")}
                </h2>
                <p className="text-gray-600">Click to read more  →</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}