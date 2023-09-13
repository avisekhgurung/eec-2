import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import { Link } from 'react-router-dom';
import '../css/teacherStyle.css';

export default class TeacherStudyType extends React.Component {
    render() {
        const style = {
            textDecoration: 'none'
        }
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>@StudyType</h3>
                        </div>
                        <div class="container py-4">
                            <div class="row d-flex justify-content-between mb-3">
                                <Link to="/mcq" style={style}>
                                    <button id="boxButton">MCQ</button>
                                </Link>
                                <Link to="/fillblanks" style={style}>
                                    <button id="boxButton">Fill in the Blanks</button>
                                </Link>
                                <Link to="/matchthefollowing" style={style}>
                                    <button id="boxButton">Match The Following</button>
                                </Link>
                                <Link to="/picturestudy" style={style}>
                                    <button id="boxButton">Picture Study</button>
                                </Link>
                            </div>
                            <div class="row d-flex justify-content-between mb-3">
                                <Link to="/truefalse" style={style}>
                                    <button id="boxButton">True or False</button>
                                </Link>
                                <Link to="/wriitenrecord" style={style}>
                                    <button id="boxButton">Written Record</button>
                                </Link>
                                <Link to="/hdquestion" style={style}>
                                    <button id="boxButton">Highligh & Drawing Question</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}