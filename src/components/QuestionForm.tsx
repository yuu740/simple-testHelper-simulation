import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/QuestionForm.css";
import { Question } from "../interface/Question.interfaces";

const QuestionForm = () => {
  const location = useLocation();
  const casemakeName: string = location.state?.casemakeName;
  const subjectName: string = location.state?.subjectName;
  const duration: number = location.state?.duration;
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
    <div>
      <form onSubmit={handleSubmit}>
        <h2>
          Make the Question for {subjectName} subject with durations {duration}{" "}
          minutes, Casemaker {casemakeName}
        </h2>
        {questions.map((question) => (
          <div
            className="question-div"
            key={question.id}
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid lightgray",
              borderRadius: "5px",
            }}
          >
            <textarea
              value={question.content}
              onChange={(e) =>
                handleInputChange(question.id, "content", e.target.value)
              }
              placeholder="Enter your question"
            />
            <div className="score-div">
              <label>Score for This Question:</label>
              <input
                type="number"
                value={question.score}
                onChange={(e) =>
                  handleInputChange(question.id, "score", e.target.value)
                }
              />
            </div>

            <button
              className="remove-button"
              type="button"
              onClick={() => handleRemoveQuestion(question.id)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          className="add-button"
          type="button"
          onClick={handleAddQuestion}
        >
          +
        </button>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
