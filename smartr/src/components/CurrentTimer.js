import React from 'react';

class CurrentTimer extends React.Component {
  constructor() {
    super()
    this.state = {
      timer: 0
    }
  }
// when i render questions and answer start a timer at the bottom of the page (starting at 0)
// once and answer is clicked stop the timer and persist the time into total score
//
// setInterval(function(){ alert("Hello"); }, 3000);

componentDidMount(){
  setInterval(() => {
    let newTimer = parseFloat(this.state.timer) + 0.01
    let roundedTime = newTimer.toFixed(2)
    this.setState({
      timer: roundedTime
    })
  }, 10);
}
  // clearInterval()
  // this should invoke sendTimeToScore
  // and we need to include this.state.timer

  render() {
    return (
      <div>
        <b>Current Time: {this.state.timer}</b>
      </div>
    )
  }
}

export default CurrentTimer;
