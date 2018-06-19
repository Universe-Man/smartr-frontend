import React from 'react';

class SignUpForm extends React.Component {
  constructor(){
    super()
    this.state = {
      inputName: "",
      inputPassword: ""
    }
  }

  handleLogIn = (event) => {
    event.preventDefault();

    this.props.logUserIn(this.state)
    this.setState({
      inputName: '',
      inputPassword: ''
    })
  }

  handleNewUser = (event) => {
    event.preventDefault();

    this.props.createNewUser(this.state);
    this.setState({
      inputName: '',
      inputPassword: ''
    })
    //return this.state.inputName
  }

  handleNameChange = (event) => {
    this.setState({
      inputName: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      inputPassword: event.target.value
    })
  }


  render() {
    if (this.props.newUser === true){
      return (
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={this.handleNewUser}>
          Username: <input type='text' onChange={this.handleNameChange} value={this.state.inputName} />
          <br/>
          Password: <input type='password' onChange={this.handlePasswordChange} value={this.state.inputPassword} />
          <br/>
          <input type='submit' />
        </form>
      </div>
      )
    } else if (this.props.logInNow === true){
      return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.handleLogIn}>
          Username: <input type='text' onChange={this.handleNameChange} value={this.state.inputName} />
          <br/>
          Password: <input type='password' onChange={this.handlePasswordChange} value={this.state.inputPassword}/>
          <br/>
          <input type='submit' />
        </form>
      </div>
      )
    } else {
      return null;
    }
  }

}

export default SignUpForm;
