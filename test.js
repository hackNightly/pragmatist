/**
 * This class is important to the application!
 */
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};
  }

  someOtherMethod() {
    const atAll = "at all!"
    this.isCleanCode ? "cool" : `not cool ${atAll}`;

    const itutesCleanCode = {
      wellSpaced: true,
      wellUnderstood: true,
      notClever: false
    };
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    const x = 234;

    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}

ReactDOM.render(<Timer />, mountNode);
