import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SubjectDuration from "./components/SubjectDuration";
import CaseMakerForm from "./components/CaseMakerForm";

function App() {
  const [, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SubjectDuration />}></Route>
          <Route path="/casemakeform" element={<CaseMakerForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
