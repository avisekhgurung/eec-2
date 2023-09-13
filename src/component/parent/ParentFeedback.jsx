import React from 'react';
import ParentSidebar from './ParentSidebar';
import ParentNavbar from './ParentNavbar';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import '../css/main.css';
import '../css/parentStyle.css';

export default class ParentFeedback extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 5
        }
    }
    handleChange = value => {
        this.setState({
            value: value
        })
    };
    valueLowest = () => {
        this.setState({
            value: 0
        })
    };
    valueHighest = () => {
        this.setState({
            value: 10
        })
    };
    render() {
        const { value } = this.state
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <ParentSidebar />
                    <div id="page-content-wrapper">
                        <ParentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Feedback</h3>
                        </div>
                        <div class="container-fluid Feedback py-4">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <header>
                                            <h1>Feel free to drop us your feedback.</h1>
                                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/feedback-form-template.svg"
                                                alt="A woman is sitting on the floor and working on a laptop (vector illustration)" />
                                        </header>
                                    </div>
                                    <div class="col-lg-6">
                                        <main>
                                            <form class="feedback-form">
                                                <h2>To.</h2>
                                                <div class="form-group mb-1">
                                                    <div class="row">
                                                        <div class="col-sm-4">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="radio" id="gridCheck" name="to" />
                                                                <label class="form-check-label" for="gridCheck">Teacher</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-8">
                                                            <input type="text" class="form-control" placeholder="Enter Teacher Name" name="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" id="gridCheck" name="to" />
                                                        <label class="form-check-label" for="gridCheck">Management</label>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="" placeholder="Enter your Name" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="" placeholder="Enter your E-Mail" />
                                                </div>
                                                <div class="form-row form-group">
                                                    <div class="col-sm-6">
                                                        <input type="text" class="form-control" name="ChildrenName" placeholder="Enter Children Name" />
                                                    </div>
                                                    <div class="col-sm-3">
                                                        <input type="text" class="form-control" name="Class" placeholder="Class" />
                                                    </div>
                                                    <div class="col-sm-3">
                                                        <input type="text" class="form-control" name="Section" placeholder="Section" />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Write your Subject" id="" />
                                                </div>
                                                <div class="form-group">
                                                    <textarea class="form-control" id="" placeholder="Write your message here.." rows="6"></textarea>
                                                </div>
                                                <br />
                                                <label>
                                                    <h2>How satisfied are you overall with our support?</h2>
                                                </label>
                                                <div className="slider">
                                                    <Slider
                                                        min={0}
                                                        max={10}
                                                        value={value}
                                                        onChangeStart={this.handleChangeStart}
                                                        onChange={this.handleChange}
                                                        onChangeComplete={this.handleChangeComplete}
                                                    />

                                                </div>
                                                <div class="d-flex justify-content-between values">
                                                    <span onClick={this.valueLowest}>Not at all likely</span>
                                                    <div className="value h5 mb-0">{value}</div>
                                                    <span onClick={this.valueHighest}>Extremely likely</span>
                                                </div>
                                                <br />
                                                <br />
                                                <div class="form-group">
                                                    <a href="parent-dashboard.html" class="btn btn-outline-warning" id="submit">Submit</a>
                                                </div>
                                            </form>
                                        </main>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}