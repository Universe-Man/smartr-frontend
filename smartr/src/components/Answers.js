import React from 'react';

const Answers = (props) => {
// NEED LEGIT AND DYNAMIC ANSWERS FROM API
// ALSO I NEED TO SCRAMBLE THE ANSWERS YET MAKE SURE I KNOW WHICH ONE IS CORRECT
  if (props.quizStarted === true){
    return (
      <div>
        <p>-------------------------------------------------------------------</p>
        <p>A: <button>Jimmy Carter</button></p>
        <p>B: <button>Mongolia</button></p>
        <p>C: <button>To Kill a Mockingbird</button></p>
        <p>D: <button>42 million</button></p>
      </div>
    )
  } else {
    return null;
  }

}

export default Answers;
