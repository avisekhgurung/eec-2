import React from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

export default class MangFeedbacks extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <MangSidebar />
                    <div id="page-content-wrapper">
                        <MangNavbar />
                        <div class="sub-heading px-3 py-4">
                            <h3>List of Feedback</h3>
                        </div>
                        <div className="container-fluid Mang-Feedbacks py-4">
                            <div class="input-group col-lg-3 px-0 mb-3">
                                <DateRangePicker>
                                    <input type="text" className="form-control" />
                                </DateRangePicker>
                                <div class="input-group-append">
                                    <span class="input-group-text" id="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <ul class="nav nav-justified" id="" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active show" id="student-tab" data-toggle="tab" href="#student" role="tab" aria-controls="student" aria-selected="true">Students</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="teacher-tab" data-toggle="tab" href="#teacher" role="tab" aria-controls="teacher" aria-selected="false">Teachers</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="parent-tab" data-toggle="tab" href="#parent" role="tab" aria-controls="parent" aria-selected="false">Parents</a>
                                </li>
                            </ul>
                            <div class="tab-content py-4" id="advancedTabContent">
                                <div class="tab-pane fade show active" id="student" role="tabpanel" aria-labelledby="student-tab">

                                </div>
                                <div class="tab-pane fade" id="teacher" role="tabpanel" aria-labelledby="teacher-tab">
                                    2
                                    </div>
                                <div class="tab-pane fade" id="parent" role="tabpanel" aria-labelledby="parent-tab">
                                    <table class="table table-bordered">
                                        <thead bgcolor="#ffc107">
                                            <tr>
                                                <th>No</th>
                                                <th>Date</th>
                                                <th>Name</th>
                                                <th>E-Mail</th>
                                                <th>Subject</th>
                                                <th>Message</th>
                                                <th>Ratings</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>12-12-2021</td>
                                                <td>John Smith</td>
                                                <td>abc@gmail.com</td>
                                                <td>General Feedback</td>
                                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                                <td>10</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}