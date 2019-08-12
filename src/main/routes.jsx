import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Docs from '../links/documents/docs';
import Home from '../links/home/home'
import About from '../links/about/about'
import FAQS from '../links/faqs/faqs';

export default props => (
    <Switch>
        <Route path="/documents" component={Docs} />
        <Route path="/sobre" component={About}></Route>
        <Route path="/faqs" component={FAQS}></Route>
        <Route component={Home} />
    </Switch>
)