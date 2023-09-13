import React from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import { Bar } from 'react-chartjs-2';
import '../css/mangStyle.css';
import { Redirect } from 'react-router';

export default class MangRoutes extends React.Component {
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

        const token = localStorage.getItem("token");
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            date: date,
            loggedIn
        };
    }

    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <MangSidebar />
                    <div id="page-content-wrapper" className="dB">
                        <MangNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h5>Dashboard</h5>
                            <label id="" class="font-weight-normal mb-0">{this.state.date}</label>
                        </div>
                        <a href="/sample_form">Sample</a>
                        <div class="container-fluid Mang-Dashboard p-4">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="small-box stud mb-3">
                                                <div class="icon">
                                                    <i class="fas fa-user-graduate"></i>
                                                </div>
                                                <div class="text">
                                                    <h2><strong>500</strong></h2>
                                                    <p>Our Total Student</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="small-box tech mb-3">
                                                <div class="icon">
                                                    <i class="fas fa-chalkboard-teacher"></i>
                                                </div>
                                                <div class="text">
                                                    <h2><strong>100</strong></h2>
                                                    <p>Our Expert Teacher</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="small-box parent mb-3">
                                                <div class="icon">
                                                    <i class="fas fa-users"></i>
                                                </div>
                                                <div class="text">
                                                    <h2><strong>5000</strong></h2>
                                                    <p>Total Parents</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="small-box earning mb-3">
                                                <div class="icon">
                                                    <i class="fas fa-rupee-sign"></i>
                                                </div>
                                                <div class="text">
                                                    <h2><strong>100000</strong></h2>
                                                    <p>Total Earning</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                            <iframe src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=2&amp;bgcolor=%23F6BF26&amp;ctz=Asia%2FKolkata&amp;src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;showTitle=0&amp;showNav=0&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0" width="100%" title="Event Calender" height="400" frameborder="0" scrolling="no"></iframe>
                                        </div>
                                    </div>
                                    {/* Calendar */}
                                </div>
                                {/* Col-lg Left */}
                                <div className="col-lg-6">
                                    <div class="card mb-3">
                                        <div class="card-header">
                                            <h5 class="card-title float-left">Fees Collection</h5>
                                            <div class="card-tools text-right">
                                                <button type="button" class="btn btn-tool" data-toggle="collapse" href="#feesCollection" aria-expanded="false" aria-controls="feesCollection"><i class="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="collapse show" id="feesCollection">
                                            <div class="card-body">
                                                <div class="chart">
                                                    <div id="areaChart">
                                                        <Bar
                                                            data={{
                                                                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                                                datasets: [{
                                                                    label: '# of Votes',
                                                                    data: [12, 19, 3, 5, 2, 3],
                                                                    backgroundColor: [
                                                                        'rgba(255, 99, 132, 0.2)',
                                                                        'rgba(54, 162, 235, 0.2)',
                                                                        'rgba(255, 206, 86, 0.2)',
                                                                        'rgba(75, 192, 192, 0.2)',
                                                                        'rgba(153, 102, 255, 0.2)',
                                                                        'rgba(255, 159, 64, 0.2)'
                                                                    ],
                                                                    borderColor: [
                                                                        'rgba(255, 99, 132, 1)',
                                                                        'rgba(54, 162, 235, 1)',
                                                                        'rgba(255, 206, 86, 1)',
                                                                        'rgba(75, 192, 192, 1)',
                                                                        'rgba(153, 102, 255, 1)',
                                                                        'rgba(255, 159, 64, 1)'
                                                                    ],
                                                                    borderWidth: 1
                                                                }]
                                                            }}
                                                            options={{
                                                                scales: {
                                                                    yAxes: [{
                                                                        ticks: {
                                                                            beginAtZero: true
                                                                        }
                                                                    }]
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Fees Collection */}
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
                                        <div class="col-lg-6">
                                            <div class="card mb-3">
                                                <div class="card-header">
                                                    <h5 class="card-title float-left mb-0">Recent Activities</h5>
                                                    <div class="card-tools float-right">
                                                        <button type="button" class="btn btn-tool" data-toggle="collapse" href="#recentActivites" aria-expanded="false" aria-controls="recentActivites">
                                                            <i class="fas fa-minus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="collapse show" id="recentActivites">
                                                    <ol class="activity-feed mx-2 py-2">
                                                        <li class="feed-item py-2">
                                                            <time class="date" datetime="9-23">Sep 23, 2021</time>
                                                            <span class="text">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                            </span>
                                                        </li>
                                                        <li class="feed-item py-2">
                                                            <time class="date" datetime="9-21">Sep 21, 2021</time>
                                                            <span class="text">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                            </span>
                                                        </li>
                                                        <li class="feed-item py-2">
                                                            <time class="date" datetime="9-18">Sep 18, 2021</time>
                                                            <span class="text">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                            </span>
                                                        </li>
                                                        <li class="feed-item py-2">
                                                            <time class="date" datetime="9-17">Sep 17, 2021</time>
                                                            <span class="text">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                            </span>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                            {/* Recent Activities */}
                                        </div>
                                    </div>
                                    {/* Sub Row */}
                                </div>
                                {/* Col-lg Right */}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}