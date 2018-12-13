module.exports = `const Alert = props =>
  <div className={\`alert alert-\${props.type || "info"}\`}>
    {props.children}
  </div>;

const App = () => <Alert type="danger">Invalid Password</Alert>;

ReactDOM.render(<App />, mountNode);
`;
