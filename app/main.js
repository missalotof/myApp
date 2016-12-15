import React from 'react';
import ReactDom from 'react-dom';
import fullPage from './src/components/fullPage';
import { Router, Route, hashHistory } from 'react-router';

import './src/style/common.css'

function main() {
    ReactDom.render((
        <Router history={hashHistory}>
            <Route path="/home" component={fullPage}/>
        </Router>
    ), document.getElementById('app'));
}

main();


