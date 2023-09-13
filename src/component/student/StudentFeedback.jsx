import React from 'react';
import StudentNavbar from './StudentNavbar';
import StudentSidebar from './StudentSidebar';

export default class StudentFeedback extends React.Component {
    render() {
        const style = {
            width: 'calc(100% - 60%)'
        }
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <StudentSidebar />
                    <div id="page-content-wrapper">
                        <StudentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Feedback</h3>
                        </div>
                        <div class="container-fluid Feedback py-4">
                            <div class="container">
                                <fieldset className="fieldset-border">
                                    <legend className="legend-text" style={style}>Give Feedback To Improve Our Serveice</legend>
                                    <form action="" method="POST">
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">Name of Course:</label>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control" name="" placeholder="Enter Name of Course" required />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">Course Faculty:</label>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control" name="" placeholder="Enter Course Faculty" required />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">How prepared was the instructor for the course?</label>
                                            <div class="col-sm-6">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                    <label class="form-check-label" for="inlineRadio1">Very Well Prepared</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label class="form-check-label" for="inlineRadio2">Well Prepared</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option3" />
                                                    <label class="form-check-label" for="inlineRadio2">Moderately Prepared</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">4</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">5</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">How clear were the instructor's explanations?</label>
                                            <div class="col-sm-6">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                    <label class="form-check-label" for="inlineRadio1">Clear</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label class="form-check-label" for="inlineRadio2">Very Clear</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option3" />
                                                    <label class="form-check-label" for="inlineRadio2">Slightly Clear</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">Not clear at all</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">Moderately Clear</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">How much feedback was provided by the instructor?</label>
                                            <div class="col-sm-6">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                    <label class="form-check-label" for="inlineRadio1">A lot</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label class="form-check-label" for="inlineRadio2">A great deal</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option3" />
                                                    <label class="form-check-label" for="inlineRadio2">A moderate amount</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">Not at all</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">A little</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">The instructor was available for consultations outside of course time?</label>
                                            <div class="col-sm-6">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                    <label class="form-check-label" for="inlineRadio1">To a considerable extent</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label class="form-check-label" for="inlineRadio2">To a great extent</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option3" />
                                                    <label class="form-check-label" for="inlineRadio2">To some extent</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">Not applicable/I did not use consultation hours</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">5</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">Overall, you are satisfied with the instructor teaching this course?</label>
                                            <div class="col-sm-6">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label class="form-check-label" for="inlineRadio2">To a great extent</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                    <label class="form-check-label" for="inlineRadio1">To a considerable extent</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option3" />
                                                    <label class="form-check-label" for="inlineRadio2">Not at all</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">4</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">5</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">Given the chance, would you take this instructor again?</label>
                                            <div class="col-sm-6">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">Yes</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">About what percent of the classes did you attend?</label>
                                            <div class="col-sm-6">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label class="form-check-label" for="inlineRadio2">90% - 100%</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                    <label class="form-check-label" for="inlineRadio1">80% - 90%</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option3" />
                                                    <label class="form-check-label" for="inlineRadio2">70% - 80%</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">60% - 70%</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2"> Less Than  60%</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">How many hours per week on average did you spend on this course (excluding the class time)?</label>
                                            <div class="col-sm-6">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label class="form-check-label" for="inlineRadio2">2 - 3 H</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                    <label class="form-check-label" for="inlineRadio1">3 - 4 H</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">4 – 5 H</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option3" />
                                                    <label class="form-check-label" for="inlineRadio2">More Than 5 H</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">5</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">How much did you learn from this course?</label>
                                            <div class="col-sm-6">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                    <label class="form-check-label" for="inlineRadio1">A lot</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label class="form-check-label" for="inlineRadio2">A great deal</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option3" />
                                                    <label class="form-check-label" for="inlineRadio2">A moderate amount</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">Nothing</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">A little</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">Overall, how would you describe the quality of the instruction in this course?</label>
                                            <div class="col-sm-6">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                    <label class="form-check-label" for="inlineRadio1">Excellent</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label class="form-check-label" for="inlineRadio2">Good</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option3" />
                                                    <label class="form-check-label" for="inlineRadio2">Poor</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">Fair</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">5</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">How organized was the course?</label>
                                            <div class="col-sm-6">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                    <label class="form-check-label" for="inlineRadio1">Very well organized</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label class="form-check-label" for="inlineRadio2">Organized</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option3" />
                                                    <label class="form-check-label" for="inlineRadio2">Moderately organized</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">Slightly organized</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">5</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">What skills or knowledge did you learn or improve?</label>
                                            <div class="col-sm-6">
                                                <textarea class="form-control" id="" rows="3"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">In what ways do you think the course could be improved?</label>
                                            <div class="col-sm-6">
                                                <textarea class="form-control" id="" rows="3"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">Would you recommend this course to other students?</label>
                                            <div class="col-sm-6">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">Yes</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">Why or why not?</label>
                                            <div class="col-sm-6">
                                                <textarea class="form-control" id="" rows="3"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">How was your overall experience?</label>
                                            <div class="col-sm-6">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label class="form-check-label" for="inlineRadio2">Excellent</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                    <label class="form-check-label" for="inlineRadio1">Good</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option3" />
                                                    <label class="form-check-label" for="inlineRadio2">Moderately</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">Bad</label>
                                                </div>
                                                <br />
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
                                                    <label class="form-check-label" for="inlineRadio2">Very Bad</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">Rate your "Online/Virtual Class Experience"!!</label>
                                            <div class="col-sm-6">
                                                <select multiple class="form-control" id="">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-sm-6 col-form-label">Please list any feedback about your online courses here:</label>
                                            <div class="col-sm-6">
                                                <textarea class="form-control" id="" rows="3"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group text-right">
                                            <input class="btn btn-warning" type="submit" id="submit" value="Submit" />
                                        </div>
                                    </form>
                                </fieldset>
                            </div>
                            {/* Container End */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}