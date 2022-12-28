import { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimerStarted: false, //gère la valeur mon button.
      time: 0,
    };
  }
  // va réagir a l'event click de mon button pour changer la valeur de mon Bool 'isTimerStarted'.
  handleStartTimer = () => {
    if (this.state.isTimerStarted) {
      // si vrai
      this.setState({
        // alors je le mets à faux => car on veut arrêter le timer
        isTimerStarted: false,
      });
    } else {
      // isTimerStarted est false => On veut démarrer le timer
      this.setState({
        isTimerStarted: true,
      });
      this.timerId = setInterval(() => {
        this.setState(({ time }) => {
          return {
            time: time + 1,
          };
        });
      }, 1000);
    }
  };

  render() {
    return (
      <>
        <p>{this.state.time}</p>
        <button onClick={this.handleStartTimer}>
          {this.state.isTimerStarted ? "stop" : "start"}
        </button>
      </>
    );
  }
}
export default Timer;
