import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const MapRoute = props => (
  <Switch>
    {props.route.map(Item =>
      Item.path ? (
        <Route
          key={Item.path}
          path={Item.path}
          render={props => <Item.component {...props} route={Item.children} />}
        />
      ) : (
        <Redirect {...Item} key={Item.from} />
      )
    )}
  </Switch>
);

export default MapRoute;
