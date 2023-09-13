import React from 'react';
import '../css/main.css';
import '../css/parentStyle.css';
import ParentSidebar from './ParentSidebar';
import ParentNavbar from './ParentNavbar';

export default class ParentDashboard extends React.Component {
    constructor() {
        super();
        var today = new Date();
        var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        var mm = months[today.getMonth()];
        var day = week[today.getDay()];
        var hour = today.getHours();
        var min = today.getMinutes(),
            date = day + ' , ' + mm + ' ' + today.getDate() + ' , ' + today.getFullYear() + ' , ' + hour + ':' + min;

        this.state = {
            date: date
        };
    }
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <ParentSidebar />
                    <div id="page-content-wrapper" className="dB">
                        <ParentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h5>Dashboard</h5>
                            <label id="" class="font-weight-normal mb-0">{this.state.date}</label>
                        </div>
                        <div class="container-fluid Parent-Dashboard p-4">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="small-box fees mb-3">
                                                <div class="icon">
                                                    <i class="fas fa-rupee-sign"></i>
                                                </div>
                                                <div class="text">
                                                    <h2><strong>15000</strong></h2>
                                                    <p>Due Fees</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="small-box exams mb-3">
                                                <div class="icon">
                                                    <i class="fas fa-book-reader"></i>
                                                </div>
                                                <div class="text">
                                                    <h2><strong>6</strong></h2>
                                                    <p>Upcoming Exams</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /#Row SmallBox */}
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="small-box result mb-3">
                                                <div class="icon">
                                                    <i class="fas fa-user-graduate"></i>
                                                </div>
                                                <div class="text">
                                                    <h2><strong>17</strong></h2>
                                                    <p>Result Published</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="small-box expenses mb-3">
                                                <div class="icon">
                                                    <i class="fas fa-rupee-sign"></i>
                                                </div>
                                                <div class="text">
                                                    <h2><strong>50067</strong></h2>
                                                    <p>Total Expenses</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /#Row SmallBox */}
                                    <div class="card mb-3">
                                        <div class="card-header">
                                            <h5 class="card-title float-left mb-0">Notice Board</h5>
                                            <div class="card-tools float-right">
                                                <button type="button" class="btn btn-tool" data-toggle="collapse" href="#noticeBoard" aria-expanded="false" aria-controls="noticeBoard">
                                                    <i class="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="collapse show" id="noticeBoard">
                                            <ul class="px-2">
                                                <li class="notice py-2">
                                                    <time class="date">May 16, 2020
											</time>
                                                    <label>John Smith
												&nbsp;&nbsp;<small class="timing">9 min ago</small>
                                                    </label>
                                                    <span class="text">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    </span>
                                                </li>
                                                <li class="notice py-2">
                                                    <time class="date">May 16, 2020
											</time>
                                                    <label>William Henry
												&nbsp;&nbsp;<small class="timing">9 min ago</small>
                                                    </label>
                                                    <span class="text">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    </span>
                                                </li>
                                                <li class="notice py-2">
                                                    <time class="date">May 16, 2020
											</time>
                                                    <label>James Rodregez
												&nbsp;&nbsp;<small class="timing">9 min ago</small>
                                                    </label>
                                                    <span class="text">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    </span>
                                                </li>
                                                <li class="notice py-2">
                                                    <time class="date">May 16, 2020
											</time>
                                                    <label>Joseph Stark
												&nbsp;&nbsp;<small class="timing">9 min ago</small>
                                                    </label>
                                                    <span class="text">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* /#Col-lg Left */}
                                <div class="col-lg-6">
                                    <div class="card mb-3">
                                        <div class="card-header">
                                            <h5 class="card-title float-left mb-0">@Children Name</h5>
                                            <div class="card-tools float-right">
                                                <button type="button" class="btn btn-tool" data-toggle="collapse" href="#childrenDetails" aria-expanded="false" aria-controls="childrenDetails">
                                                    <i class="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="collapse show" id="childrenDetails">
                                            <div class="row">
                                                <div class="col-lg-5">
                                                    <div class="child-img text-center p-3">
                                                        <img src="https://via.placeholder.com/200" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-7">
                                                    <div class="form-row">
                                                        <div class="col-sm-6">
                                                            <label>Name:</label>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <strong>John Smith</strong>
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="col-sm-6">
                                                            <label>Gender:</label>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <strong>Male</strong>
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="col-sm-6">
                                                            <label>Roll:</label>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <strong>22</strong>
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="col-sm-6">
                                                            <label>Admission ID:</label>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <strong>ADM0987</strong>
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="col-sm-6">
                                                            <label>Admission Date:</label>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <strong>12th, January 2021</strong>
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="col-sm-6">
                                                            <label>Class:</label>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <strong>5</strong>
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="col-sm-6">
                                                            <label>Section:</label>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <strong>B</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /#Children Details */}
                                    <div class="card mb-3">
                                        <div class="card-header">
                                            <h5 class="card-title float-left mb-0">Expenses</h5>
                                            <div class="card-tools float-right">
                                                <button type="button" class="btn btn-tool" data-toggle="collapse" href="#expensesDetails" aria-expanded="false" aria-controls="expensesDetails">
                                                    <i class="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="collapse show" id="expensesDetails">
                                            <table class="table">
                                                <thead>
                                                    <th>ID</th>
                                                    <th>Expense Type</th>
                                                    <th>Amount</th>
                                                    <th>Status</th>
                                                    <th>Email</th>
                                                    <th>Date</th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>0987</td>
                                                        <th>Admission Fee</th>
                                                        <th>50000</th>
                                                        <th><span class="badge badge-warning">Due</span></th>
                                                        <th>info@abc.com</th>
                                                        <th>12-02-21</th>
                                                    </tr>
                                                    <tr>
                                                        <td>0987</td>
                                                        <th>Admission Fee</th>
                                                        <th>50000</th>
                                                        <th><span class="badge badge-success">Paid</span></th>
                                                        <th>info@abc.com</th>
                                                        <th>12-02-21</th>
                                                    </tr>
                                                    <tr>
                                                        <td>0987</td>
                                                        <th>Admission Fee</th>
                                                        <th>50000</th>
                                                        <th><span class="badge badge-warning">Due</span></th>
                                                        <th>info@abc.com</th>
                                                        <th>12-02-21</th>
                                                    </tr>
                                                    <tr>
                                                        <td>0987</td>
                                                        <th>Admission Fee</th>
                                                        <th>50000</th>
                                                        <th><span class="badge badge-success">Paid</span></th>
                                                        <th>info@abc.com</th>
                                                        <th>12-02-21</th>
                                                    </tr>
                                                    <tr>
                                                        <td>0987</td>
                                                        <th>Admission Fee</th>
                                                        <th>50000</th>
                                                        <th><span class="badge badge-warning">Due</span></th>
                                                        <th>info@abc.com</th>
                                                        <th>12-02-21</th>
                                                    </tr>
                                                    <tr>
                                                        <td>0987</td>
                                                        <th>Admission Fee</th>
                                                        <th>50000</th>
                                                        <th><span class="badge badge-success">Paid</span></th>
                                                        <th>info@abc.com</th>
                                                        <th>12-02-21</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* /#Col-lg Right */}
                            </div>
                            {/* /#Row */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}