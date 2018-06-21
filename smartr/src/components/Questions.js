import React from 'react';

const Questions = (props) => {

  if (props.quizStarting === true){
    return (
      <div>
        <br/>
        Please Select a Smartr Category:
        <br/>
        %dropdown menu of categories%
        <button type='submit' onClick={props.handleCategorySelection}>Enter/Select</button>
      </div>
    )
  } else if (props.quizStarting === 'almost'){
    return (
      <div>
        <br/>
        Please Select Difficulty of Question 1:
        <br/>
        %radio buttons of difficulty%
        <button type='submit' onClick={props.handleFirstQuestion} >Prepare Yourself...</button>
      </div>
    )
  } else if (props.quizStarted === true){
    return (
    <div>
      <p>
      Which of the following is the right answer to this very important question?
      </p>
    </div>
    )
  } else if (props.imLeaving === true){
      return (
      <div>
        <h1>
        It's okay to be bad at stuff. Next time.
        </h1>
        <h5>*under breath*</h5>
        <h5>...idiot</h5>
      </div>
      )
  } else {
    return null;
  }
}

export default Questions;
