import React from 'react';
import User from './Images/User.png'
import Table from './ClassesTable.jsx'
import Modal from './FileTransfer.jsx'
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons'; //npm install @syncfusion/ej2-react-splitbuttons –save

class ClassesPage extends React.Component {

    //Functions For Switching Pages
    handleClasses = () => {
        this.props.history.push('/Classes')
    }
    handleStudents = () => {
        this.props.history.push('/Students')
    }
    handleTests = () => {
        this.props.history.push('/Tests')
    }
    //Functions For Switching Pages

    render() {

        //Contents of Dropdown Menus Top Right, Not Sure If Functions Necessary
        this.stuff = [{
            text: 'My Profile'
        }, {
            text: 'Account Settings'
        }];
        this.items = [{
            text: 'General'
        }, {
            text: 'Advanced'
        }];
        //Contents of Dropdown Menus Top Right

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
                    <button style={{ background: '#999999', width: '130px' }}>Classes</button>
                    <Modal />
                    <button style={{ width: '130px', float: 'right' }}>Add File</button>
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
                            <p className="Tests" onClick={this.handleTests}>Tests</p>
                            <p className="Students" onClick={this.handleStudents} >Students</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassesPage