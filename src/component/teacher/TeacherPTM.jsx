import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import '../css/teacherStyle.css';

export default class TeacherPTM extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Parent Teacher Meeting</h3>
                        </div>
                        <div class="container-fluid PTM py-4">
                            <h1 className="text-danger">On Going</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}