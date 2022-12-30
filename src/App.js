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
    const date = new Date();
    this.setState({
      timers: [...this.state.timers, { time, date }],
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
