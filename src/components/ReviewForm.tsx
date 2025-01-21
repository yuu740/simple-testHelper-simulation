import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Question } from "../interface/Question.interfaces";
import "../style/ReviewForm.css";
const ReviewForm: React.FC = () => {
  const location = useLocation();
  const questions: Question[] = location.state?.questions || [];

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (questions.length === 0) {
    return <p>No questions to review.</p>;
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Review Submitted");
    setIsSubmitted(true);
  };

  return (
    <div>
      {isSubmitted ? (
        <h2>Thank you for your time</h2>
      ) : (
        <form onSubmit={handleSubmitReview}>
          <h2>Review Questions</h2>
          {questions.map((question) => (
            <div className="review-div" key={question.id}>
              <p>
                <strong>Question {question.id}:</strong>
                {question.content}
              </p>
              <p>
                <strong>Score:</strong> {question.score}
              </p>
              <label>Comments:</label>
              <textarea placeholder="Enter your comment" />
              <label>
                Approve:
                <select>
                  <option value="false">Not Approved</option>
                  <option value="true">Approved</option>
                </select>
              </label>
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;
