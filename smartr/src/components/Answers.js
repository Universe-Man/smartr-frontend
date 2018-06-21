import React from 'react';
import UUID from 'uuid'
const Answers = (props) => {
// NEED LEGIT AND DYNAMIC ANSWERS FROM API
// ALSO I NEED TO SCRAMBLE THE ANSWERS YET MAKE SURE I KNOW WHICH ONE IS CORRECT
  if (props.quizStarted === true){
    return (
      <div>
        <p>-------------------------------------------------------------------</p>
        {props.answers.map(answer => <p key={UUID()}><button>{answer}</button></p>)}
      </div>
    )
  } else {
    return null;
  }

}

export default Answers;
