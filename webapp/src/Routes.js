import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import BlogPage from "./containers/BlogPage"

function Routes() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path={`/blog`} component={BlogPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
