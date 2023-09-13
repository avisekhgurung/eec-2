import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import '../css/teacherStyle.css';

export default class TeacherLessonPlan extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Lesson Plan</h3>
                            <div class="text-right">
                                <a class="btn btn-warning btn-sm" id="submit" href="/teacher_addlessonplan">Add New Plan</a>
                            </div>
                        </div>
                        <div class="container-fluid Lesson-Plan py-4">
                            <h5 class="text-center text-muted">Class : @Class</h5>
                            <div class="d-flex justify-content-between">
                                <h6 class="text-muted">Section : @Sec</h6>
                                <h6 class="text-muted">Subject : @Sub</h6>
                            </div>
                            <div className="table-section">
                                <table class="table table-bordered">
                                    <thead bgcolor="#ffc107">
                                        <tr>
                                            <th rowSpan="2">Date</th>
                                            <th rowSpan="2">Timing</th>
                                            <th rowSpan="2">Chapter</th>
                                            <th rowSpan="2">Topic</th>
                                            <th rowSpan="2">Lesson Type</th>
                                            <th colSpan="2" className="text-center">Introduction</th>
                                            <th colSpan="2" className="text-center">Explanation</th>
                                            <th colSpan="5" className="text-center">Recapitulation</th>
                                        </tr>
                                        <tr>
                                            <th>Details</th>
                                            <th>Time</th>
                                            <th>Details</th>
                                            <th>Time</th>
                                            <th>Classwork</th>
                                            <th>Homework</th>
                                            <th>Tryout</th>
                                            <th>Retrieval Practice</th>
                                            <th>Assesment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>13:08:21</th>
                                            <td>12:00 - 13:00</td>
                                            <td>Sample</td>
                                            <td>Sample</td>
                                            <td>Sample</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                            <td>15min</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                            <td>15min</td>
                                            <td>MCQ, FB</td>
                                            <td>FB</td>
                                            <td>N/a</td>
                                            <td>N/a</td>
                                            <td>N/a</td>
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