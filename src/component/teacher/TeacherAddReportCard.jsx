import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import '../css/teacherStyle.css';

export default class TeacherAddReportCard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>New Report Card</h3>
                        </div>
                        <div class="container-fluid Teacher-AddReportCard py-4">
                            <fieldset class="fieldset-border">
                                <legend class="legend-text mb-3">Create New Report Card</legend>
                                <form>
                                    <div className="form-group row">
                                        <div className="col-lg-4">
                                            <label htmlFor="">ID</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control" name="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-4">
                                            <label htmlFor="">Name</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control" name="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-4">
                                            <label htmlFor="">Class</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control" name="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-4">
                                            <label htmlFor="">Section</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control" name="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-4">
                                            <label htmlFor="">Roll No</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control" name="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-4">
                                            <label htmlFor="">Session</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control" name="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                            <label>Attendence</label>
                                        </div>
                                        <div class="col-lg-8">
                                            <input type="text" class="form-control" name="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                            <label>Total Number of Days</label>
                                        </div>
                                        <div class="col-lg-8">
                                            <input type="text" class="form-control" name="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                            <label>Class Teacher</label>
                                        </div>
                                        <div class="col-lg-8">
                                            <input type="text" class="form-control" name="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                            <label>Remarks</label>
                                        </div>
                                        <div class="col-lg-8">
                                            <textarea className="form-control" name="" id=""></textarea>
                                        </div>
                                    </div>
                                    <h5>Skils and Ablities</h5>
                                    <hr style={{ borderColor: '#ffc107', borderWidth: '2px' }} />
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                            <label>Writting</label>
                                        </div>
                                        <div class="col-lg-8">
                                            <input type="text" class="form-control" name="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                            <label>Reading</label>
                                        </div>
                                        <div class="col-lg-8">
                                            <input type="text" class="form-control" name="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                            <label>Speaking</label>
                                        </div>
                                        <div class="col-lg-8">
                                            <input type="text" class="form-control" name="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                            <label>Arts</label>
                                        </div>
                                        <div class="col-lg-8">
                                            <input type="text" class="form-control" name="" />
                                        </div>
                                    </div>
                                    <h5>Personality and Character</h5>
                                    <hr style={{ borderColor: '#ffc107', borderWidth: '2px' }} />
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                            <label>Friendly and Courteous</label>
                                        </div>
                                        <div class="col-lg-8">
                                            <input type="text" class="form-control" name="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                            <label>Punctual</label>
                                        </div>
                                        <div class="col-lg-8">
                                            <input type="text" class="form-control" name="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                            <label>Clean and Orderly</label>
                                        </div>
                                        <div class="col-lg-8">
                                            <input type="text" class="form-control" name="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                            <label>Attentive</label>
                                        </div>
                                        <div class="col-lg-8">
                                            <input type="text" class="form-control" name="" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <a href="/teacher_reportcard" class="btn btn-warning" id="submit">Submit</a>
                                    </div>
                                </form>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}