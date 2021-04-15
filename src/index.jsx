import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MyForm from './form';
import App from './app';

const Test = React.lazy(() => import('./test'));
import NotFound from './not-found';
import Bootstrap from './bootstrap';
import {ReduxPage} from './redux_page';
import ContextPage from './context_page';
import {Route, Link, BrowserRouter as Router, NavLink, Switch} from 'react-router-dom';
import {ThemeProvider} from "./context/theme_context";

const routing = (
    <ThemeProvider>
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
                    <li>
                        <NavLink to="/context" activeStyle={{color: 'red'}}>context</NavLink>
                    </li>
                    <li>
                        <NavLink to="/redux" activeStyle={{color: 'red'}}>Redux</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/form" component={MyForm}/>
                    <Route path="/test" component={Test}/>
                    <Route path="/bootstrap" component={Bootstrap}/>
                    <Route path="/context" component={ContextPage}/>
                    <Route path="/redux" component={ReduxPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    </ThemeProvider>
);

ReactDOM.render(
    [routing],
    document.getElementById('root')
);
