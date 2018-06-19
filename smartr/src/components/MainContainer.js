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
      loggedIn: false,
      newUser: false
    }
  }

  summonNewUserForm = () => {
    this.setState({
      newUser: true
    })
  }

  render() {
    return (
      <div>
        <Buttons {...this.state} summonNewUserForm={this.summonNewUserForm} />
        <SignUpForm {...this.state}/>
        <Questions />
        <Answers />
        <QuizInfo />
      </div>
    )
  }

}

export default MainContainer;
