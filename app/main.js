import React from 'react'
import navBar from './components/navBar.js'
import ReactDom from 'react-dom'
import { Router, Route, hashHistory } from 'react-router';

function main() {
    ReactDom.render((
        <Router history={hashHistory}>
            <Route path="/" component={navBar}/>
        </Router>
    ), document.getElementById('app'));
}

main();


