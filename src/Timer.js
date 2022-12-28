import { Component } from "react";
// function tooling de conversion de mes secondes en format précis
function secondsToHms(timeInSeconds) {
  timeInSeconds = Number(timeInSeconds);
  const h = Math.floor(timeInSeconds / 3600); // car 3600 secondes dans une heure
  const m = Math.floor((timeInSeconds % 3600) / 60); // minutes
  const s = Math.floor((timeInSeconds % 3600) % 60); // seconds

  const hDisplay = h < 10 ? "0" + h : h; // si heure plus petit que 10 add un 0 devant sinon retourne h tel quel
  const mDisplay = h < 10 ? "0" + m : m; // si minute plus petite que 10 add un 0 devant sinon retourne m tel quel
  const sDisplay = h < 10 ? "0" + s : s; // si seconde plus petite que 10 add un 0 devant sinon retourne s tel quel

  return `${hDisplay}:${mDisplay}:${sDisplay}`;
}

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
      clearInterval(this.timerId);

      // si vrai
      this.setState({
        // alors je le mets à faux => car on veut arrêter le timer
        isTimerStarted: false,
        time: 0,
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
        <p>{secondsToHms(this.state.time)}</p>
        <button onClick={this.handleStartTimer}>
          {this.state.isTimerStarted ? "stop" : "start"}
        </button>
      </>
    );
  }
}
export default Timer;
