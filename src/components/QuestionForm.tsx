import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/QuestionForm.css";

interface Question {
  id: number;
  type: "text";
  content: string;
  score: number;
}

const QuestionForm = () => {
  const location = useLocation();
  const casemakeName: string = location.state?.casemakeName || [];
  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, type: "text", content: "", score: 0 },
  ]);
  const navigate = useNavigate();

  const handleAddQuestion = () => {
    const newQuestion: Question = {
      id: questions.length + 1,
      type: "text",
      content: "",
      score: 0,
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleInputChange = (id: number, field: keyof Question, value: any) => {
    const updatedQuestions = questions.map((question) =>
      question.id === id ? { ...question, [field]: value } : question
    );
    setQuestions(updatedQuestions);
  };

  const handleRemoveQuestion = (id: number) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Submitted Questions:", questions);
    navigate("/reviewform", { state: { questions } });
  };

  return (
    <div style={{ padding: "20px", border: "1px solid blue" }}>
      <h3>Upload the Questions</h3>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div
            key={question.id}
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid lightgray",
              borderRadius: "5px",
            }}
          >
            <label>Upload Your Question, Casemaker {casemakeName}</label>
            <textarea
              value={question.content}
              onChange={(e) =>
                handleInputChange(question.id, "content", e.target.value)
              }
              placeholder="Enter your question"
              style={{
                display: "block",
                width: "100%",
                marginTop: "10px",
              }}
            />

            <label style={{ display: "block", marginTop: "10px" }}>
              Score for This Question:
            </label>
            <input
              type="number"
              value={question.score}
              onChange={(e) =>
                handleInputChange(question.id, "score", e.target.value)
              }
              style={{
                display: "inline-block",
                width: "50px",
                textAlign: "center",
                marginRight: "10px",
              }}
            />
            <button
              type="button"
              onClick={() => handleRemoveQuestion(question.id)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddQuestion}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          +
        </button>
        <button
          type="submit"
          style={{
            display: "block",
            marginTop: "20px",
            backgroundColor: "#008CBA",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
