import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import ImageView from "./components/ImageView";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/image-search/" exact component={App} />
      <Route path="/image/:id" component={ImageView} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
