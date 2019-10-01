import React, { Component } from "react";
import { BrowserRoute, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1> Hi I am from Home</h1>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1> Hi I am from Home</h1>
    </div>
  );
}
const More = props => {
  return (
    <div>
      <h1> Hi I am from Home</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRoute>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">More</Link>
          </li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="More" component={More} />
      </BrowserRoute>
    );
  }
}
export default App;
