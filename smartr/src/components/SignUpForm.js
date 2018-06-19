import React from 'react';

class SignUpForm extends React.Component {
  constructor(){
    super()
    this.state = {
      input: ""
    }
  }

  handleNewUser = (event) => {
    event.preventDefault();
    //FETCH POST TO THE DATABASE
    return this.state.input
  }

  handleNameChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }


  render() {
    if (this.props.newUser === true){
      return (
        <form onSubmit={this.handleNewUser}>
          Username: <input type='text' onChange={this.handleNameChange} value={this.state.input}/>
          <input type='submit' />
        </form>
      )
    } else {
      return null;
    }
  }

}

export default SignUpForm;
