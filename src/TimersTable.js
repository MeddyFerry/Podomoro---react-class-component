const { Component } = require("react");
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
class TimersTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th> Date</th>
            <th> Time</th>
          </tr>
        </thead>
        <tbody>
          {this.props.timers.map((timer) => (
            <tr key={timer.date.getMilliseconds()}>
              <td>
                {" "}
                {timer.date.toLocaleDateString()} at
                {timer.date.toLocaleTimeString()}
                {"  "}
              </td>
              <td>{secondsToHms(timer.time)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default TimersTable;
