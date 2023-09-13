import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import '../css/teacherStyle.css';

export default class TeacherJournal extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Journal</h3>
                        </div>
                        <div class="container-fluid Journal py-4">
                            <h1 className="text-danger">On Going</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}