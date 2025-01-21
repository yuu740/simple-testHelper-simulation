import React from "react";
import { useNavigate } from "react-router-dom";

const CaseMakerForm = () => {
  const navigate = useNavigate();
  const handleNext = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    navigate("/questionform");
  };
  return (
    <div>
      <form onSubmit={handleNext}>
        <h2>Choose the Casemaker</h2>
        <label htmlFor="subjectId">Enter the Casemaker ID</label>
        <input type="text" id="subjectId" />
        <label htmlFor="subjectName">Enter the Casemaker Name</label>
        <input type="text" id="subjectName" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CaseMakerForm;
