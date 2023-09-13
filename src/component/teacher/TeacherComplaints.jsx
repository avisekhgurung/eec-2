import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import '../css/teacherStyle.css';

export default class TeacherComplaints extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Complaints</h3>
                        </div>
                        <div class="container-fluid Journal py-4">
                            <div style={{ overflowX: 'auto' }}>
                                <table class="table table-bordered">
                                    <thead bgcolor="#ffc107">
                                        <tr>
                                            <th>No</th>
                                            <th>Date</th>
                                            <th>Complaint Made By</th>
                                            <th>Written Statement</th>
                                            <th>Ref. Letter</th>
                                            <th>Investigator</th>
                                            <th>Action</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>12-12-2021</td>
                                            <td>John Smith</td>
                                            <td>1-636-140-1210</td>
                                            <td>Oct 26, 2015</td>
                                            <td>General</td>
                                            <td>Lorem Ipsum is simply dummy text.</td>
                                            <td>Resolved</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}