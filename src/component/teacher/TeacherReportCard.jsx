import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import YearPicker from 'react-year-picker';
import '../css/teacherStyle.css';
import { Link } from 'react-router-dom';

export default class TeacherReportCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        console.log(date);
    }
    render() {
        const submit = {
            width: 'auto',
            minHeight: 'auto',
            fontSize: '16px'
        }
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Report Card</h3>
                            <div class="text-right">
                                <a class="btn btn-warning btn-sm" id="submit" href="/teacher_add_reportcard" style={submit}>New Report Card</a>
                            </div>
                        </div>
                        <div class="container-fluid Teacher-ReportCard py-4">
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
                                        <option value="10">Sort By Section</option>
                                        <option value="15">A</option>
                                        <option value="20">B</option>
                                        <option value="50">C</option>
                                        <option value="70">D</option>
                                        <option value="50">E</option>
                                        <option value="70">F</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <YearPicker>
                                        <input type="text" class="form-control" onChange={this.handleChange}/>
                                    </YearPicker>
                                </div>
                            </div>
                            <table class="table table-bordered">
                                <thead bgcolor="#ffc107">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Class</th>
                                    <th>Section</th>
                                    <th>Roll No</th>
                                    <th>Attendence</th>
                                    <th>Class Teahcer</th>
                                    <th>Report</th>
                                    <th>Action</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><a className="badge badge-warning" href="/teacher_viewreportcard">View</a></td>
                                        <td>
                                            <Link to="/teacher_add_reportcard">
                                                <i className="fa fa-edit mr-2"></i>
                                            </Link>
                                            <i className="fa fa-trash mr-2"></i>
                                        </td>
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