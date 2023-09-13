import React from 'react';
import StudentNavbar from './StudentNavbar';
import StudentSidebar from './StudentSidebar';

export default class StudentSettings extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <StudentSidebar />
                    <div id="page-content-wrapper">
                        <StudentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Settings</h3>
                        </div>
                        <div class="container-fluid Settings py-4">
                            <h1>On Going</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}