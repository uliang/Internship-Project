import React from 'react';
import User from './Images/User.png'
import Table from './ClassesTable.jsx'
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';

class ClassesPage extends React.Component {

    handleClasses = () => {
        this.props.history.push('/Classes')
    }
    handleTests = () => {
        this.props.history.push('/Tests')
    }
    render() {
        this.stuff = [{
            text: 'My Profile'
        }, {
            text: 'Friend Requests'
        }, {
            text: 'Account Settings'
        }];
        this.items = [{
            text: 'General'
        }, {
            text: 'Advanced'
        }];
        return (
            <div>
                <div className="Heading">
                    <h1>E-Grading</h1>
                    <span className="Settings">
                        <DropDownButtonComponent items={this.items} iconCss='e-icons F_Properties' > Settings </DropDownButtonComponent>
                    </span>
                    <span className="EditProfile">
                        <DropDownButtonComponent items={this.stuff} iconCss='e-icons MT_Resource' > Profile </DropDownButtonComponent>
                    </span>
                </div>
                <div className="Table">
                    <Table />
                </div>
                <div className="SideColor">
                    <div>
                        <img className="ProfilePic" src={User} alt="Profile Pic" />
                    </div>
                    <div className="Sidebar">
                        <p className="Name">Name: User's Name</p>
                        <div className="Links">
                            <p className="Classes" onClick={this.handleClasses} style={{ background: '#999999' }}>Classes</p>
                            <p className="Tests" onClick={this.handleTests} >Tests</p>
                            <p className="Students">Students</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassesPage