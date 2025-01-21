import React, { useState } from "react";

interface Question {
  id: number;
  type: "text" | "image";
  content: string | File | null;
  score: number;
}

interface ReviewFormProps {
  questions: Question[];
}

const ReviewForm: React.FC<ReviewFormProps> = ({ questions }) => {
  const [reviews, setReviews] = useState<
    { id: number; comment: string; approved: boolean }[]
  >(
    questions.map((question) => ({
      id: question.id,
      comment: "",
      approved: false,
    }))
  );

  const handleCommentChange = (id: number, value: string) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, comment: value } : review
      )
    );
  };

  const handleApprovalChange = (id: number, value: boolean) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, approved: value } : review
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reviews Submitted:", reviews);
    // Submit logic can be added here
  };

  return (
    <div style={{ padding: "20px", border: "1px solid green" }}>
      <h3>Review Uploaded Questions</h3>
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
            <p>
              <strong>Question {question.id}:</strong>
            </p>
            {question.type === "text" ? (
              <p>{question.content}</p>
            ) : (
              question.content && (
                <img
                  src={URL.createObjectURL(question.content as File)}
                  alt={`Question ${question.id}`}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              )
            )}
            <p>
              <strong>Score:</strong> {question.score}
            </p>
            <label>
              <strong>Comments:</strong>
            </label>
            <textarea
              value={
                reviews.find((review) => review.id === question.id)?.comment ||
                ""
              }
              onChange={(e) => handleCommentChange(question.id, e.target.value)}
              placeholder="Enter your comment here"
              style={{
                display: "block",
                width: "100%",
                marginTop: "10px",
              }}
            />
            <label style={{ marginTop: "10px", display: "block" }}>
              <strong>Approve:</strong>
            </label>
            <select
              value={
                reviews.find((review) => review.id === question.id)?.approved
                  ? "true"
                  : "false"
              }
              onChange={(e) =>
                handleApprovalChange(question.id, e.target.value === "true")
              }
              style={{
                marginTop: "5px",
                padding: "5px",
              }}
            >
              <option value="false">Not Approved</option>
              <option value="true">Approved</option>
            </select>
          </div>
        ))}
        <button
          type="submit"
          style={{
            marginTop: "20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Submit Reviews
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
