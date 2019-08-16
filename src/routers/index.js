import React from 'react'
import { Router, Switch } from 'react-router-dom';

import routes from './config'
import RouteWithSubRoutes from './routewithsubroutes'

import history from './history';

const App = () => (
    <Router history={history}>
        <Switch>
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
    </Router>
)

export default App;