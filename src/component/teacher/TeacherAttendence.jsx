import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import $ from 'jquery';
import '../css/main.css';
import '../css/teacherStyle.css';

export default class TeacherAttendence extends React.Component {
    componentDidMount = () => {
        $(".present").prop("checked", true);
    }
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Attendence</h3>
                            <div class="container-fluid Attendence py-4">
                                <div class="container">
                                    <form action="">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <input type="date" class="form-control" id="" name="Date" />
                                            </div>
                                            <div class="col-lg-4">
                                                <select class="custom-select" name="Class">
                                                    <option value="" selected>- Select Class -</option>
                                                    <option value="">I</option>
                                                    <option value="">II</option>
                                                    <option value="">III</option>
                                                    <option value="">IV</option>
                                                    <option value="">V</option>
                                                </select>
                                            </div>
                                            <div class="col-lg-4">
                                                <select class="custom-select" name="Section">
                                                    <option value="" selected>- Select Section -</option>
                                                    <option value="">A</option>
                                                    <option value="">B</option>
                                                    <option value="">C</option>
                                                    <option value="">D</option>
                                                </select>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="student-box border rounded p-3">
                                            <div class="form-row">
                                                <div class="col-lg-8">
                                                    <h5 class="text-warning">Students</h5>
                                                </div>
                                                <div class="col-lg-4">
                                                    <h5 class="text-warning">Present / Absent</h5>
                                                </div>
                                            </div>
                                            <div class="form-group form-row">
                                                <div class="col-lg-8">
                                                    <b>@StudentName</b>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input present" type="checkbox" name="attendence" id="present" value="" />
                                                        <label class="form-check-label" for="present">Present</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="checkbox" name="attendence" id="absent" value="option2" />
                                                        <label class="form-check-label" for="absent">Absent</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group form-row">
                                                <div class="col-lg-8">
                                                    <b>@StudentName</b>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input present" type="checkbox" name="attendence" id="present" value="" />
                                                        <label class="form-check-label" for="present">Present</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="checkbox" name="attendence" id="absent" value="option2" />
                                                        <label class="form-check-label" for="absent">Absent</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group form-row">
                                                <div class="col-lg-8">
                                                    <b>@StudentName</b>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input present" type="checkbox" name="attendence" id="present" value="" />
                                                        <label class="form-check-label" for="present">Present</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="checkbox" name="attendence" id="absent" value="option2" />
                                                        <label class="form-check-label" for="absent">Absent</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="/#" class="btn btn-warning" id="submit">Submit</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}