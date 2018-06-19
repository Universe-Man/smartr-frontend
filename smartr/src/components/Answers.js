import React from 'react';

const Answers = (props) => {

  if (props.quizStarted === true){
    return (
      <div>
        <p>-------------------------------------------------------------------</p>
        <p>A: Jimmy Carter</p>
        <p>B: Mongolia</p>
        <p>C: To Kill a Mockingbird</p>
        <p>D: 42 million</p>
      </div>
    )
  } else {
    return null;
  }

}

export default Answers;
