"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CreateQuizPage() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], answer: "" }
  ]);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], answer: "" }
    ]);
  };

  const handleChangeQuestion = (index, value) => {
    const updated = [...questions];
    updated[index].question = value;
    setQuestions(updated);
  };

  const handleChangeOption = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  const handleAnswerChange = (qIndex, value) => {
    const updated = [...questions];
    updated[qIndex].answer = value;
    setQuestions(updated);
  };

  const handleSave = async () => {
    if (!title.trim()) return alert("Please enter quiz title");

    const formattedSlug = title.replace(/\s+/g, "-");

    const response = await fetch("/api/quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug: formattedSlug,
        title,
        questions
      })
    });

    const result = await response.json();
    if (response.ok) {
      alert("Quiz Created Successfully");
    } else {
      alert(result.error || "Error saving quiz");
    }
  };

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-6">Create Quiz</h1>

      <Card className="mb-6">
        <CardContent className="p-4 space-y-3">
          <Input
            placeholder="Quiz Title (e.g., Basics of GK)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </CardContent>
      </Card>

      {questions.map((q, qIndex) => (
        <Card key={qIndex} className="mb-6">
          <CardContent className="p-4 space-y-4">
            <Input
              placeholder={`Question ${qIndex + 1}`}
              value={q.question}
              onChange={(e) => handleChangeQuestion(qIndex, e.target.value)}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {q.options.map((opt, optIndex) => (
                <Input
                  key={optIndex}
                  placeholder={`Option ${optIndex + 1}`}
                  value={opt}
                  onChange={(e) =>
                    handleChangeOption(qIndex, optIndex, e.target.value)
                  }
                />
              ))}
            </div>

            <select
              className="border rounded p-2 w-full"
              value={q.answer}
              onChange={(e) => handleAnswerChange(qIndex, e.target.value)}
            >
              <option value="">Select Correct Answer</option>
              {q.options.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt || `Option ${i + 1}`}
                </option>
              ))}
            </select>
          </CardContent>
        </Card>
      ))}

      <Button variant="secondary" className="mr-3" onClick={handleAddQuestion}>
        Add Question
      </Button>

      <Button onClick={handleSave}>Save Quiz</Button>
    </div>
  );
}
