"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BeatLoader } from "react-spinners";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function QuizPage() {
  const { slug } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [quiz, setQuiz] = useState(null);


  useEffect(() => {
    async function fetchQuiz() {
      const res = await fetch(`/api/quiz/${slug}`);
      const data = await res.json();
      const found = data
      setQuiz(found);
    }
    fetchQuiz();
  }, [slug]);


  if (!quiz) return (
    <div className="flex justify-center items-center h-screen">
      <BeatLoader />
    </div>
  );


  const currentQuiz = quiz.questions[currentIndex];


  const handleSelect = (option) => {
    setSelected(option);
  };


  const handleNext = () => {
    if (selected) {
      if (selected === currentQuiz.answer) {
        setScore((prev) => prev + 1);
      }
    }
    setSelected(null);
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };


  const handlePrevious = () => {
    setSelected(null);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };


  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{quiz.title || "Quiz"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h2 className="text-lg font-medium">{currentQuiz.question}</h2>


          <div className="space-y-2">
            {currentQuiz.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(option)}
                className={`w-full text-left px-4 py-2 rounded border transition-all
                ${selected === option ? "border-blue-600 bg-blue-50" : "border-gray-300 hover:bg-gray-100"}`}
              >
                {option}
              </button>
            ))}
          </div>


          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={handlePrevious} disabled={currentIndex === 0}>
              Previous
            </Button>
            <Button onClick={handleNext} disabled={!selected}>
              {currentIndex === quiz.questions.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>


          <p className="text-sm text-gray-600 pt-2">
            Question {currentIndex + 1} of {quiz.questions.length} | Score: {score}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}