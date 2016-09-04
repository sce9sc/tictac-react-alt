import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './app'
import About from './Pages/About/about'
import Home from './Pages/Home/home'

render((
    <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
    </Route>
    </Router>
), document.getElementById('app'))