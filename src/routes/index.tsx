import React, { FC, ReactNode } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Show from '../pages/Show';

const Routes: FC<{ children: ReactNode }> = ({ children }) => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/shows/:id" component={Show} />

      <Route path="*">
        <p>Not found</p>
      </Route>
    </Switch>

    {children}
  </Router>
);

export default Routes;
