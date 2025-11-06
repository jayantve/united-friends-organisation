"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BeatLoader } from "react-spinners";

export default function BlogListPage() {
  const [quizs, setQuizs] = useState([]);

  useEffect(() => {
    async function fetchQuizs() {
      const res = await fetch("/api/quiz");
      const data = await res.json();
      setQuizs(data);
    }
    fetchQuizs();
  }, []);

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Quizs</h1>
        <ul className="space-y-6">
          {quizs.map((quiz) => (
            <li
              key={quiz.slug}
              className="p-6 rounded-lg bg-primary-foreground shadow-xl hover:shadow-md transition"
            >
              <Link href={`/quiz/${quiz.slug}`}>
                <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
                  {quiz.title.toUpperCase().replaceAll("-", " ")}
                </h2>
                <p className="text-gray-600">Click to read more →</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}