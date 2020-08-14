import React from "react";
import { Route, Switch } from "react-router";

let routes = (
  <Switch>
    <Route />
  </Switch>
);

class PageNotFound extends React.Component {
    render() {
        return (
            <div className="PageNotFound">Page Not Found</div>
        )
    }
}
export default PageNotFound