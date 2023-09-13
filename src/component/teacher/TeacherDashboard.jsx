import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import '../css/teacherStyle.css';

export default class TeacherDashboard extends React.Component {
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
                    <TeacherSidebar />
                    <div id="page-content-wrapper" className="dB">
                        <TeacherNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h5>Dashboard</h5>
                            <label id="" class="font-weight-normal mb-0">{this.state.date}</label>
                        </div>
                        <div class="container-fluid Teacher-Dashboard p-4">
                            <div class="row">
                                <div class="col-lg-3">
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
                                <div class="col-lg-3">
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
                                <div class="col-lg-3">
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
                                <div class="col-lg-3">
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
                            <div class="row">
                                <div class="col-lg-6">
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
                                                    <time class="date">May 16, 2020</time>
                                                    <label>John Smith&nbsp;&nbsp;
                                                        <small class="timing">9 min ago</small>
                                                    </label>
                                                    <span class="text">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    </span>
                                                </li>
                                                <li class="notice py-2">
                                                    <time class="date">May 16, 2020</time>
                                                    <label>William Henry&nbsp;&nbsp;
                                                        <small class="timing">9 min ago</small>
                                                    </label>
                                                    <span class="text">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    </span>
                                                </li>
                                                <li class="notice py-2">
                                                    <time class="date">May 16, 2020</time>
                                                    <label>James Rodregez&nbsp;&nbsp;
                                                        <small class="timing">9 min ago</small>
                                                    </label>
                                                    <span class="text">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    </span>
                                                </li>
                                                <li class="notice py-2">
                                                    <time class="date">May 16, 2020</time>
                                                    <label>Joseph Stark&nbsp;&nbsp;
                                                        <small class="timing">9 min ago</small>
                                                    </label>
                                                    <span class="text">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* NoticeBoard */}
                                </div>
                                {/* Left Col */}
                                <div class="col-lg-6">
                                    <div class="card mb-3">
                                        <div class="card-header">
                                            <h5 class="card-title float-left mb-0">Event Calender</h5>
                                            <div class="card-tools float-right">
                                                <button type="button" class="btn btn-tool" data-toggle="collapse" href="#calender" aria-expanded="false" aria-controls="calender">
                                                    <i class="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="collapse show" id="calender">
                                            <iframe title="Calender" src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=2&amp;bgcolor=%23F6BF26&amp;ctz=Asia%2FKolkata&amp;src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;showTitle=0&amp;showNav=0&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0" width="100%" height="400" frameborder="0" scrolling="no"></iframe>
                                        </div>
                                    </div>
                                    {/* Calendar */}
                                </div>
                                {/* Right Col */}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}