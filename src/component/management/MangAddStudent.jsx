import React from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import '../css/mangStyle.css';

export default class MangAddStudent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <MangSidebar />
                    <div id="page-content-wrapper">
                        <MangNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Add Student</h3>
                        </div>
                        <div class="container-fluid Mang-Add-Teacher py-4">
                            <fieldset className="fieldset-border">
                                <legend className="legend-text">Student Information</legend>
                                <div className="row mb-3">
                                    <div className="col-lg-3">
                                        <label htmlFor="">ID</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Date of Admission</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Registration No</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Name</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-3">
                                        <label htmlFor="">Class</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Section</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Roll No</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Gender</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-3">
                                        <label htmlFor="">Date of Birth</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Mobile No</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">E-Mail</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Upload Photo <small class="text-danger">(150px x 150px)</small></label>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="customFile" name="teacherPic" />
                                            <label class="custom-file-label" for="customFile">Choose file</label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <br />
                            <fieldset className="fieldset-border">
                                <legend className="legend-text">Parent Information</legend>
                                <div className="row mb-3">
                                    <div className="col-lg-6">
                                        <label htmlFor="">Father Name</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Father Occupation</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Father DOB</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-3">
                                        <label htmlFor="">Father Mobile No</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Father E-Mail</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-6">
                                        <label htmlFor="">Mother Name</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Mother Occupation</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Mother DOB</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-3">
                                        <label htmlFor="">Mother Mobile No</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Mother E-Mail</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-lg-6">
                                        <label for="">Present Address</label>
                                        <textarea class="form-control" name="" id="" rows="2"></textarea>
                                    </div>
                                    <div class="col-lg-6">
                                        <label for="">Permanent Address</label>
                                        <textarea class="form-control" name="" id="" rows="2"></textarea>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-3">
                                        <label htmlFor="">Upload Parents Photo <small class="text-danger">(150px x 150px)</small></label>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="customFile" name="teacherPic" />
                                            <label class="custom-file-label" for="customFile">Choose file</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <label for="">Present Living Status</label><br />
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="" name="" value="" />
                                            <label class="form-check-label" for="">Father</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="" name="" value="" />
                                            <label class="form-check-label" for="">Mother</label>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-warning" href="/mang_student" id="submit">Submit</a>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </React.Fragment >

        )
    }
}