import React from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import { Link } from 'react-router-dom';
import '../css/mangStyle.css';

export default class MangStudentDetails extends React.Component {
    render() {
        const edit = {
            color: '#343a40'
        }
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <MangSidebar />
                    <div id="page-content-wrapper">
                        <MangNavbar />
                        <div class="container-fluid Mang-Student-Details py-4">
                            <div class="container mt-3 mb-3">
                                <div className="form-row">
                                    <div className="col-lg-9">
                                        <h5>About @StduentName</h5>
                                    </div>
                                    <div className="col-lg-3 text-right">
                                        <Link to="/mang_add_student">
                                            <i className="fa fa-edit mr-3" style={edit}></i>
                                        </Link>
                                        <Link to="">
                                            <i className="fa fa-print" style={edit}></i>
                                        </Link>
                                    </div>
                                </div>
                                <hr className="mt-0" />
                                <h6 className="bg-light p-2">Student Information :</h6>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <center>
                                            <img class="rounded-circle p-2" style={{ border: '2px solid #ffc107' }} src="https://fakeimg.pl/150x150/" alt="Student Details" />
                                        </center>
                                    </div>
                                    <div className="col-lg-8">
                                        <table className="table table-borderless">
                                            <tr>
                                                <td>ID</td>
                                                <th>098</th>
                                            </tr>
                                            <tr>
                                                <td>Admission No</td>
                                                <th>0987</th>
                                            </tr>
                                            <tr>
                                                <td>Name</td>
                                                <th>John Smith</th>
                                            </tr>
                                            <tr>
                                                <td>Class</td>
                                                <th>V</th>
                                            </tr>
                                            <tr>
                                                <td>Section</td>
                                                <th>B</th>
                                            </tr>
                                            <tr>
                                                <td>Roll No</td>
                                                <th>09</th>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <th>Male</th>
                                            </tr>
                                            <tr>
                                                <td>DOB</td>
                                                <th>12-12-2021</th>
                                            </tr>
                                            <tr>
                                                <td>Mobile No</td>
                                                <th>0987654321</th>
                                            </tr>
                                            <tr>
                                                <td>E-Mail</td>
                                                <th>abc@gmail.com</th>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <br />
                                <h6 className="bg-light p-2">Parent Information :</h6>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <center>
                                            <img class="rounded-circle p-2" style={{ border: '2px solid #ffc107' }} src="https://fakeimg.pl/150x150/" alt="Student Details" />
                                        </center>
                                    </div>
                                    <div className="col-lg-8">
                                        <table className="table table-borderless">
                                            <tr>
                                                <td>Father Name</td>
                                                <th>Mathew Smith</th>
                                            </tr>
                                            <tr>
                                                <td>Father Occupation</td>
                                                <th>Businessman</th>
                                            </tr>
                                            <tr>
                                                <td>Father DOB</td>
                                                <th>12-12-1978</th>
                                            </tr>
                                            <tr>
                                                <td>Father Mobile No</td>
                                                <th>0987654321</th>
                                            </tr>
                                            <tr>
                                                <td>Father E-Mail</td>
                                                <th>abc@gmail.com</th>
                                            </tr>
                                            <tr>
                                                <td>Mother Name</td>
                                                <th>Mathew Smith</th>
                                            </tr>
                                            <tr>
                                                <td>Mother Occupation</td>
                                                <th>House Wife</th>
                                            </tr>
                                            <tr>
                                                <td>Mother DOB</td>
                                                <th>12-12-1978</th>
                                            </tr>
                                            <tr>
                                                <td>Mother Mobile No</td>
                                                <th>0987654321</th>
                                            </tr>
                                            <tr>
                                                <td>Mother E-Mail</td>
                                                <th>abc@gmail.com</th>
                                            </tr>
                                            <tr>
                                                <td>Present Address</td>
                                                <th>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</th>
                                            </tr>
                                            <tr>
                                                <td>Permanent Address</td>
                                                <th>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</th>
                                            </tr>
                                            <tr>
                                                <td>Present Living Status</td>
                                                <th>Both</th>
                                            </tr>
                                            <tr>
                                                <td>Siblings</td>
                                                <th>No</th>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >

        )
    }
}