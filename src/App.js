import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './App.css';
import LoginPage from './Login';
import HomePage from './Home';

const App = () => (
    <div className="app-routes">
        <BrowserRouter>
            <Switch>
                <Route path="/Login" component={LoginPage} />
                <Route path="/Home" component={HomePage} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default App;
