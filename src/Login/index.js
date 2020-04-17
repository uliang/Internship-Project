import React from 'react';
import './index.css';
import Route from 'react-router-dom';

class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <div className="separator">
                    <h1>
                        Log In Form
              </h1>
                </div>
                <div>
                    <form>
                        <input type="text" placeholder="ID-Number" className="Input"></input>
                        <br></br>
                        <input type="text" placeholder="Password" className="Input"></input>
                        <br></br>
                        <input type="checkbox" className="Remember" value="1"></input>
                        <label htmlFor="Remember">Remember Me</label>
                        <br></br>
                        <input type="submit" className="Submit" value="Submit"></input>
                        <h2 className="E-Grading">E-Grading</h2>
                    </form>
                    <hr className="line"></hr>
                </div>
            </div>
        );
    }
}

export default LoginPage
