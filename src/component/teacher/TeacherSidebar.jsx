import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/teacherStyle.css';

export default function TeacherSidebar() {
    let history = useHistory();
    return (
        <React.Fragment>
            <div class="bg-light border-right" id="sidebar-wrapper">
                <div
                    class="sidebar-heading"
                    id=""
                    onClick={() => { history.push('/') }}
                    style={{ cursor: 'pointer' }}>EEC</div>
                <div class="list-group list-group-flush text-center">
                    <a href="/teacher">
                        <img src="images/icon/home.png" id="logo" alt="" />
                        <span id="text">Home</span>
                    </a>
                    <a href="/teacher_timetable">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Time Table</span>
                    </a>
                    <a href="/teacher_progress">
                        <img src="images/icon/handbook.png" id="logo" alt="" />
                        <span id="text">Progress</span>
                    </a>
                    <a href="/teacher_notice">
                        <img src="images/icon/notice.png" id="logo" alt="" />
                        <span id="text">Notice</span>
                    </a>
                    <a href="/teacher_subject">
                        <img src="images/icon/notice.png" id="logo" alt="" />
                        <span id="text">Subject</span>
                    </a>
                    <a href="/teacher_lessonplan">
                        <img src="images/icon/notice.png" id="logo" alt="" />
                        <span id="text">Lesson Plan</span>
                    </a>
                    <a href="/teacher_reportcard">
                        <img src="images/icon/notice.png" id="logo" alt="" />
                        <span id="text">Report Card</span>
                    </a>
                    <a href="/teacher_healthcard">
                        <img src="images/icon/notice.png" id="logo" alt="" />
                        <span id="text">Health Card</span>
                    </a>
                    <a href="/teacher_attendence">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Attendence</span>
                    </a>
                    <a href="/teacher_leaveapplications">
                        <img src="images/icon/handbook.png" id="logo" alt="" />
                        <span id="text">Leave Applications</span>
                    </a>
                    <a href="/teacher_journal">
                        <img src="images/icon/handbook.png" id="logo" alt="" />
                        <span id="text">Journal <span class="badge badge-danger">V.5</span></span>
                    </a>
                    <a href="/teacher_ptm">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">PTM  <span class="badge badge-danger">V.5</span></span>
                    </a>
                    <a href="/teacher_mail">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Mail</span>
                    </a>
                    <a href="/teacher_complaints">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Complaints</span>
                    </a>
                    <a href="/teacher_feedback">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Feedback</span>
                    </a>
                    <a href="/teacher_settings">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Setting <span class="badge badge-danger">V.5</span></span>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}