import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'//$ npm install --save react-router-dom
import './App.css';
import LoginPage from './Login';
import HomePage from './Home';
import Classes from './Classes';
import Students from './Students';
import StudentAnswers from './Students/StudentAnswers';
import QuestionAnswers from './Students/QuestionAnswers';
import Tests from './Tests';
import Questions from './Tests/QuestionsPage';

const App = () => (
    <div className="app-routes">
        <BrowserRouter>
            <Switch>
                <Route path="/Tests/QuestionsPage" component={Questions} />
                <Route path="/Tests" component={Tests} />
                <Route path="/Students/QuestionAnswers" component={QuestionAnswers} />
                <Route path="/Students/StudentAnswers" component={StudentAnswers} />
                <Route path="/Students" component={Students} />
                <Route path="/Classes" component={Classes} />
                <Route path="/Home" component={HomePage} />
                <Route path="/" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default App;
