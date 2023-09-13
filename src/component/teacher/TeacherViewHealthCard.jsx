import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import '../css/teacherStyle.css';

export default class TeacherViewHealthCard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>@Stduent Health Report</h3>
                        </div>
                        <div class="container-fluid Teacher-ViewHealthCard py-4">
                            <div className="row">
                                <div className="col-lg-5">
                                    <table className="table table-borderless">
                                        <tr>
                                            <td width="50%">Class</td>
                                            <th>V</th>
                                        </tr>
                                        <tr>
                                            <td>Section</td>
                                            <th>B</th>
                                        </tr>
                                        <tr>
                                            <td>Roll No</td>
                                            <th>09</th>
                                        </tr>
                                        <tr>
                                            <td>Blood Group</td>
                                            <th>B+</th>
                                        </tr>
                                    </table>
                                </div>
                                <div className="col-lg-7">
                                    <table className="table table-borderless">
                                        <tr>
                                            <td width="50%">H/O Any Allergies (If Yes Specify)</td>
                                            <th>No</th>
                                        </tr>
                                        <tr>
                                            <td>H/O Any Convulsions/Fits</td>
                                            <th>No</th>
                                        </tr>
                                        <tr>
                                            <td>H/O Bleeding Disorder / Heart Disease / Diabetes</td>
                                            <th>No</th>
                                        </tr>
                                        <tr>
                                            <td>H/O Bronchial Asthma / Other Breathing Problems</td>
                                            <th>No</th>
                                        </tr>
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