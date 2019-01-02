module.exports = `class Counter extends React.Component {
  state = {
    count: 0
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <p>{(this.state.count % 2 === 0) ? "Woah! That's an even number! 😲" : "That's an odd number 😒"}</p>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, mountNode);
`;
