import React from 'react'
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'
import Header from '../common/template/header'
import Docs from '../links/documents/docs';
import Home from '../links/home/home'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Header}>
            <IndexRoute component={Home}/>
            <Route path="/documents" component={Docs}></Route>
        </Route>
    </Router>
)