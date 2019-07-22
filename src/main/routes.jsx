import React from 'react'
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'

export default props => (
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute />
        </Route>
    </Router>
)