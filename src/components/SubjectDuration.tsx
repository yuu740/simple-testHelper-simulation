import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/SubjectCaseMakeForm.css";

const SubjectDuration = () => {
  const navigate = useNavigate();
  const subjectListDummy = [
    { subjectId: "SB001", subjectName: "Computational Physics" },
    { subjectId: "SB002", subjectName: "Algotirhm and Programming" },
    { subjectId: "SB003", subjectName: "Computational Biology" },
    { subjectId: "SB004", subjectName: "Human and Computer Interaction" },
  ];

  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("");
  const [subjectName, setSubjectName] = useState<string>("");
  const [duration, setDuration] = useState<number>(100);
  const [error, setError] = useState<string>("");

  const handleSubjectIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelectedSubjectId(id);
    const subject = subjectListDummy.find((item) => item.subjectId === id);
    if (subject) {
      setSubjectName(subject.subjectName);
    } else {
      setSubjectName("");
    }
  };

  const handleNext = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (error) {
      return;
    }
    navigate("/casemakeform", { state: { subjectName, duration } });
  };

  const isFormValid = selectedSubjectId && subjectName && !error;

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setDuration(value);
    if (value < 100 || value > 180) {
      setError("Duration must be between 100 and 180 minutes.");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleNext}>
        <h2>Determine duration for this subject</h2>
        <label htmlFor="subjectId">Enter the Subject ID</label>
        <select
          id="subjectId"
          value={selectedSubjectId}
          onChange={handleSubjectIdChange}
        >
          <option value="">Select Subject</option>
          {subjectListDummy.map((subject) => (
            <option key={subject.subjectId} value={subject.subjectId}>
              {subject.subjectId}
            </option>
          ))}
        </select>
        <label htmlFor="subjectName">Enter the Subject Name</label>
        <input type="text" id="subjectName" value={subjectName} readOnly />
        <label htmlFor="duration">Enter the Duration (In Minute)</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={handleDurationChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" disabled={!isFormValid}>
          Next
        </button>
      </form>
    </div>
  );
};

export default SubjectDuration;
