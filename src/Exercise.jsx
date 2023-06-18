import React from 'react';
import './App.css';

function Exercise(props) {
  const { exercise } = props;
  const objective = exercise.objective;
  const consolidatedCode = exercise.step_by_step_solution.reduce((acc, curr) => {
    return acc + curr.code + '\n';
  }, '');

  return (
    <div className="exercise">
      <div className="page-break"></div>
      <h2 className="exercise-number">{exercise.exercise_number}</h2>
      <h2 className="exercise-title">{exercise.title}</h2>
      <h3 className="exercise-objective">{objective}</h3>
      <h7 className="exercise-application">{exercise.practical_application}</h7>
      {exercise.step_by_step_solution.map((step, index) => (
        <div key={index}>
          <div className="exercise-step">{`${index + 1}. ${step.step}`}</div>
          <pre>
            <code className="exercise-code">{step.code}</code>
          </pre>
        </div>
      ))}
      <div className="exercise-consolidated-code-head">Consolidated Code:</div>
      <pre>
        <code className="exercise-consolidated-code">{consolidatedCode}</code>
      </pre>
    </div>
  );
}

export default Exercise;
