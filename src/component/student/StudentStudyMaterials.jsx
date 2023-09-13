import React from 'react';
import StudentNavbar from './StudentNavbar';
import StudentSidebar from './StudentSidebar';
import { Nav, Tab } from 'react-bootstrap';

export default class StudentStudyMaterials extends React.Component {

    render() {
        const style = {
            width: '130px',
            minHeight: '130px',
            fontSize: '14px'
        }
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <StudentSidebar />
                    <div id="page-content-wrapper">
                        <StudentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Study Materials</h3>
                        </div>
                        <div class="container py-4">
                            <div className="Study-Material p-3 py-0" id="">
                                <Tab.Container defaultActiveKey="first">
                                    <div className="row">
                                        <div className="col-lg-3 px-0">
                                            <Nav variant="" className="flex-column side-panel">
                                                <li>
                                                    <Nav.Link eventKey="first">
                                                        <span>Classwork</span>
                                                    </Nav.Link>
                                                </li>
                                                <li>
                                                    <Nav.Link eventKey="second">
                                                        <span>Homework</span>
                                                    </Nav.Link>
                                                </li>
                                                <li>
                                                    <Nav.Link eventKey="third">
                                                        <span>Tryouts</span>
                                                    </Nav.Link>
                                                </li>
                                                <li>
                                                    <Nav.Link eventKey="forth">
                                                        <span>Retrieval Practice</span>
                                                    </Nav.Link>
                                                </li>
                                            </Nav>
                                        </div>
                                        <div className="col-lg-9 border">
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    1
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    <div className="d-flex justify-content-between">
                                                        <a href="{#}" className="btn" id="boxButton" style={style}>MCQ</a>
                                                        <a href="{#}" className="btn" id="boxButton" style={style}>Fill in the Blanks</a>
                                                        <a href="{#}" className="btn" id="boxButton" style={style}>Match The Following</a>
                                                        <a href="{#}" className="btn" id="boxButton" style={style}>Picture Study</a>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <a href="{#}" className="btn" id="boxButton" style={style}>True & False</a>
                                                        <a href="{#}" className="btn" id="boxButton" style={style}>Written Record</a>
                                                        <a href="{#}" className="btn" id="boxButton" style={style}>Highligh & Drawing Question</a>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third">
                                                    3
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="forth">
                                                    4
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </div>
                                    </div>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}