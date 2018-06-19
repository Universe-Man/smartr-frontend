import React from 'react';
import Questions from './Questions.js'
import Answers from './Answers.js'
import QuizInfo from './QuizInfo.js'
import Buttons from './Buttons.js'
import SignUpForm from './SignUpForm.js'

class MainContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
  }

  render() {
    return (
      <div>
        <Buttons {...this.state} />
        <SignUpForm />
        <Questions />
        <Answers />
        <QuizInfo />
      </div>
    )
  }

}

export default MainContainer;
