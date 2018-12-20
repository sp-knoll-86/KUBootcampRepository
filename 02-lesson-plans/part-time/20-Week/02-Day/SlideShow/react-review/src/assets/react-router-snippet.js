module.exports = `const BasicExample = () => 
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/portfolio" component={Portfolio}/>
    </div>
  </Router>
  
  const Home = () => <h1>Home Page!</h1>;
  const About = () => <h1>About Us</h1>;
  const Portfolio = () => <h1>My Portfolio</h1>;

  ReactDOM.render(<BasicExample />, mountNode);
`;
