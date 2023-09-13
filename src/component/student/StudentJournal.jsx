import React from 'react';
import StudentNavbar from './StudentNavbar';
import StudentSidebar from './StudentSidebar';

export default class StudentJournal extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <StudentSidebar />
                    <div id="page-content-wrapper">
                        <StudentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Journal</h3>
                        </div>
                        <div class="container Journal py-4">
                            <fieldset className="fieldset-border">
                                <legend className="legend-text">Create a New Journal</legend>
                                <div className="form-row form-group">
                                    <div className="col-lg-4">
                                        <label htmlFor="" className="col-form-label">Date</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input text="date" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-lg-4">
                                        <label htmlFor="" className="col-form-label">How was my day?</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-lg-4">
                                        <label htmlFor="" className="col-form-label">What did I learn today?</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Subject 1</span>
                                            </div>
                                            <input type="text" class="form-control"></input>
                                        </div>
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Subject 2</span>
                                            </div>
                                            <input type="text" class="form-control"></input>
                                        </div>
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Subject 3</span>
                                            </div>
                                            <input type="text" class="form-control"></input>
                                        </div>
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Subject 4</span>
                                            </div>
                                            <input type="text" class="form-control"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-lg-4">
                                        <label htmlFor="" className="col-form-label">How did I feel about the subject today? </label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-lg-4">
                                        <label htmlFor="" className="col-form-label">Which was my favorite part today?</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-lg-4">
                                        <label htmlFor="" className="col-form-label">Which was my least favorite part today?</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-lg-4">
                                        <label htmlFor="" className="col-form-label">How can I improve myself in other subjects?</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-lg-4">
                                        <label htmlFor="" className="col-form-label">Which subject parts did I understand?</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-lg-4">
                                        <label htmlFor="" className="col-form-label">Which subject part I did not understand? </label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-lg-4">
                                        <label htmlFor="" className="col-form-label">What questions from which subject do you want to discuss tomorrow?</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-lg-4">
                                        <label htmlFor="" className="col-form-label">How I feel about my teachers?</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-lg-4">
                                        <label htmlFor="" className="col-form-label">How I feel about my school?</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-lg-4">
                                        <label htmlFor="" className="col-form-label">My references?</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-lg-4">
                                        <label htmlFor="" className="col-form-label">My important points to remember !!</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-lg-4">
                                        <label htmlFor="" className="col-form-label">My important notes !!</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-lg-4">
                                        <label htmlFor="" className="col-form-label">My new words !!</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                            </fieldset>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}