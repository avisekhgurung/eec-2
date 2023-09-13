import React from 'react';
import '../css/teacherStyle.css';

export default class TeacherRecapitulation extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="form-row px-3">
                    <div className="col-lg-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for="">MCQ</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for="">Fill in the Blanks</label>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for="">Match The Following</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for="">Picture Study</label>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for="">True or False</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for="">Written Record</label>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <label class="form-check-label" for="">Highlight & Drawing Question</label>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}