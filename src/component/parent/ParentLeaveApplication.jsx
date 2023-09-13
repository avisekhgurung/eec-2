import React from 'react';
import ParentSidebar from './ParentSidebar';
import ParentNavbar from './ParentNavbar';
import '../css/main.css';
import '../css/parentStyle.css';

export default class ParentLeaveApplication extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <ParentSidebar />
                    <div id="page-content-wrapper">
                        <ParentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Leave Application</h3>
                        </div>
                        <div class="container-fluid Leave-Application py-4">
                            <div class="container">
                                <form>
                                    <fieldset class="fieldset-border">
                                        <legend class="legend-text">Request Form</legend>
                                        <div class="form-group row">
                                            <div class="col-lg-4">
                                                <label class="col-form-label">Request For</label>
                                            </div>
                                            <div class="col-lg-8">
                                                <input type="text" class="form-control" placeholder="Enter Applicant Name" name="RequestFor" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-lg-4">
                                                <label class="col-form-label">Number of Days Appling For</label>
                                            </div>
                                            <div class="col-lg-8">
                                                <input type="text" class="form-control" placeholder="Number of Days" name="RequestFor" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-lg-4">
                                                <label class="col-form-label">Leave From</label>
                                            </div>
                                            <div class="col-lg-8">
                                                <input type="date" class="form-control" name="LeaveFrom" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-lg-4">
                                                <label class="col-form-label">Leave To</label>
                                            </div>
                                            <div class="col-lg-8">
                                                <input type="date" class="form-control" name="LeaveTo" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-lg-4">
                                                <label class="col-form-label">Reason for Leave</label>
                                            </div>
                                            <div class="col-lg-8">
                                                <textarea class="form-control" placeholder="Write your reason here..." name="ReasonForLeave"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button class="btn btn-warning" id="submit">Submit</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}