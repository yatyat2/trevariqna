import Home from "./containers/Home";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import Meeting from "./containers/Meeting";
import { Router, Route, IndexRoute, browserHistory } from "react-router-3";

// ReactDOM.render(<Index />, document.getElementById("root"));

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="meeting" component={Meeting} />
      <Route path="home" component={Home} />
    </Route>
  </Router>,
  document.getElementById("root")
);
