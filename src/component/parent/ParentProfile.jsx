import React from 'react';
import ParentSidebar from './ParentSidebar';
import ParentNavbar from './ParentNavbar';
import '../css/main.css';
import '../css/parentStyle.css';

export default class ParentProfile extends React.Component {
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
        const hr={
            borderWidth: '5px',
        }
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <ParentSidebar />
                    <div id="page-content-wrapper">
                        <ParentNavbar />
                        <div class="container-fluid Profile py-4">
                            <div class="container mt-3">
                                <div class="row">
                                    <div class="col-lg-11 col-md-11 col-sm-11">
                                        <center>
                                            <div class="profile">
                                                <img src="" alt="" style={style} />
                                            </div>
                                            <hr class="col-sm-6" style={{ borderTop: '6px solid #ffc107' }} />
                                            <h5>Parent Name</h5>
                                            <h5>Parent Name</h5>
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
                                <form name="" action="" method="POST">
                                    <h5>Father Details</h5>
                                    <hr class="mt-0" style={hr} />
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label"><b>Father Name</b></label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" placeholder="Father Name" name="FatherName" id="" required />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label"><b>Occupation</b></label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" placeholder="Occupation" name="FatherOccupation" id="" required />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label"><b>D.O.B</b></label>
                                        <div class="col-sm-6">
                                            <input type="date" class="form-control" name="FatherDOB" id="" required />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label"><b>Phone No</b></label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" placeholder=" Phone No" name="FatherPhoneNo" id="" required />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label"><b>E-Mail</b></label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" placeholder="E-Mail" name="FatherE_Mail" id="" required />
                                        </div>
                                    </div>
                                    <h5>Mother Details</h5>
                                    <hr class="mt-0" style={hr} />
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label"><b>Mother Name</b></label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" placeholder="Mother Name" name="MotherName" id="" required />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label"><b>Occupation</b></label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" placeholder="Occupation" name="MotherOcupation" id="" required />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label"><b>D.O.B</b></label>
                                        <div class="col-sm-6">
                                            <input type="date" class="form-control" name="MotherDOB" id="" required />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label"><b>Phone No.</b></label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" placeholder="Phone No" name="MotherPhoneNo" id="" required />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label"><b>E-Mail</b></label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" placeholder="E-Mail" name="MotherE_Mail" id="" required />
                                        </div>
                                    </div>
                                    <hr style={hr} />
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
                                        <label for="" class="col-sm-6 col-form-label"><b>Upload Parents Photo <small class="text-danger">(150px x 150px)</small></b></label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" placeholder="Enter your Pin Code" name="" id="" required />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input class="btn btn-warning" type="submit" id="submit" value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}