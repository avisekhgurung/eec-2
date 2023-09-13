import React from 'react';
import { useHistory } from 'react-router-dom';

export default function MangSidebar() {
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
                    <a href="/management">
                        <img src="/images/icon/home.png" id="logo" alt="" />
                        <span id="text">Home</span>
                    </a>
                    <a href="/mang_teacher">
                        <img src="/images/icon/home.png" id="logo" alt="" />
                        <span id="text">Teacher</span>
                    </a>
                    <a href="/mang_student">
                        <img src="/images/icon/notice.png" id="logo" alt="" />
                        <span id="text">Student</span>
                    </a>
                    <a href="/mang_parent">
                        <img src="/images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Parent</span>
                    </a>
                    <a href="/mang_class">
                        <img src="/images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Class</span>
                    </a>
                    <a href="/mang_subject">
                        <img src="/images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Subject</span>
                    </a>
                    <a href="/mang_progress">
                        <img src="/images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Progress</span>
                    </a>
                    <a href="/mang_exam">
                        <img src="/images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Examination <span className="badge badge-danger">V.5</span></span>
                    </a>
                    <a href="/mang_routine">
                        <img src="/images/icon/handbook.png" id="logo" alt="" />
                        <span id="text">Routine</span>
                    </a>
                    <a href="/mang_attendance">
                        <img src="/images/icon/handbook.png" id="logo" alt="" />
                        <span id="text">Attendance</span>
                    </a>
                    <a href="/mang_event">
                        <img src="/images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Event <span className="badge badge-danger">V.5</span></span>
                    </a>
                    <a href="/mang_notice">
                        <img src="/images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Notice</span>
                    </a>
                    <a href="/mang_libary">
                        <img src="/images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Libary  <span className="badge badge-danger">V.5</span></span>
                    </a>
                    <a href="/mang_handbook">
                        <img src="/images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Handbook</span>
                    </a>
                    <a href="/mang_healthcard">
                        <img src="/images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Health Card</span>
                    </a>
                    <a href="/mang_complaints">
                        <img src="/images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Complaints</span>
                    </a>
                    <a href="/mang_feedback">
                        <img src="/images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Feedback</span>
                    </a>
                    <a href="/mang_settings">
                        <img src="/images/icon/settings.png" id="logo" alt="" />
                        <span id="text">Settings <span className="badge badge-danger">V.3</span></span>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}