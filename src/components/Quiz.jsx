import React, { useState, useEffect } from "react";
import Question from "./Question";
import Scoreboard from "./Scoreboard";
import axios from "axios";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    // Fetch perguntas do mock API
    axios.get("http://localhost:3001/questions")
      .then(response => {
        setQuestions(response.data);
        setLoading(false);
      })
      .catch(error => console.error("Erro ao buscar perguntas:", error));
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setQuizFinished(true); // Finaliza o quiz
    }
  };

  const handleRestart = () => {
    setQuizFinished(false);
    setCurrentIndex(0);
    setScore(0);
  };

  if (loading) {
    return <p>Carregando perguntas...</p>;
  }

  if (quizFinished) {
    return (
      <div className="text-center">
        <h2>Quiz Finalizado!</h2>
        <p>Sua pontuação: {score}/{questions.length}</p>
        <button className="btn btn-primary mt-3" onClick={handleRestart}>
          Reiniciar Quiz
        </button>
      </div>
    );
  }

  return (
    <div>
      <Scoreboard 
        current={currentIndex + 1} 
        total={questions.length} 
        score={score} 
      />
      <Question 
        data={questions[currentIndex]} 
        onAnswer={handleAnswer} 
      />
    </div>
  );
}

export default Quiz;