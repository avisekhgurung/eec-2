import React from 'react';
import StudentNavbar from './StudentNavbar';
import StudentSidebar from './StudentSidebar';

export default class StudentComplaintEnquiry extends React.Component {
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
                            <h3>Complaint & Enquiry</h3>
                        </div>
                        <div class="container-fluid ComplaintEnquiry py-4">
                            <div class="container">
                                <div class="row justify-content-md-center">
                                    <div class="col-md-8">
                                        <fieldset className="fieldset-border">
                                            <legend className="legend-text" style={style}>Make new Complaint</legend>
                                            <form class="form-signin">
                                                <div class="form-label-group">
                                                    <label>Name</label>
                                                    <input type="email" id="inputBox" class="form-control" />
                                                </div><br />
                                                <div class="form-label-group">
                                                    <label>Email Id</label><br />
                                                    <input type="email" id="inputBox" class="form-control" />
                                                </div><br />
                                                <div class="form-label-group">
                                                    <label>Comaplaint</label>
                                                    <select class="form-control" id="selectBox"></select>

                                                </div><br />
                                                <div class="form-label-group">
                                                    <label for="inputPassword">Write</label>
                                                    <textarea class="form-control" id="msgBox"></textarea>
                                                </div><br />
                                                <div class="form-label-group">
                                                    <input type="radio" name="" /><label> &nbsp;&nbsp;Anonymous</label>
                                                </div><br />
                                                <center>
                                                    <button class="btn btn-warning" id="submit">Submit</button>
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