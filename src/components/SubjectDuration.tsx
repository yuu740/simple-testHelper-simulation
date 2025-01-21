import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SubjectDuration = () => {
  const navigate = useNavigate();
  const handleNext = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    navigate("/casemakeform");
  };
  return (
    <div>
      <form onSubmit={handleNext}>
        <h2>Determine duration for this subject</h2>
        <label htmlFor="subjectId">Enter the Subject ID</label>
        <input type="text" id="subjectId" />
        <label htmlFor="subjectName">Enter the Subject Name</label>
        <input type="text" id="subjectName" />
        <label htmlFor="duration">Enter the Duration (In Minute)</label>
        <input type="number" id="duration" />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default SubjectDuration;
