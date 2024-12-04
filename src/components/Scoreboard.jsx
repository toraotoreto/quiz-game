import React from "react";

function Scoreboard({ current, total, score }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <p>Progresso: {current}/{total}</p>
      <p>Pontuação: {score}</p>
    </div>
  );
}

export default Scoreboard;