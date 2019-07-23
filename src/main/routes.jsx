import React from 'react'
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'
import Header from '../common/template/header'
import Docs from '../manuals/docs';

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Header}>
            <IndexRoute />
            <Route path="/documents" component={Docs}></Route>
        </Route>
    </Router>
)