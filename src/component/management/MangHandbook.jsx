import React from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';

export default class MangHandbook extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <MangSidebar />
                    <div id="page-content-wrapper">
                        <MangNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Handbook</h3>
                        </div>
                        <div class="container-fluid Mang-Handbook py-4">
                            <fieldset className="fieldset-border">
                                <legend className="legend-text">Manage Handbook</legend>
                                <form action="">
                                    <div className="form-group">
                                        <textarea type="text" class="form-control" placeholder="Curriculum" name="" id=""></textarea>
                                    </div>
                                    <div className="form-group">
                                        <textarea type="text" class="form-control" placeholder="Co-Curricular Activities" name="" id=""></textarea>
                                    </div>
                                    <div className="form-group">
                                        <textarea type="text" class="form-control" placeholder="Admission Fees and Withdrawal" name="" id=""></textarea>
                                    </div>
                                    <div className="form-group">
                                        <textarea type="text" class="form-control" placeholder="Discipline" name="" id=""></textarea>
                                    </div>
                                    <div className="form-group">
                                        <textarea type="text" class="form-control" placeholder="Teachers" name="" id=""></textarea>
                                    </div>
                                    <div className="form-group">
                                        <textarea type="text" class="form-control" placeholder="General" name="" id=""></textarea>
                                    </div>
                                    <div className="form-group">
                                        <textarea type="text" class="form-control" placeholder="Promotion" name="" id=""></textarea>
                                    </div>
                                    <div className="form-group">
                                        <textarea type="text" class="form-control" placeholder="Facilities" name="" id=""></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-warning" id="submit">Save</button>
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