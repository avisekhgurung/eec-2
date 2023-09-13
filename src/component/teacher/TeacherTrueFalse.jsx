import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import '../css/teacherStyle.css';

export default class TeacherTrueFalse extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>True & False</h3>
                        </div>
                        <div class="container-fluid TrueFalse py-4">
                            <fieldset className="fieldset-border">
                                <legend className="legend-text mb-3">Create True & False</legend>
                                <form>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label">Question:</label>
                                        <div class="col-sm-6">
                                            <textarea class="form-control" placeholder="Write question problem here" name="question"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label">Select Option</label>
                                        <div class="col-sm-6">
                                            <select className="custom-select">
                                                <option selected>- Select Correct Optiom -</option>
                                                <option value="">True</option>
                                                <option value="">False</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <a href="/truefalse" className="btn btn-warning" id="submit">Add</a>
                                    </div>
                                </form>
                            </fieldset>
                            <br />
                            <br />
                            <center><h5 className="text-muted">Added True & False</h5></center>
                            <table class="table table-bordered table-striped">
                                <thead bgcolor="#ffc107">
                                    <tr>
                                        <th>No</th>
                                        <th>Question</th>
                                        <th>Correct Answer</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</td>
                                        <td>True</td>
                                        <td><i className="fa fa-edit"></i></td>
                                        <td><i className="fa fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</td>
                                        <td>False</td>
                                        <td><i className="fa fa-edit"></i></td>
                                        <td><i className="fa fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="9">
                                            <a className="btn btn-warning" id="submit" href="/studytype">Confirm</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}