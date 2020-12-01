import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import { Navbar, githubProjects } from "./components";
import {
  AboutMe,
  Contact,
  Portfolio
} from "./pages";
function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/AboutMe" component={AboutMe} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/" exact/>
    </Router>
  );
}
export default App;