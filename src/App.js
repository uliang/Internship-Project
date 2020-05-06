import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './App.css';
import LoginPage from './Login';
import HomePage from './Home';
import Classes from './Classes';
import Tests from './Tests';

const App = () => (
    <div className="app-routes">
        <BrowserRouter>
            <Switch>
                <Route path="/Tests" component={Tests} />
                <Route path="/Classes" component={Classes} />
                <Route path="/Home" component={HomePage} />
                <Route path="/" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default App;
