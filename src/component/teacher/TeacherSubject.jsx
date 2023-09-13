import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import '../css/main.css';
import '../css/teacherStyle.css';
import { useHistory } from 'react-router';

export default function TeacherSubject() {
    let history = useHistory();
    const style = {
        display: 'block'
    }
    return (
        <React.Fragment>
            <div class="d-flex" id="wrapper">
                <TeacherSidebar />
                <div id="page-content-wrapper">
                    <TeacherNavbar />
                    <div class="sub-heading px-3 py-2">
                        <h3>@Subject</h3>
                    </div>
                    <div class="container Teacher-Subject py-4">
                        <div class="d-flex justify-content-between">
                            <h5 class="text-muted">Class : @Class</h5>
                            <h5 class="text-muted">Section : @Sec</h5>
                            <h5 class="text-muted">Timing : @12:00 - 13:00</h5>
                            <h5 class="text-muted">Room : @204</h5>
                        </div>
                        <hr />
                        <div class="row d-flex justify-content-between mb-3">

                            <button id="boxButton" style={style} onClick={() => { history.push('/teacher_studytype') }}>
                                <img src="images/icon/syllabus.png" id="btnImg" alt="" />
                                <br />Class Work
                            </button>
                            <button id="boxButton" style={style} onClick={() => { history.push('/teacher_studytype') }}>
                                <img src="images/icon/lession-plan.png" id="btnImg" alt="" />
                                <br />Home Work
                            </button>
                            <button id="boxButton" style={style} onClick={() => { history.push('/teacher_studytype') }}>
                                <img src="images/icon/lession-matter.png" id="btnImg" alt="" />
                                <br />Tryout
                            </button>
                            <button id="boxButton" style={style} onClick={() => { history.push('/teacher_studytype') }}>
                                <img src="images/icon/test.png" id="btnImg" alt="" />
                                <br />Retrieval Practice
                                </button>
                        </div>
                        <div class="row d-flex justify-content-between">
                            <button id="boxButton" style={style} onClick={() => { history.push('/teacher_studytype') }}>
                                <img src="images/icon/cw-hw.png" id="btnImg" alt="" />
                                <br />
                                Brainstorm</button>
                            <button id="boxButton" style={style} onClick={() => { history.push('/teacher_studytype') }}>
                                <img src="images/icon/sub-fulfill.png" id="btnImg" alt="" />
                                <br />
                                Games</button>
                            <button id="boxButton" style={style} onClick={() => { history.push('/teacher_studytype') }}>
                                <img src="images/icon/question-ask.png" id="btnImg" alt="" />
                                <br />
                                Quiz</button>
                            <button id="boxButton" style={style} onClick={() => { history.push('/teacher_studytype') }}>
                                <img src="images/icon/news.png" id="btnImg" alt="" />
                                <br />
                                Assesment</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}