import React from 'react';
import ParentSidebar from './ParentSidebar';
import ParentNavbar from './ParentNavbar';
import '../css/main.css';
import '../css/parentStyle.css';

export default class ParentStudProgress extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <ParentSidebar />
                    <div id="page-content-wrapper">
                        <ParentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Student Progress</h3>
                        </div>
                        <div class="container-fluid Progress p-4">
                            <div class="container">
                                <div class="d-flex justify-content-between">
                                    <h6>Children Name(DB)</h6>
                                    <h6>Class(DB)</h6>
                                    <h6>Section(DB)</h6>
                                </div>
                                <hr class="mt-0" />
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <select class="form-control sort" name="" id="">
                                            <option selected>Sort by Class</option>
                                            <option value="option1">V</option>
                                            <option value="option2">VI</option>
                                            <option value="option3">VII</option>
                                            <option value="option3">VIII</option>
                                            <option value="option4">IX</option>
                                            <option value="option4">X</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <select class="form-control sort" name="" id="">
                                            <option selected>Sort by Subject</option>
                                            <option value="option1">Physics</option>
                                            <option value="option2">Chemistry </option>
                                            <option value="option3">Mathematics </option>
                                            <option value="option3">Biology </option>
                                            <option value="option4">History </option>
                                            <option value="option4">Geography </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="card mb-3">
                                            <div class="card-header">
                                                <h5 class="card-title float-left">Activity 1</h5>
                                                <div class="card-tools float-right">
                                                    <button type="button" class="btn btn-tool" data-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"><i class="fas fa-minus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="collapse show" id="collapseExample1">
                                                <div class="card-body">
                                                    <div class="chart">
                                                        <canvas id="areaChart"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card mb-3">
                                            <div class="card-header">
                                                <h5 class="card-title float-left">Activity 2</h5>
                                                <div class="card-tools float-right">
                                                    <button type="button" class="btn btn-tool" data-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3"><i class="fas fa-minus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="collapse show" id="collapseExample3">
                                                <div class="card-body">
                                                    <canvas id="barChart"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card mb-3">
                                            <div class="card-header">
                                                <h5 class="card-title float-left">Activity 3</h5>
                                                <div class="card-tools float-right">
                                                    <button type="button" class="btn btn-tool" data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4"><i class="fas fa-minus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="collapse show" id="collapseExample4">
                                                <div class="card-body">
                                                    <div class="chart">
                                                        <canvas id="lineChart"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card mb-3">
                                            <div class="card-header">
                                                <h5 class="card-title float-left">Activity 3</h5>
                                                <div class="card-tools float-right">
                                                    <button type="button" class="btn btn-tool" data-toggle="collapse" href="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5"><i class="fas fa-minus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="collapse show" id="collapseExample5">
                                                <div class="card-body">
                                                    <div class="chart">
                                                        <canvas id="drawChart"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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