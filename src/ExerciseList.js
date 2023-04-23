import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Exercise from './Exercise'

function ExerciseList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get('/data/exercises.json').then((response) => {
      setExercises(response.data);
    });
  }, []);

  return (
    <div>
      {exercises.map((exercise) => (
        <Exercise key={exercise.exercise_number} {...exercise} />
      ))}
    </div>
  );
}

export default ExerciseList;
