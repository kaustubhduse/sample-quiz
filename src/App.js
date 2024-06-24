import React, { useState } from "react";
import "./App.css";
import Card from "./components/UI/Card";
import ProgressBar from "./components/ProgressBar";
import Slider from "./components/Slider";
import Modal from "./components/UI/Modal"; // Import the Modal component

function App() {
  const questions = [
    "I have an ambition of making a difference",
    "My leadership journey has progressed as I anticipated.",
    "I have spent fewer than 4 years in full time service or ministry.",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handlePointSelected = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (progress <= 300) {
      setProgress((prevProgress) => prevProgress + 100);
    }

    if (currentQuestionIndex >= questions.length - 1) {
      setCurrentQuestionIndex(questions.length - 1);
      setProgress(300);
      setTimeout(() => {
        setShowModal(true); 
      },500);
      
    }
  };

  const closeModalHandler = () => {
    setShowModal(false); 
    setCurrentQuestionIndex(0);
    setProgress(0);
  };

  return (
    <div className="App">
      <Card>
        <ProgressBar progress={progress} index={currentQuestionIndex} />
        <div className="progress-indicator">
          <strong>{currentQuestionIndex + 1}</strong> / {questions.length}
        </div>
        <div className="question">
          <p>{questions[currentQuestionIndex]}</p>
        </div>
        <Slider onPointSelected={handlePointSelected} />
      </Card>
      {showModal && (
        <Modal onClose={closeModalHandler}>
          <p>You have finished the test!</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
