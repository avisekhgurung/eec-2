import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';
import '../css/teacherStyle.css';

export default class TeacherFillBlanks extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [] };
    }

    addInput() {
        return this.state.values.map((el, i) =>
            <div key={i}>
                <input type="text" value={el || ''} onChange={this.handleChange.bind(this, i)} />
                <input type='button' value='remove' onClick={this.removeClick.bind(this, i)} />
            </div>
        )
    }

    handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
    }

    addClick() {
        this.setState(prevState => ({ values: [...prevState.values, ''] }))
    }

    removeClick(i) {
        let values = [...this.state.values];
        values.splice(i, 1);
        this.setState({ values });
    }

    render() {
        return (
            <React.Fragment>
                <div className="d-flex" id="wrapper">
                    <TeacherSidebar />
                    <div id="page-content-wrapper">
                        <TeacherNavbar />
                        <div className="sub-heading px-3 py-2">
                            <h3>FillBlanks</h3>
                        </div>
                        <div className="container-fluid FillBlanks py-4">
                            <fieldset className="fieldset-border">
                                <legend className="legend-text mb-3">Create Fill in the Blanks</legend>
                                <form>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-6 col-form-label">Add Question:</label>
                                        <div class="col-sm-6">
                                            <textarea class="form-control" placeholder="Write question problem here" name="question"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <a href="/FillBlanks" className="btn btn-warning mr-3" id="submit">Add Question</a>
                                        <input className="btn btn-success" value='Add Blank' id="submit" onClick={this.addClick.bind(this)} />
                                    </div>
                                </form>
                            </fieldset>
                            <br />
                            <br />
                            <center><h5 className="text-muted">Save Fill In The Blanks</h5></center>
                            <p>
                                {this.addInput()}
                            </p>
                            <a className="btn btn-warning" id="submit" href="/studytype">Save</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}