import { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimerStarted: false, //gère la valeur mon button.
    };
  }
  // va réagir a l'event click de mon button pour changer la valeur de mon Bool 'isTimerStarted'.
  handleStartTimer = () => {
    if (this.state.isTimerStarted) {
      // si vrai
      this.setState({
        // alors je le mets à faux
        isTimerStarted: false,
      });
    } else {
      // et si faux, alors je le mets à vrai
      this.setState({
        isTimerStarted: true,
      });
    }
  };

  render() {
    return (
      <>
        <p> 00:00:00</p>
        <button onClick={this.handleStartTimer}>
          {this.state.isTimerStarted ? "stop" : "start"}
        </button>
      </>
    );
  }
}
export default Timer;
