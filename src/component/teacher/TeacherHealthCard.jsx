import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import '../css/teacherStyle.css';

export default class TeacherHealthCard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Health Card</h3>
                        </div>
                        <div class="container-fluid Teacher-HealthCard py-4">
                            <div class="form-row mt-3">
                                <div class="form-group col-md-3">
                                    <div class="input-group">
                                        <input type="text" class="form-control search" placeholder="Search.." />
                                        <div class="input-group-append">
                                            <span class="input-group-text">
                                                <img src="images/icon/search-black.png" alt="Search" width="20" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group col-md-3">
                                    <select class="form-control sort">
                                        <option selected>Sort By Class</option>
                                        <option value="">I</option>
                                        <option value="">II</option>
                                        <option value="">III</option>
                                        <option value="">IV</option>
                                        <option value="">V</option>
                                        <option value="">VI</option>
                                        <option value="">VII</option>
                                        <option value="">VIII</option>
                                        <option value="">IX</option>
                                        <option value="">X</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-3">
                                    <select class="form-control sort">
                                        <option value="">Sort By Section</option>
                                        <option value="">A</option>
                                        <option value="">B</option>
                                        <option value="">C</option>
                                        <option value="">D</option>
                                        <option value="">E</option>
                                        <option value="">F</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-3">
                                    <select class="form-control sort">
                                        <option value="">Sort By Blood Group</option>
                                        <option value="">A+</option>
                                        <option value="">A-</option>
                                        <option value="">B+</option>
                                        <option value="">B-</option>
                                        <option value="">AB+</option>
                                        <option value="">AB-</option>
                                        <option value="">O+</option>
                                        <option value="">O-</option>
                                    </select>
                                </div>

                            </div>
                            <table class="table table-bordered">
                                <thead bgcolor="#ffc107">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Class</th>
                                    <th>Section</th>
                                    <th>Roll No</th>
                                    <th>Blood Group</th>
                                    <th>Report</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><a className="badge badge-warning" href="/teacher_viewhealthcard">View</a></td>
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