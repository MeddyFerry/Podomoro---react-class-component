import Timer from "./Timer";

const { Component } = require("react");

class App extends Component {
  render() {
    return (
      <div>
        <h1>Podomoro Timer</h1>
        <Timer />
      </div>
    );
  }
}
export default App;
