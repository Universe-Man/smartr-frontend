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

  logUserIn = (user) => {
    // FETCH POST TO LOG IN USER
    console.log('boop beep boop logging user in...');
    fetch(`http://localhost:3001/api/v1/sessions`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name: user.inputName,
          inputPassword: user.inputPassword
       })
     })
     .then(r => r.json())
     .then(user => console.log(user))
  }

  createNewUser = (newUser) => {
    // FETCH POST TO CREATE A NEW USER
    console.log('beep boop beep creating user...');
    fetch(`http://localhost:3001/api/v1/users`, {
		    method: "POST",
		    headers: {"Content-Type": "application/json"},
		    body: JSON.stringify({
	        name: newUser.inputName,
	        inputPassword: newUser.inputPassword
	     })
     })
     .then(r => r.json())
     .then(newUser => console.log(newUser))
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
