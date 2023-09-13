import React from 'react';
import StudentNavbar from './StudentNavbar';
import StudentSidebar from './StudentSidebar';
import '../css/studentStyle.css';

export default class StudentProfile extends React.Component {
    render() {
        const style = {
            height: '200px',
            width: '200px',
            position: 'relative',
            border: '10px solid #018492',
            borderRadius: '50%',
            backgroundSize: '100% 100%',
            backgroundImage: `url("images/dp.png")`,
            overflow: 'hidden'
        }
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <StudentSidebar />
                    <div id="page-content-wrapper">
                        <StudentNavbar />
                        <div class="container mt-3">
                            <div class="row">
                                <div class="col-lg-11 col-md-11 col-sm-11">
                                    <center>
                                        <div class="profile">
                                            <img src="" alt="" style={style} />
                                        </div>
                                        <hr class="col-sm-6" style={{ borderTop: '6px solid #ffc107' }} />
                                        <h5>@StudentName</h5>
                                        <div className="form-row">
                                            <div className="col-lg-4">
                                                <h6>Class : X</h6>
                                            </div>
                                            <div className="col-lg-4">
                                                <h6>Section : B</h6>
                                            </div>
                                            <div className="col-lg-4">
                                                <h6>Subject : Math</h6>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                                <div class="col-lg-1 col-md-1 col-sm-1">
                                    <ul class="list-group list-group-flush">
                                        <a href="/#">
                                            <img src="images/icon/12.png" id="logoLeft" data-toggle="tooltip" data-placement="left" title="Sample" alt="" />
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <hr />
                            <form name="" action="" method="POST">
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label"><b>ID</b></label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="ID" name="studentID" id="" readOnly />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label"><b>Roll No</b></label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="Roll No" name="studentRollNo" id="" readOnly />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label"><b>Admission No</b></label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="Admission No" name="studentAdmissionNo" id="" readOnly />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label"><b>Name</b></label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="Name" name="studentName" id="" required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label"><b>Gender</b></label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="Gender" name="studentGender" id="" required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label"><b>D.O.B</b></label>
                                    <div class="col-sm-6">
                                        <input type="date" class="form-control" name="studentDOB" id="" required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label"><b>Religion</b></label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder=" Religion" name="studentReligion" id="" required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label"><b>Phone No</b></label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder=" Phone No" name="studentPhoneNo" id="" required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label"><b>E-Mail</b></label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="E-Mail" name="studentEMail" id="" required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label"><b>Present Address</b></label>
                                    <div class="col-sm-6">
                                        <textarea type="text" class="form-control" placeholder="PresentAddress" name="PresentAddress" id="" required></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label"><b>Permanent Address</b></label>
                                    <div class="col-sm-6">
                                        <textarea type="text" class="form-control" placeholder="Permanent Address" name="PermanentAddress" id="" required></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label"><b>Upload Photo <small class="text-danger">(150px x 150px)</small></b></label>
                                    <div class="col-sm-6">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="customFile" name="studentPic" />
                                            <label class="custom-file-label" for="customFile">Choose file</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input class="btn btn-warning" type="submit" id="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}