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
      newUser: false,
      logInNow: false
    }
  }

  summonNewUserForm = () => {
    this.setState({
      newUser: true,
      logInNow: false
    })
  }

  summonLoginForm = () => {
    this.setState({
      newUser: false,
      logInNow: true
    })
  }

  logUserIn = () => {
    // FETCH POST TO LOG IN USER
      console.log('boop beep boop logging user in...');
  }

  createNewUser = () => {
    // FETCH POST TO CREATE A NEW USER
    console.log('beep boop beep creating user...');
  }

  render() {
    return (
      <div>
        <Buttons {...this.state} summonNewUserForm={this.summonNewUserForm} summonLoginForm={this.summonLoginForm} />
        <SignUpForm {...this.state} createNewUser={this.createNewUser} logUserIn={this.logUserIn} />
        <Questions />
        <Answers />
        <QuizInfo />
      </div>
    )
  }

}

export default MainContainer;
