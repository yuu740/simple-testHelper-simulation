import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SubjectDuration from "./components/SubjectDuration";
import CaseMakerForm from "./components/CaseMakerForm";
import QuestionForm from "./components/QuestionForm";
import ReviewForm from "./components/ReviewForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SubjectDuration />}></Route>
          <Route path="/casemakeform" element={<CaseMakerForm />}></Route>
          <Route path="/questionform" element={<QuestionForm />}></Route>
          <Route path="/reviewform" element={<ReviewForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
