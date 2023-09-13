import React from 'react';
import TeacherNavbar from './TeacherNavbar';
import TeacherSidebar from './TeacherSidebar';

export default class TeacherViewReportCard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div class="container-fluid Teacher-ViewReportCard py-4">
                            <div className="container">
                                <div className="bg-warning text-center py-5">
                                    <h1>@School Name</h1>
                                    <h3 className="text-white">Report Card</h3>
                                </div>
                                <br />
                                <div className="form-group row">
                                    <div className="col-lg-2">
                                        <label>Name :</label>
                                    </div>
                                    <div className="col-lg-4">
                                        <b>John Smith</b>
                                    </div>
                                    <div className="col-lg-2">
                                        <label>Roll No :</label>
                                    </div>
                                    <div className="col-lg-4">
                                        <b>13</b>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-lg-2">
                                        <label>Class :</label>
                                    </div>
                                    <div className="col-lg-4">
                                        <b>I</b>
                                    </div>
                                    <div className="col-lg-2">
                                        <label>Section :</label>
                                    </div>
                                    <div className="col-lg-4">
                                        <b>B</b>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-lg-2">
                                        <label>Attendence :</label>
                                    </div>
                                    <div className="col-lg-4">
                                        <b>79</b>
                                    </div>
                                    <div className="col-lg-2">
                                        <label>Total Days :</label>
                                    </div>
                                    <div className="col-lg-4">
                                        <b>80</b>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-lg-2">
                                        <label>Class Teacher :</label>
                                    </div>
                                    <div className="col-lg-4">
                                        <b>Mr. Charlee Clark</b>
                                    </div>
                                    <div className="col-lg-2">
                                        <label>Reamarks :</label>
                                    </div>
                                    <div className="col-lg-4">
                                        <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quis at, nemo, natus, suscipit sed tempore sunt nihil exercitationem.</b>
                                    </div>
                                </div>
                                <table className="table table-bordered">
                                    <thead bgcolor="#ffc107">
                                        <th colSpan="2"><h5>Skils and Ablities</h5></th>
                                    </thead>
                                    <tr>
                                        <td>Writting</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Reading</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Speaking</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Arts</td>
                                        <td></td>
                                    </tr>
                                </table>
                                <table className="table table-bordered">
                                    <thead bgcolor="#ffc107">
                                        <th colSpan="2"><h5>Personality and Character</h5></th>
                                    </thead>
                                    <tr>
                                        <td>Friendly and Courteous</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Punctual</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Clean and Orderly</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Attentive</td>
                                        <td></td>
                                    </tr>
                                </table>
                                <br />
                                <h5><b>Grading  System:</b></h5>
                                <div className="form-row">
                                    <div className="col-lg-3">
                                        <label htmlFor="">AA = Outstanding</label>
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">A+ = Excellent</label>
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">A = Very Good</label>
                                    </div>
                                    <div className="col-lg-3 text-right">
                                        <label htmlFor="">B = Good</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-3">
                                        <label htmlFor="">C = Satisfactory</label>
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">D = Fair</label>
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">E = Need Improvement</label>
                                    </div>
                                    <div className="col-lg-3 text-right">
                                        <label htmlFor="">F = Unable Cope With The Class</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}