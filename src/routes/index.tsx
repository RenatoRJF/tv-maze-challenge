import React, { FC, ReactNode } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Show from '../pages/Show';

const Routes: FC<{ children: ReactNode }> = ({ children }) => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/shows/:id" component={Show} />

      <Route path="*" component={NotFound} />
    </Switch>

    {children}
  </Router>
);

export default Routes;
