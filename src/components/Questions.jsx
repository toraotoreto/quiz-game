import React from "react";

function Question({ data, onAnswer }) {
  const { question, answers, correctAnswer } = data;

  return (
    <div className="card p-3">
      <h5 dangerouslySetInnerHTML={{ __html: question }}></h5>
      <div className="mt-3">
        {answers.map((answer, index) => (
          <button 
            key={index} 
            className="btn btn-primary me-2 mb-2"
            onClick={() => onAnswer(answer === correctAnswer)}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;