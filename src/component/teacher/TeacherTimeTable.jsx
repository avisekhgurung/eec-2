import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import '../css/teacherStyle.css';

export default class TeacherTimeTable extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Time Table</h3>
                        </div>
                        <div class="container-fluid Routine py-4">
                            <table class="table table-bordered">
                                <thead bgcolor="#ffc107">
                                    <tr>
                                        <th rowspan="2">Day</th>
                                        <th>I</th>
                                        <th>II</th>
                                        <th>III</th>
                                        <th>IV</th>
                                        <th></th>
                                        <th>V</th>
                                        <th>VI</th>
                                        <th>VII</th>
                                        <th>VIII</th>
                                    </tr>
                                    <tr>
                                        <td>10:00 - 10:45</td>
                                        <td>10:45 - 11:30</td>
                                        <td>11:30 - 12:15</td>
                                        <td>12:15 - 13:00</td>
                                        <td>13:00 - 13:30</td>
                                        <td>13:30 - 14:00</td>
                                        <td>14:00 - 14:30</td>
                                        <td>14:30 - 15:30</td>
                                        <td>15:30 - 16:00</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    </tr>
                                    <tr>
                                        <th>Monday</th>
                                        <td>
                                            <div class="dropdown">
                                                <p class="mb-0">@Subject Name</p>
                                                <div class="dropdown-content">
                                                    <a class="badge badge-warning" href="/subject">Attend</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td rowspan="6" class="text-center" id="brk">
                                            L  <br /> U <br /> N <br /> C <br /> H
                                            </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>Tuesday</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>Wednesday</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>Thursday</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>Friday</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>Saturday</th>
                                        <td></td>
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