import React from 'react';
import StudentNavbar from './StudentNavbar';
import StudentSidebar from './StudentSidebar';

export default class StudentLearnRevise extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <StudentSidebar />
                    <div id="page-content-wrapper">
                        <StudentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Learn & Revise</h3>
                        </div>
                        <div class="container LearnRevise py-4">
                            <div className="row justify-content-md-between">
                                <a href="/student_studymaterials" className="btn" id="boxButton">Subject 1</a>
                                <a href="/student_studymaterials" className="btn" id="boxButton">Subject 2</a>
                                <a href="/student_studymaterials" className="btn" id="boxButton">Subject 3</a>
                                <a href="/student_studymaterials" className="btn" id="boxButton">Subject 4</a>
                            </div>
                            <div className="row justify-content-md-between pt-5">
                                <a href="/student_studymaterials" className="btn" id="boxButton">Subject 5</a>
                                <a href="/student_studymaterials" className="btn" id="boxButton">Subject 6</a>
                                <a href="/student_studymaterials" className="btn" id="boxButton">Subject 7</a>
                                <a href="/student_studymaterials" className="btn" id="boxButton">Subject 8</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}