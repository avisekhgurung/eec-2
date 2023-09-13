import React from 'react';
import ParentSidebar from './ParentSidebar';
import ParentNavbar from './ParentNavbar';
import '../css/main.css';
import '../css/parentStyle.css';

export default class ParentPTM extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <ParentSidebar />
                    <div id="page-content-wrapper">
                        <ParentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Parent Teacher Meeting</h3>
                        </div>
                        <div class="container-fluid PTM py-4">
                            <div class="container">
                                <h1 class="text-danger">Process On Going</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}