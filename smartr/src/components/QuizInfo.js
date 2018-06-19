import React from 'react';
import CurrentTimer from './CurrentTimer.js';
import CurrentScore from './CurrentScore.js';

const QuizInfo = (props) => {
  if (props.quizStarted === true){
    return (
      <div>
        <CurrentTimer />
        <CurrentScore />
      </div>
    )
  } else {
    return null;
  }
}

export default QuizInfo;
