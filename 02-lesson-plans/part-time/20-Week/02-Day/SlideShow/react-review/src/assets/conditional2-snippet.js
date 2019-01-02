module.exports = `class Counter extends React.Component {
  state = {
    count: 0
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  renderOddOrEven = () => {
    if (this.state.count % 2 === 0) {
      return "Woah! That's an even number! 😲";
    }
    return "That's an odd number 😒";
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <p>{this.renderOddOrEven()}</p>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, mountNode);
`;
