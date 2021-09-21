import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../routes.js";

class PatientSummary extends React.Component {
  componentDidMount() {
    document.body.classList.add("kt-quick-panel--right");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/patients") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <>
        <Switch>{this.getRoutes(routes)}</Switch>
       </>
    );
  }
}

export default PatientSummary;
