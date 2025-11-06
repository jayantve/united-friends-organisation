"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EditQuiz({ params }) {
  const { slug } = params;
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const loadQuiz = async () => {
      const res = await fetch(`/api/quiz/${slug}`);
      const data = await res.json();
      setTitle(data.title);
      setQuestions(data.questions);
    };
    loadQuiz();
  }, [slug]);

  const updateQuestion = (index, value) => {
    const updated = [...questions];
    updated[index].question = value;
    setQuestions(updated);
  };

  const updateOption = (qIndex, oIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

  const updateAnswer = (qIndex, value) => {
    const updated = [...questions];
    updated[qIndex].answer = value;
    setQuestions(updated);
  };

  const save = async () => {
    await fetch(`/api/quiz/${slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, questions }),
    });
    alert("Quiz Updated");
  };

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-6">Edit Quiz</h1>

      <Card className="mb-6">
        <CardContent className="p-4">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </CardContent>
      </Card>

      {questions.map((q, i) => (
        <Card key={i} className="mb-6">
          <CardContent className="p-4 space-y-4">
            <Input
              value={q.question}
              onChange={(e) => updateQuestion(i, e.target.value)}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {q.options.map((opt, oi) => (
                <Input
                  key={oi}
                  value={opt}
                  onChange={(e) => updateOption(i, oi, e.target.value)}
                />
              ))}
            </div>

            <select
              className="border rounded p-2 w-full"
              value={q.answer}
              onChange={(e) => updateAnswer(i, e.target.value)}
            >
              <option>Select Answer</option>
              {q.options.map((opt, oi) => (
                <option key={oi} value={opt}>
                  {opt || `Option ${oi + 1}`}
                </option>
              ))}
            </select>
          </CardContent>
        </Card>
      ))}

      <Button onClick={save}>Save Changes</Button>
    </div>
  );
}
