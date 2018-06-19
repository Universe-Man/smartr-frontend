import React from 'react';

const Questions = (props) => {

  if (props.quizStarting === true){
    return (
      <div>
        <br/>
        Are you dumb?
      </div>
    )
  } else {
    return null;
  }
}

export default Questions;
