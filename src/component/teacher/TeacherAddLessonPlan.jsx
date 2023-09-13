import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import $ from 'jquery';
import Recapitulation from './TeacherRecapitulation';
import '../css/teacherStyle.css';

export default class TeacherAddLessonPlan extends React.Component {
    componentDidMount = () => {
        $('#target').on('change', function () {
            var vis = document.querySelector('.vis'),
                target = document.getElementById(this.value);
            if (vis !== null) {
                vis.className = 'inv';
            }
            if (target !== null) {
                target.className = 'vis';
            }
        });
    }
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Add Lesson Plan</h3>
                        </div>
                        <div class="container-fluid Add-Lesson-Plan py-4">
                            <fieldset class="fieldset-border">
                                <legend class="legend-text mb-3">Create New Plan</legend>
                                <form>
                                    <div className="form-row form-group">
                                        <div class="col-lg-6">
                                            <label><b>Date</b></label>
                                            <input type="date" class="form-control" name="" />
                                        </div>
                                        <div class="col-lg-6">
                                            <label><b>Timing</b></label>
                                            <input type="text" class="form-control" name="" />
                                        </div>
                                    </div>
                                    <div className="form-row form-group">
                                        <div class="col-lg-4">
                                            <label><b>Class</b></label>
                                            <input type="text" class="form-control" placeholder="Class" name="" readOnly />
                                        </div>
                                        <div class="col-lg-4">
                                            <label><b>Section</b></label>
                                            <input type="text" class="form-control" placeholder="Section" name="" readOnly />
                                        </div>
                                        <div class="col-lg-4">
                                            <label><b>Subject</b></label>
                                            <input type="text" class="form-control" placeholder="Subject" name="" readOnly />
                                        </div>
                                    </div>
                                    <div class="form-row form-group">
                                        <div class="col-lg-4">
                                            <label><b>Chapter</b></label>
                                            <input type="text" class="form-control" placeholder="Chapter" name="" />
                                        </div>
                                        <div class="col-lg-4">
                                            <label><b>Topic</b></label>
                                            <input type="text" class="form-control" placeholder="Topic" name="" />
                                        </div>
                                        <div class="col-lg-4">
                                            <label><b>Lesson Type</b></label>
                                            <select className="custom-select" id="target">
                                                <option selected>- Select -</option>
                                                <option value="new_lesson">New Lesson</option>
                                                <option value="revision">Revision</option>
                                                <option value="assesment">Assesment</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row form-group">
                                        <div class="col-lg-6">
                                            <label><b>Introduction</b></label>
                                            <div className="form-row">
                                                <div className="col-lg-8">
                                                    <textarea type="text" class="form-control" placeholder="Write your introduction here.." name="" rows="1" ></textarea>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" class="form-control" placeholder="Time" name="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <label><b>Explanation</b></label>
                                            <div className="form-row">
                                                <div className="col-lg-8">
                                                    <textarea type="text" class="form-control" name="" rows="1" placeholder="Write your explanation here.." ></textarea>
                                                </div>
                                                <div className="col-lg-4">
                                                    <input type="text" class="form-control" placeholder="Time" name="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label><b>Recapitulation :</b></label>
                                        <div id="new_lesson" class="inv">
                                            <h6 className="rounded" style={{ background: '#f6f6f6', padding: '10px' }}>Classwork</h6>
                                            <Recapitulation />
                                            <br />
                                            <h6 className="rounded" style={{ background: '#f6f6f6', padding: '10px' }}>Homework</h6>
                                            <Recapitulation />
                                        </div>
                                        <div id="revision" class="inv">
                                            <h6 className="rounded" style={{ background: '#f6f6f6', padding: '10px' }}>Tryouts</h6>
                                            <Recapitulation />
                                            <br />
                                            <h6 className="rounded" style={{ background: '#f6f6f6', padding: '10px' }}>Retrieval Practice</h6>
                                            <Recapitulation />
                                        </div>
                                        <div id="assesment" class="inv">
                                             <h6 className="rounded" style={{ background: '#f6f6f6', padding: '10px' }}>Assesment</h6>
                                            <Recapitulation />     
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <a href="/lessonplan" class="btn btn-warning" id="submit">Add</a>
                                    </div>
                                </form>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}