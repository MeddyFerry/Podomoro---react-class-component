import Timer from "./Timer";
import "./app.css";
import TimersTable from "./TimersTable";

const { Component } = require("react");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timers: [],
    };
  }
  //timer doit update notre state sinon aucun sens donc :
  saveTime = (time) => {
    const newTimers = [...this.state.timers]; // copie de timers qui se trouve dans le state
    newTimers.push(time);

    this.setState({
      timers: newTimers, // ici on crée un tableau avec une nvl valeur
    });
  };
  render() {
    return (
      <div className="app">
        <h1>Podomoro Timer</h1>
        <Timer saveTime={this.saveTime} />
        <TimersTable timers={this.state.timers} />
      </div>
    );
  }
}
export default App;
