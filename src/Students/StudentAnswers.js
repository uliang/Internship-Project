import React from 'react';
import User from './Images/User.png'
import StudentAnswers from './Tables/StudentAnswerTable.jsx'
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';

class StudentAnswersPage extends React.Component {

    handleClasses = () => {
        this.props.history.push('/Classes')
    }
    handleStudents = () => {
        this.props.history.push('/Students')
    }
    handleTests = () => {
        this.props.history.push('/Tests')
    }
    StudentAnswers = () => {
        this.props.history.push('/Students/StudentAnswers')
    }
    QuestionAnswers = () => {
        this.props.history.push('/Students/QuestionAnswers')
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
                    <button onClick={this.handleStudents} style={{ width: '130px' }}>Student List</button>
                    <button onClick={this.StudentAnswers} style={{ background: '#999999', width: '130px' }}>Student Answers</button>
                    <button onClick={this.QuestionAnswers} style={{ width: '130px' }}>Question Answers</button>
                    <StudentAnswers />
                </div>
                <div className="SideColor">
                    <div>
                        <img className="ProfilePic" src={User} alt="Profile Pic" />
                    </div>
                    <div className="Sidebar">
                        <p className="Name">Name: User's Name</p>
                        <div className="Links">
                            <p className="Classes" onClick={this.handleClasses}>Classes</p>
                            <p className="Tests" onClick={this.handleTests}>Tests</p>
                            <p className="Students" onClick={this.handleStudents} style={{ background: '#999999' }}>Students</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default StudentAnswersPage