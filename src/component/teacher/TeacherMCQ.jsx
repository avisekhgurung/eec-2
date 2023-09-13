import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import '../css/teacherStyle.css';

export default class TeacherMCQ extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div className="sub-heading px-3 py-2">
                            <h3>MCQ</h3>
                        </div>
                        <div className="container-fluid MCQ py-4">
                            <fieldset className="fieldset-border">
                                <legend className="legend-text mb-3">Create MCQ</legend>
                                <form>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label">Question:</label>
                                        <div class="col-sm-6">
                                            <textarea class="form-control" placeholder="Write question problem here" name="question"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label">Option 1:</label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" name="option1" placeholder="Option 1" required />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label">Option 2:</label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" name="option2" placeholder="Option 2" required />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label">Option 3:</label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" name="option3" placeholder="Option 3" required />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label">Option 4:</label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" name="option4" placeholder="Option 4" required />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label">Select Right option:</label>
                                        <div class="col-sm-6">
                                            <select name="right_option" class="custom-select">
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2 </option>
                                                <option value="option3">Option 3 </option>
                                                <option value="option4">Option 4 </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <a href="/mcq" className="btn btn-warning" id="submit">Add</a>
                                    </div>
                                </form>
                            </fieldset>
                            <br/>
                            <br/>
                            <center><h5 className="text-muted">Added MCQ</h5></center>
                            <table class="table table-bordered table-striped">
                                <thead bgcolor="#ffc107">
                                    <tr>
                                        <th>No</th>
                                        <th>Question</th>
                                        <th>Option 1</th>
                                        <th>Option 2</th>
                                        <th>Option 3</th>
                                        <th>Option 4</th>
                                        <th>Right Option</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</td>
                                        <td>Sample 1</td>
                                        <td>Sample 2</td>
                                        <td>Sample 3</td>
                                        <td>Sample 4</td>
                                        <td>Option A</td>
                                        <td><i className="fa fa-edit"></i></td>
                                        <td><i className="fa fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</td>
                                        <td>Sample 1</td>
                                        <td>Sample 2</td>
                                        <td>Sample 3</td>
                                        <td>Sample 4</td>
                                        <td>Option A</td>
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