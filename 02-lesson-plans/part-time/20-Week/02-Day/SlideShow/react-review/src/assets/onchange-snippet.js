module.exports = `class Form extends React.Component {
    state = {
      username: "coolguy1337"
    }

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }

    render() {
      return (
        <div>
          <p>Hello {this.state.username}!</p>
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={this.state.username} 
            onChange={this.handleInputChange}
          />
        </div>
      );
    }
  }
  
  ReactDOM.render(<Form />, mountNode);
  `;
