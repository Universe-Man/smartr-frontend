import React from 'react';
import CurrentTimer from './CurrentTimer.js';
import CurrentScore from './CurrentScore.js';

// func here that takes current time .timer and sends to currentscore as a prop

// startTimer = () => {
//   this.props.handleFirstQuestion()
//   console.log('starting timer');
//
// }

const QuizInfo = (props) => {
  // state = {
  //   score: 0
  // }

  const sendTimeToScore = (time) => {
    // time is coming from the CurrentTimer's state
    // when we end the setInterval that increments our this.state.timer in <CurrentTimer /> we need to invoke this function to take that time and update our score so we add the time to it
  }

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

{/*<CurrentTimer {sendTimeToScore={this.sendTimeToScore} />
<CurrentScore score={this.state.score} />*/}
