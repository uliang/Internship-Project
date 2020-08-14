import React from 'react';
import './index.css';

class LoginPage extends React.Component {

    //Functions For Switching Pages
    handleSubmit = () => {
            this.props.history.push('/Home')   
    }
    //Functions For Switching Pages

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
                        <input type="checkbox" className="Remember" style={{ marginLeft: '30em'}} value="1"></input>
                        <label htmlFor="Remember">Remember Me</label>
                        <br></br>
                        <button type="button" className="Submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
                        <h2 className="E-Grading">E-Grading</h2>
                    </form>
                    <hr className="line"></hr>
                </div>
            </div>
        );
    }
}

export default LoginPage
