import React from 'react';
import ParentSidebar from './ParentSidebar';
import ParentNavbar from './ParentNavbar';
import '../css/main.css';
import '../css/parentStyle.css';

export default class ParentExmination extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <ParentSidebar />
                    <div id="page-content-wrapper">
                        <ParentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Exmination</h3>
                        </div>
                        <div class="container-fluid Examination py-4">
                            <div class="container py-3">
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <select class="form-control sort" name="" id="">
                                            <option selected="">Sort by Class</option>
                                            <option value="option1">V</option>
                                            <option value="option2">VI</option>
                                            <option value="option3">VII</option>
                                            <option value="option3">VIII</option>
                                            <option value="option4">IX</option>
                                            <option value="option4">X</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <select class="form-control sort" name="" id="">
                                            <option selected="">Sort by Subject</option>
                                            <option value="option1">Physics</option>
                                            <option value="option2">Chemistry </option>
                                            <option value="option3">Mathematics </option>
                                            <option value="option3">Biology </option>
                                            <option value="option4">History </option>
                                            <option value="option4">Geography </option>
                                        </select>
                                    </div>
                                </div>
                                <table class="table table-bordered">
                                    <thead bgcolor="#ffc107">
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Subject</th>
                                        <th>Exam Type</th>
                                        <th>Total Marks</th>
                                        <th>Scroed Marks</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}