import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import '../css/teacherStyle.css';

export default class TeacherMail extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Mail</h3>
                        </div>
                        <div class="container Mail py-4">
                            <div class="d-flex justify-content-center">
                                <fieldset class="fieldset-border w-75">
                                    <legend class="legend-text">Sent Mail</legend>
                                    <form class="my-3">
                                        <div class="form-row">
                                            <div class="form-group col-lg-6">
                                                <label for="inputEmail">Name</label>
                                                <input type="text" id="" class="form-control" name="" required />
                                            </div>
                                            <div class="form-group col-lg-6">
                                                <label for="">Phone</label>
                                                <input type="text" id="" class="form-control" name="" required />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Email ID</label>
                                            <input type="email" id="" class="form-control" name="" required />
                                        </div>
                                        <div class="form-group">
                                            <label for="inputPassword">Meessage</label>
                                            <textarea class="form-control" id=""></textarea>
                                        </div>
                                        <center>
                                            <button class="btn btn-warning" id="submit">Send</button>
                                        </center>
                                    </form>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}