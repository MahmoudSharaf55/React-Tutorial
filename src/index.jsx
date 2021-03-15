import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MyForm from './form';
import App from './app';
import Test from './test';
import NotFound from './not-found';
import Bootstrap from './bootstrap';
import {Route, Link, BrowserRouter as Router, NavLink,Switch} from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <h1>Router Page</h1>
            <ul>
                <li>
                    <NavLink to="/" exact activeStyle={{color: 'red'}}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/form" activeStyle={{color: 'red'}}>Form</NavLink>
                </li>
                <li>
                    <NavLink to="/test" activeStyle={{color: 'red'}}>Test</NavLink>
                </li>
                <li>
                    <NavLink to="/bootstrap" activeStyle={{color: 'red'}}>bootstrap</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/form" component={MyForm} />
                <Route path="/test" component={Test} />
                <Route path="/bootstrap" component={Bootstrap} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    [routing],
    document.getElementById('root')
);
