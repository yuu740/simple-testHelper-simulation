import React from "react";

const CaseMakerForm = () => {
  return (
    <div>
      <h2>Choose the CaseMaker</h2>
      <label htmlFor="subjectId">Enter the Subject ID</label>
      <input type="text" id="subjectId" />
      <label htmlFor="subjectName">Enter the Subject Name</label>
      <input type="text" id="subjectName" />
      <label htmlFor="duration">Enter the Duration (In Minute)</label>
      <input type="number" id="duration" />
      <button type="submit">Next</button>
    </div>
  );
};

export default CaseMakerForm;
