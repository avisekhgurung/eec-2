import React from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import MangTableSort from './MangTableSort';
import { Link } from 'react-router-dom';
import '../css/mangStyle.css';

export default class MangStudent extends React.Component {
    render() {
        const submit = {
            width: 'auto',
            minHeight: 'auto',
            fontSize: '16px'
        }
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <MangSidebar />
                    <div id="page-content-wrapper">
                        <MangNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Our Student</h3>
                            <div class="text-right">
                                <a class="btn btn-warning btn-sm" id="submit" href="/mang_add_student" style={submit}>Add Student</a>
                            </div>
                        </div>
                        <div class="container-fluid Mang-Students py-4">
                            <MangTableSort />
                            <table class="table table-bordered">
                                <thead bgcolor="#ffc107">
                                    <th>
                                        <input type="checkbox" className="mr-2" />
                                        ID
                                    </th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>DOB</th>
                                    <th>Admission No</th>
                                    <th>Class</th>
                                    <th>Section</th>
                                    <th>Roll No</th>
                                    <th>Mobile</th>
                                    <th>E-Mail</th>
                                    <th>Action</th>
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
                                        <td>Male</td>
                                        <td>12/12/1996</td>
                                        <td>ADM987</td>
                                        <td>V</td>
                                        <td>B</td>
                                        <td>09</td>
                                        <td>0987654321</td>
                                        <td>john@gmail.com</td>
                                        <td className="justify-content-between">
                                            <Link to="/mang_student_details">
                                                <i className="fa fa-eye mr-2"></i>
                                            </Link>
                                            <Link to="/mang_add_student">
                                                <i className="fa fa-edit mr-2"></i>
                                            </Link>
                                            <i className="fa fa-trash"
                                                style={{ cursor: 'pointer' }}></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}