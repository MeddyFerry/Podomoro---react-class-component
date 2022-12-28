import Timer from "./Timer";
import app from "./app.css";

const { Component } = require("react");

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Podomoro Timer</h1>
        <Timer />
      </div>
    );
  }
}
export default App;
