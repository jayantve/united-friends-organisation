"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BeatLoader } from "react-spinners";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      const res = await fetch("/api/blog");
      const data = await res.json();
      const found = data.find((b) => b.slug === slug);
      setBlog(found);
    }
    fetchBlog();
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <BeatLoader />
      </div>
    );
  }

  return (
    <section className="min-h-screen">
      <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
    </section>
  );
}