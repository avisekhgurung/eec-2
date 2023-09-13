import React from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import MangTableSort from './MangTableSort';
import '../css/mangStyle.css';
import { Link } from 'react-router-dom';

export default class MangParent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <MangSidebar />
                    <div id="page-content-wrapper">
                        <MangNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Our Parents</h3>
                        </div>
                        <div class="container-fluid Mang-Parents py-4">
                            <MangTableSort />
                            <div className="table-section">
                                <table class="table table-bordered">
                                    <thead bgcolor="#ffc107">
                                        <tr>
                                            <th rowSpan="2">
                                                <input type="checkbox" className="mr-2" />
                                            ID
                                        </th>
                                            <th>Photo</th>
                                            <th>Father Name</th>
                                            <th>Mobile No</th>
                                            <th>Mother Name</th>
                                            <th>Mobile No</th>
                                            <th>Admission No</th>
                                            <th>Student Name</th>
                                            <th>Class</th>
                                            <th>Section</th>
                                            <th>Roll No</th>
                                            <th>Address</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="checkbox" className="mr-2" />
                                            432
                                        </td>
                                            <td>
                                                <img src="https://fakeimg.pl/40/" className="rounded-circle" alt="" />
                                            </td>
                                            <td>John Smith</td>
                                            <td>0987654321</td>
                                            <td>Julia Smith</td>
                                            <td>0987654321</td>
                                            <td>ADM0987</td>
                                            <td>Charlee Smith</td>
                                            <td>V</td>
                                            <td>B</td>
                                            <td>09</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                            <td className="justify-content-between">
                                                <Link to="/mang_student_details">
                                                    <i className="fa fa-eye mr-2"></i>
                                                </Link>
                                                <Link to="/mang_add_student">
                                                    <i className="fa fa-edit mr-2"></i>
                                                </Link>
                                                <Link to="">
                                                    <i className="fa fa-trash"></i>
                                                </Link>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}