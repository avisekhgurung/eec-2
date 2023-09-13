import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import '../css/teacherStyle.css';

export default class TeacherLeaveApplications extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Leave Applications</h3>
                        </div>
                        <div class="container-fluid Leave-Applications py-4">
                        <table class="table table-bordered">
                                <thead bgcolor="#ffc107">
                                    <tr>
                                        <th>No</th>
                                        <th>Date</th>
                                        <th>Student Name</th>
                                        <th>Parent Name</th>
                                        <th>Leave From</th>
                                        <th>Leave To</th>
                                        <th>No of Days</th>
                                        <th>Reason of Leave</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}