"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  const loadQuizzes = async () => {
    const res = await fetch("/api/quiz");
    const data = await res.json();
    setQuizzes(data);
  };

  useEffect(() => {
    loadQuizzes();
  }, []);

  const handleDelete = async (slug) => {
    const res = await fetch(`/api/quiz/${slug}`, { method: "DELETE" });
    if (res.ok) {
      alert("Quiz deleted.");
      loadQuizzes();
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Quiz List</h1>
        <Link href="/admin/addQuiz">
          <Button>Create Quiz</Button>
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {quizzes.map((quiz) => (
          <Card key={quiz.slug}>
            <CardHeader>
              <h2 className="text-lg font-semibold capitalize">{quiz.title}</h2>
            </CardHeader>
            <CardContent className="flex gap-2">
              <Link href={`/admin/updateQuiz/${quiz.slug}`} className="flex-1">
                <Button className="w-full" variant="secondary">Update</Button>
              </Link>

              <Button
                className="flex-1"
                variant="destructive"
                onClick={() => handleDelete(quiz.slug)}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
