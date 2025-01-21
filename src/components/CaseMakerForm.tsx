import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/SubjectCaseMakeForm.css";

const CaseMakerForm = () => {
  const location = useLocation();
  const subjectName: string = location.state?.subjectName;
  const duration: number = location.state?.duration;
  const navigate = useNavigate();

  const caseMakerListDummy = [
    { casemakeId: "CM001", casemakeName: "Stelle" },
    { casemakeId: "CM002", casemakeName: "Camellya" },
    { casemakeId: "CM003", casemakeName: "Belle" },
    { casemakeId: "CM004", casemakeName: "Lumine" },
  ];

  const [selectedCasemakeId, setSelectedCasemakeId] = useState<string>("");
  const [casemakeName, setCasemakeName] = useState<string>("");

  const handleSubjectIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelectedCasemakeId(id);
    const casemake = caseMakerListDummy.find((item) => item.casemakeId === id);
    if (casemake) {
      setCasemakeName(casemake.casemakeName);
    } else {
      setCasemakeName("");
    }
  };
  const handleNext = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    navigate("/questionform", {
      state: { casemakeName, subjectName, duration },
    });
  };
  const isFormValid = selectedCasemakeId && casemakeName;
  return (
    <div>
      <form onSubmit={handleNext}>
        <h2>Choose the Casemaker</h2>
        <label htmlFor="subjectId">Enter the Casemaker ID</label>
        <select
          id="subjectId"
          value={selectedCasemakeId}
          onChange={handleSubjectIdChange}
        >
          <option value="">Select Casemaker</option>
          {caseMakerListDummy.map((casemake) => (
            <option key={casemake.casemakeId} value={casemake.casemakeId}>
              {casemake.casemakeId}
            </option>
          ))}
        </select>
        <label htmlFor="subjectName">Enter the Casemaker Name</label>
        <input type="text" id="subjectName" value={casemakeName} readOnly />
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CaseMakerForm;
