import React from 'react';
import StudentSidebar from './StudentSidebar';
import StudentNavbar from './StudentNavbar';
import '../css/studentStyle.css';

export default class StudentNotice extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <StudentSidebar />
                    <div id="page-content-wrapper">
                        <StudentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Notice</h3>
                        </div>
                        <div class="container-fluid Notice py-4">
                            <div class="container py-3">
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
                    </div>
                </div>
            </React.Fragment>
        )
    }
}