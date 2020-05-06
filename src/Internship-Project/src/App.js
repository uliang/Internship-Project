import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './App.css';
import LoginPage from './Login';
import HomePage from './Home';

const App = () => (
    <div className="app-routes">
        <BrowserRouter>
            <Switch>
                <Route path="/Home" component={HomePage} />
                <Route path="/" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default App;
