import React from 'react';
import { useHistory } from 'react-router-dom';

export default function StudentSidebar() {
    let history = useHistory();
    return (
        <React.Fragment>
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div
                    className="sidebar-heading"
                    id=""
                    onClick={() => { history.push('/') }}
                    style={{ cursor: 'pointer' }}>EEC</div>
                <div className="list-group list-group-flush text-center">
                    <a href="/student">
                        <img src="images/icon/home.png" id="logo" alt="" />
                        <span id="text">Home</span>
                    </a>
                    <a href="/student_learnandrevise">
                        <img src="images/icon/home.png" id="logo" alt="" />
                        <span id="text">Learn & Revise</span>
                    </a>
                    <a href="/student_notice">
                        <img src="images/icon/notice.png" id="logo" alt="" />
                        <span id="text">Notice</span>
                    </a>
                    <a href="/student_routine">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Routine</span>
                    </a>
                    <a href="/student_attendance">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Attendance</span>
                    </a>
                    <a href="/student_handbook">
                        <img src="images/icon/handbook.png" id="logo" alt="" />
                        <span id="text">Handbook</span>
                    </a>
                    <a href="/student_examination">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Examination <span className="badge badge-danger">V.5</span></span>
                    </a>
                    <a href="/student_reportcard">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Report Card <span className="badge badge-danger">V.5</span></span>
                    </a>
                    <a href="/student_journal">
                        <img src="images/icon/handbook.png" id="logo" alt="" />
                        <span id="text">Journal</span>
                    </a>
                    <a href="/student_event">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Event <span className="badge badge-danger">V.5</span></span>
                    </a>
                    <a href="/student_healthcard">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Health Card <span className="badge badge-danger">V.5</span></span>
                    </a>
                    <a href="/student_library">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Library  <span className="badge badge-danger">V.5</span></span>
                    </a>
                    <a href="/student_complaint">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Complaint</span>
                    </a>
                    <a href="/student_feedback">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Feedback</span>
                    </a>
                    <a href="/student_settings">
                        <img src="images/icon/settings.png" id="logo" alt="" />
                        <span id="text">Settings <span className="badge badge-danger">V.3</span></span>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}