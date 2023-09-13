import React from 'react';
import ParentSidebar from './ParentSidebar';
import ParentNavbar from './ParentNavbar';
import '../css/main.css';
import '../css/parentStyle.css';

export default class ParentHandbook extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <ParentSidebar />
                    <div id="page-content-wrapper">
                        <ParentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Handbook</h3>
                        </div>
                        <div class="container-fluid Handbook py-4">
                            <div class="container py-3">
                                <center><h3>All Subjects Matirial Put in This Page</h3></center>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}