import React from 'react';
import StudentNavbar from './StudentNavbar';
import StudentSidebar from './StudentSidebar';

export default class StudentPHR extends React.Component {
    render() {
        const style = {
            width: 'calc(100% - 60%)'
        }
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <StudentSidebar />
                    <div id="page-content-wrapper">
                        <StudentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Health Card</h3>
                        </div>
                        <div class="container-fluid Student-HealthCard py-4">
                            <div class="container">
                                <div class="row justify-content-md-center">
                                    <div class="col-md-8">
                                        <fieldset className="fieldset-border">
                                            <legend className="legend-text" style={style}>Manage Health Card</legend>
                                            <form class="form-signin">
                                                <div class="form-group">
                                                    <label>Name</label>
                                                    <input type="text" id="" class="form-control" />
                                                </div>
                                                <div class="form-group">
                                                    <label>Class</label>
                                                    <input type="text" id="" class="form-control" />
                                                </div>
                                                <div class="form-label-group">
                                                    <label>Section</label>
                                                    <input type="text" id="" class="form-control" />
                                                </div>
                                                <div class="form-group">
                                                    <label>Roll No</label>
                                                    <input type="text" id="" class="form-control" />
                                                </div>
                                                <div class="form-group">
                                                    <label>Blood Group</label>
                                                    <input type="text" id="" class="form-control" />
                                                </div>
                                                <div class="form-group">
                                                    <label>H/O Any Allergies (If Yes Specify)</label>
                                                    <input type="text" id="" class="form-control" />
                                                </div>
                                                <div class="form-group">
                                                    <label>H/O Any Convulsions/Fits</label>
                                                    <input type="text" id="" class="form-control" />
                                                </div>
                                                <div class="form-group">
                                                    <label>H/O Bleeding Disorder / Heart Disease / Diabetes</label>
                                                    <input type="text" id="" class="form-control" />
                                                </div>
                                                <div class="form-group">
                                                    <label>H/O Bronchial Asthma / Other Breathing Problems</label>
                                                    <input type="text" id="" class="form-control" />
                                                </div>
                                                <center>
                                                    <button class="btn btn-warning" id="submit">Save</button>
                                                </center>
                                            </form>
                                        </fieldset>
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