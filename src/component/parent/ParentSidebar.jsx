import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/main.css';
import '../css/parentStyle.css';

export default function ParentSidebar() {
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
                    <a href="/parent">
                        <img src="images/icon/home.png" id="logo" alt="" />
                        <span id="text">Home</span>
                    </a>
                    <a href="/parentnotice">
                        <img src="images/icon/notice.png" id="logo" alt="" />
                        <span id="text">Notice</span>
                    </a>
                    <a href="/parentroutine">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Routine</span>
                    </a>
                    <a href="/parentstudprogress">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Student Progress</span>
                    </a>
                    <a href="/parenthandbook">
                        <img src="images/icon/handbook.png" id="logo" alt="" />
                        <span id="text">Handbook</span>
                    </a>
                    <a href="/parentfeesstructure">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Fees Structure <span class="badge badge-danger">V.5</span></span>
                    </a>
                    <a href="/parentexamination">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Examination</span>
                    </a>
                    <a href="/parentptm">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">PTM  <span class="badge badge-danger">V.5</span></span>
                    </a>
                    <a href="/parentevent">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Event <span class="badge badge-danger">V.5</span></span>
                    </a>
                    <a href="/parentleaveapplication">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Leave Application</span>
                    </a>
                    <a href="/parentphr">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">PHR <span class="badge badge-danger">V.5</span></span>
                    </a>
                    <a href="/parentfeedback">
                        <img src="images/icon/barcode.png" id="logo" alt="" />
                        <span id="text">Feedback</span>
                    </a>
                    <a href="/parentsettings">
                        <img src="images/icon/settings.png" id="logo" alt="" />
                        <span id="text">Settings <span class="badge badge-danger">V.3</span></span>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}