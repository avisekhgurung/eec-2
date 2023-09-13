import React from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import axios from 'axios';
import '../css/mangStyle.css';

export default class MangAddClassSubject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classid: '',
            classname: '',
            sections: [],
            subid: '',
            subject: '',
            chapter: '',
            topic: '',
            error: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.checkboxChange = this.checkboxChange.bind(this);

    }
    componentDidMount = () => { }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    checkboxChange = (e) => {
        const target = e.target;
        var value = target.value;
        var ar = [...this.state.sections, value]

        if (target.checked) {
            this.setState({ sections: ar })
        } else {
            this.state.sections.splice(value, 1);
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            classid: this.state.classid,
            classname: this.state.classname,
            sections: this.state.sections,
            subid: this.state.subid,
            subject: this.state.subject,
            chapter: this.state.chapter,
            topic: this.state.topic
        }
        console.log("Data", data)
        axios.post('http://localhost:8000/api/add_class', data)
            .then(res => {
                console.log("Response", res.data)
                window.location.reload(true);

            })
            .catch(error => {
                // console.log(error.message)
                this.setState({ error: error })
            })

    }
    render() {
        const legend = {
            width: 'calc(100% - 75%)'
        }
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <MangSidebar />
                    <div id="page-content-wrapper">
                        <MangNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Add Class & Subject</h3>
                        </div>
                        <div class="container-fluid Mang-Add-Teacher py-4">
                            <fieldset className="fieldset-border">
                                <legend className="legend-text" style={legend}>Class & Subject Information</legend>
                                <form action="" onSubmit={this.onSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6 form-group">
                                            <label htmlFor="">Class ID :</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="classid"
                                                onChange={this.onChange}
                                                readOnly />
                                        </div>
                                        <div className="col-lg-6 form-group">
                                            <label htmlFor="">Class :</label>
                                            <select
                                                className="custom-select"
                                                name="classname"
                                                onChange={this.onChange}>
                                                <option selected>- Select Class -</option>
                                                <option>I</option>
                                                <option>II</option>
                                                <option>III</option>
                                                <option>IV</option>
                                                <option>V</option>
                                                <option>VI</option>
                                                <option>VII</option>
                                                <option>VIII</option>
                                                <option>IX</option>
                                                <option>X</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Sections :</label>
                                        <div class="row form-group">
                                            <div className="col-lg-2">
                                                <div className="form-check">
                                                    <input
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        name="sections"
                                                        onChange={this.checkboxChange}
                                                        value="A" />
                                                    <label class="form-check-label" for="">A</label>
                                                </div>
                                                {/* <input type="number" className="form-control" name="number_of_student" onChange={this.onChange} placeholder="No of Students" /> */}
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="form-check">
                                                    <input
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        name="sections"
                                                        onChange={this.checkboxChange}
                                                        value="B" />
                                                    <label class="form-check-label" for="">B</label>
                                                </div>
                                                {/* <input type="number" className="form-control" name="number_of_student" onChange={this.onChange} placeholder="No of Students" /> */}
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="form-check">
                                                    <input
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        name="sections"
                                                        onChange={this.checkboxChange}
                                                        value="C" />
                                                    <label class="form-check-label" for="">C</label>
                                                </div>
                                                {/* <input type="number" className="form-control" name="number_of_student" onChange={this.onChange} placeholder="No of Students" /> */}
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="form-check">
                                                    <input
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        name="sections"
                                                        onChange={this.checkboxChange}
                                                        value="D" />
                                                    <label class="form-check-label" for="">D</label>
                                                </div>
                                                {/* <input type="number" className="form-control" name="number_of_student" onChange={this.onChange} placeholder="No of Students" /> */}
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="form-check">
                                                    <input
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        name="sections"
                                                        onChange={this.checkboxChange}
                                                        value="E" />
                                                    <label class="form-check-label" for="">E</label>
                                                </div>
                                                {/* <input type="number" className="form-control" name="number_of_student" onChange={this.onChange} placeholder="No of Students" /> */}
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="form-check">
                                                    <input
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        name="sections"
                                                        onChange={this.checkboxChange}
                                                        value="F" />
                                                    <label class="form-check-label" for="">F</label>
                                                </div>
                                                {/* <input type="number" className="form-control" name="number_of_student" onChange={this.onChange} placeholder="No of Students" /> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 form-group">
                                            <label htmlFor="">Subject ID :</label>
                                            <input
                                                type="text"
                                                onChange={this.onChange}
                                                className="form-control"
                                                name="subid"
                                                readOnly />
                                        </div>
                                        <div className="col-lg-6 form-group">
                                            <label htmlFor="">Subject :</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="subject"
                                                onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Syllabus:</label>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <label>Chapter:</label>
                                                <textarea
                                                    className="form-control"
                                                    name="chapter"
                                                    onChange={this.onChange}
                                                    id=""
                                                    rows="10"></textarea>
                                            </div>
                                            <div className="col-lg-6">
                                                <label>Topic:</label>
                                                <textarea
                                                    className="form-control"
                                                    name="topic"
                                                    onChange={this.onChange}
                                                    id=""
                                                    rows="10"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="submit" className="btn btn-warning" id="submit" value="Submit" />
                                </form>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}