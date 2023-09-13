import React from 'react';
import $ from 'jquery';
import StudentSidebar from './StudentSidebar';
import StudentNavbar from './StudentNavbar';
import '../css/studentStyle.css';
import { Redirect } from 'react-router';

export default class StudentDashboard extends React.Component {
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
    componentDidMount = () => {
        // Todo
        var newTask = document.querySelector('#new-task');
        var addTaskBtn = document.querySelector('#addTask');
        var toDoUl = document.querySelector(".todo-list");
        var createNewTask = function (task) {
            console.log("Creating task...");
            var divItem = document.createElement("div"); //<li>
            var label = document.createElement("p"); // <label>
            label.innerText = task;
            divItem.appendChild(label);
            return divItem;
        };
        var addTask = function () {
            console.log("Adding Task...");
            var divItem = createNewTask(newTask.value);
            toDoUl.appendChild(divItem);
            newTask.value = "";
        };
        addTaskBtn.addEventListener("click", addTask);

        // Wellness
        $('.fas').on('click', function () {
            console.log('Clicked');
            if (parseFloat($(this).css('opacity')).toFixed(1) === 0.6)
                $(this).css('opacity', '1.0');
            else
                $(this).css('opacity', '0.6');
        });
    }
    render() {
        // if (this.state.loggedIn === false) {
        //     return <Redirect to="/signin" />
        // }
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <StudentSidebar />
                    <div id="page-content-wrapper" className="dB">
                        <StudentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h5>Dashboard</h5>
                            <label id="" class="font-weight-normal mb-0">{this.state.date}</label>
                        </div>
                        <div class="container-fluid Student-Dashboard p-4">
                            <div class="row">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div class="col-lg-6">
                                            <div class="small-box exams mb-3">
                                                <div class="icon">
                                                    <i class="fas fa-book-reader"></i>
                                                </div>
                                                <div class="text">
                                                    <h2><strong>6</strong></h2>
                                                    <p>Subjects</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="small-box fees mb-3">
                                                <div class="icon">
                                                    <i class="fas fa-rupee-sign"></i>
                                                </div>
                                                <div class="text">
                                                    <h2><strong>15000</strong></h2>
                                                    <p>Catch Up</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="small-box events mb-3">
                                                <div class="icon">
                                                    <i class="fas fa-user-graduate"></i>
                                                </div>
                                                <div class="text">
                                                    <h2><strong>17</strong></h2>
                                                    <p>Games</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="small-box docs mb-3">
                                                <div class="icon">
                                                    <i class="fas fa-file"></i>
                                                </div>
                                                <div class="text">
                                                    <h2><strong>5</strong></h2>
                                                    <p>Events</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* SmallBox */}
                                    <div class="card mb-3">
                                        <div class="card-header">
                                            <h5 class="card-title float-left mb-0">My Dairy</h5>
                                            <div class="card-tools float-right">
                                                <button type="button" class="btn btn-tool" data-toggle="collapse" href="#myDairy" aria-expanded="false" aria-controls="myDairy">
                                                    <i class="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="collapse show p-3" id="myDairy">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Enter New Task" id="new-task" />
                                                <div class="input-group-append">
                                                    <span class="input-group-text" id="addTask">Add Task</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <section class="todo">
                                                <div class="todo-list box">
                                                    <div>
                                                        <p>Task Name</p>
                                                    </div>
                                                    <div>
                                                        <p>Task Name</p>
                                                    </div>
                                                    <div>
                                                        <p>Task Name</p>
                                                    </div>
                                                </div>
                                                {/* <!--/todo-list--> */}
                                            </section>
                                        </div>
                                    </div>
                                    {/* ToDo */}
                                    <div class="card mb-3">
                                        <div class="card-header">
                                            <h5 class="card-title float-left mb-0">Today Classs</h5>
                                            <div class="card-tools float-right">
                                                <button type="button" class="btn btn-tool" data-toggle="collapse" href="#todayClass" aria-expanded="false" aria-controls="todayClass">
                                                    <i class="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="collapse show Routine p-3" id="todayClass">
                                            <h4 className="pb-3">Monday, 23rd August</h4>
                                            <div className="form-row">
                                                <div className="col-lg-3">
                                                    <div class="tooSmallBox cw" style={{ background: '#94ECBE' }}>
                                                        <div class="icon">
                                                            <label className="text-white"><b>1st Period</b></label>
                                                        </div>
                                                        <div class="number">
                                                            <h5 className="mb-0"><strong>Math</strong></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div class="tooSmallBox cw" style={{ background: '#e9c46a' }}>
                                                        <div class="icon">
                                                            <label className="text-white"><b>2nd Period</b></label>
                                                        </div>
                                                        <div class="number">
                                                            <h5 className="mb-0"><strong>Physics</strong></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div class="tooSmallBox cw" style={{ background: '#2a9d8f' }}>
                                                        <div class="icon">
                                                            <label className="text-white"><b>3rd Period</b></label>
                                                        </div>
                                                        <div class="number">
                                                            <h5 className="mb-0"><strong>Biology</strong></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div class="tooSmallBox cw" style={{ background: '#ff006e' }}>
                                                        <div class="icon">
                                                            <label className="text-white"><b>4th Period</b></label>
                                                        </div>
                                                        <div class="number">
                                                            <h5 className="mb-0"><strong>Bengali</strong></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row mt-3">
                                                <div className="col-lg-3">
                                                    <div class="tooSmallBox cw" style={{ background: '#90be6d' }}>
                                                        <div class="icon">
                                                            <label className="text-white"><b>5th Period</b></label>
                                                        </div>
                                                        <div class="number">
                                                            <h5 className="mb-0"><strong>Hindi</strong></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div class="tooSmallBox cw" style={{ background: '#ff6b6b' }}>
                                                        <div class="icon">
                                                            <label className="text-white"><b>6th Period</b></label>
                                                        </div>
                                                        <div class="number">
                                                            <h5 className="mb-0"><strong>English</strong></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div class="tooSmallBox cw" style={{ background: '#5c677d' }}>
                                                        <div class="icon">
                                                            <label className="text-white"><b>7th Period</b></label>
                                                        </div>
                                                        <div class="number">
                                                            <h5 className="mb-0"><strong>Geography</strong></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div class="tooSmallBox cw" style={{ background: '#bfd200' }}>
                                                        <div class="icon">
                                                            <label className="text-white"><b>8th Period</b></label>
                                                        </div>
                                                        <div class="number">
                                                            <h5 className="mb-0"><strong>History</strong></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TodayClass */}
                                </div>
                                {/* Left Col */}
                                <div className="col-lg-6">
                                    <div className="row mb-3">
                                        <div className="col-lg-3">
                                            <div class="tooSmallBox cw">
                                                <div class="icon">
                                                    <label className="text-white"><b>Classwork</b></label>
                                                </div>
                                                <div class="number">
                                                    <h5 className="mb-0"><strong>12</strong></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div class="tooSmallBox hw">
                                                <div class="icon">
                                                    <label className="text-white"><b>Homework</b></label>
                                                </div>
                                                <div class="number">
                                                    <h5 className="mb-0"><strong>12</strong></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div class="tooSmallBox tryouts">
                                                <div class="icon">
                                                    <label className="text-white"><b>Tryouts</b></label>
                                                </div>
                                                <div class="number">
                                                    <h5 className="mb-0"><strong>12</strong></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div class="tooSmallBox assesment">
                                                <div class="icon">
                                                    <label className="text-white"><b>Assesment</b></label>
                                                </div>
                                                <div class="number">
                                                    <h5 className="mb-0"><strong>12</strong></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TooSmallBox */}
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
                                            <ul class="px-3">
                                                <li class="notice py-2">
                                                    <time class="date">May 16, 2020</time>
                                                    <label>John Smitd&nbsp;&nbsp;
                                                        <small class="timing">9 min ago</small>
                                                    </label>
                                                    <span class="text">
                                                        <p>Lorem Ipsum is simply dummy text of tde printing and typesetting industry.</p>
                                                    </span>
                                                </li>
                                                <li class="notice py-2">
                                                    <time class="date">May 16, 2020</time>
                                                    <label>William Henry&nbsp;&nbsp;
                                                        <small class="timing">9 min ago</small>
                                                    </label>
                                                    <span class="text">
                                                        <p>Lorem Ipsum is simply dummy text of tde printing and typesetting industry.</p>
                                                    </span>
                                                </li>
                                                <li class="notice py-2">
                                                    <time class="date">May 16, 2020</time>
                                                    <label>James Rodregez&nbsp;&nbsp;
                                                        <small class="timing">9 min ago</small>
                                                    </label>
                                                    <span class="text">
                                                        <p>Lorem Ipsum is simply dummy text of tde printing and typesetting industry.</p>
                                                    </span>
                                                </li>
                                                <li class="notice py-2">
                                                    <time class="date">May 16, 2020</time>
                                                    <label>Joseph Stark&nbsp;&nbsp;
                                                        <small class="timing">9 min ago</small>
                                                    </label>
                                                    <span class="text">
                                                        <p>Lorem Ipsum is simply dummy text of tde printing and typesetting industry.</p>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* NoticeBoard */}
                                    <div class="card mb-3">
                                        <div class="card-header">
                                            <h5 class="card-title float-left mb-0">Behaviour & Wellness</h5>
                                            <div class="card-tools float-right">
                                                <button type="button" class="btn btn-tool" data-toggle="collapse" href="#behaviourDetails" aria-expanded="false" aria-controls="behaviourDetails">
                                                    <i class="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="collapse show p-3" id="behaviourDetails">
                                            <div className="row py-3">
                                                <div className="col-4 text-center">
                                                    <i class="fas fa-frown"></i>
                                                    <h6>Sad</h6>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <i class="fas fa-smile"></i>
                                                    <h6>Good</h6>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <i class="fas fa-grin-stars"></i>
                                                    <h6>Excelent</h6>
                                                </div>
                                            </div>
                                            <div className="form-group text-center">
                                                <button className="btn btn-warning btn-sm" >Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Right Col */}
                            </div>
                            {/* Row */}

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}