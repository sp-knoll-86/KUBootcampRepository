module.exports = `

  const Header = () => (
    <header className="header">
      <h1>Hello World!{process}</h1>
    </header>
  );

  ReactDOM.render(<Header />, mountNode);
  `;
