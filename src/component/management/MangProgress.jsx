import React from 'react';
import MangSidebar from './MangSidebar';
import MangNavbar from './MangNavbar';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import '../css/teacherStyle.css';

export default class MangProgress extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <MangSidebar />
                    <div id="page-content-wrapper">
                        <MangNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Progress</h3>
                        </div>
                        <div class="container Mang-Progress p-4">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card mb-3">
                                        <div class="card-header">
                                            <h5 class="card-title float-left">Activity 1</h5>
                                            <div class="card-tools text-right">
                                                <button type="button" class="btn btn-tool" data-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"><i class="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="collapse show" id="collapseExample1">
                                            <div class="card-body">
                                                <div class="chart">
                                                    <div id="areaChart">
                                                        <Line
                                                            data={{
                                                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                                                datasets: [
                                                                    {
                                                                        label: 'Digital Goods',
                                                                        backgroundColor: 'rgba(60,141,188,0.9)',
                                                                        borderColor: 'rgba(60,141,188,0.8)',
                                                                        pointRadius: false,
                                                                        pointColor: '#3b8bba',
                                                                        pointStrokeColor: 'rgba(60,141,188,1)',
                                                                        pointHighlightFill: '#fff',
                                                                        pointHighlightStroke: 'rgba(60,141,188,1)',
                                                                        data: [28, 48, 40, 19, 86, 27, 90]
                                                                    },
                                                                    {
                                                                        label: 'Electronics',
                                                                        backgroundColor: 'rgba(210, 214, 222, 1)',
                                                                        borderColor: 'rgba(210, 214, 222, 1)',
                                                                        pointRadius: false,
                                                                        pointColor: 'rgba(210, 214, 222, 1)',
                                                                        pointStrokeColor: '#c1c7d1',
                                                                        pointHighlightFill: '#fff',
                                                                        pointHighlightStroke: 'rgba(220,220,220,1)',
                                                                        data: [65, 59, 80, 81, 56, 55, 40]
                                                                    },
                                                                ]
                                                            }}
                                                            options={{
                                                                scales: {
                                                                    xAxes: [{
                                                                        gridLines: {
                                                                            display: false,
                                                                        }
                                                                    }],
                                                                    yAxes: [{
                                                                        gridLines: {
                                                                            display: false,
                                                                        }
                                                                    }]
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mb-3">
                                        <div class="card-header">
                                            <h5 class="card-title float-left">Activity 2</h5>
                                            <div class="card-tools text-right">
                                                <button type="button" class="btn btn-tool" data-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3"><i class="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="collapse show" id="collapseExample3">
                                            <div class="card-body">
                                                <div class="chart">
                                                    <div id="barChart">
                                                        <Bar
                                                            data={{
                                                                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                                                datasets: [{
                                                                    label: '# of Votes',
                                                                    data: [12, 19, 3, 5, 2, 3],
                                                                    backgroundColor: [
                                                                        'rgba(255, 99, 132, 0.2)',
                                                                        'rgba(54, 162, 235, 0.2)',
                                                                        'rgba(255, 206, 86, 0.2)',
                                                                        'rgba(75, 192, 192, 0.2)',
                                                                        'rgba(153, 102, 255, 0.2)',
                                                                        'rgba(255, 159, 64, 0.2)'
                                                                    ],
                                                                    borderColor: [
                                                                        'rgba(255, 99, 132, 1)',
                                                                        'rgba(54, 162, 235, 1)',
                                                                        'rgba(255, 206, 86, 1)',
                                                                        'rgba(75, 192, 192, 1)',
                                                                        'rgba(153, 102, 255, 1)',
                                                                        'rgba(255, 159, 64, 1)'
                                                                    ],
                                                                    borderWidth: 1
                                                                }]
                                                            }}
                                                            options={{
                                                                scales: {
                                                                    yAxes: [{
                                                                        ticks: {
                                                                            beginAtZero: true
                                                                        }
                                                                    }]
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card mb-3">
                                        <div class="card-header">
                                            <h5 class="card-title float-left">Activity 3</h5>
                                            <div class="card-tools text-right">
                                                <button type="button" class="btn btn-tool" data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4"><i class="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="collapse show" id="collapseExample4">
                                            <div class="card-body">
                                                <div class="chart">
                                                    <div id="">
                                                        <Doughnut
                                                            data={{
                                                                datasets: [{
                                                                    data: [10, 20, 30],
                                                                    backgroundColor: [
                                                                        'rgba(255, 99, 132, 0.8)',
                                                                        'rgba(54, 162, 235, 0.8)',
                                                                        'rgba(255, 206, 86, 0.8)'
                                                                    ],
                                                                    borderColor: [
                                                                        'rgba(255, 255, 255, 1)'
                                                                    ],
                                                                    borderWidth: 1
                                                                }],
                                                                labels: [
                                                                    'Red',
                                                                    'Yellow',
                                                                    'Blue'
                                                                ]
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mb-3">
                                        <div class="card-header">
                                            <h5 class="card-title float-left">Activity 3</h5>
                                            <div class="card-tools text-right">
                                                <button type="button" class="btn btn-tool" data-toggle="collapse" href="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5"><i class="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="collapse show" id="collapseExample5">
                                            <div class="card-body">
                                                <div class="chart">
                                                    <div id="drawChart">
                                                        <Line
                                                            data={{
                                                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                                                datasets: [{
                                                                    label: 'My First dataset',
                                                                    backgroundColor: 'rgb(255, 99, 132)',
                                                                    borderColor: 'rgb(255, 99, 132)',
                                                                    data: [0, 10, 5, 2, 20, 30, 45]
                                                                }]
                                                            }}
                                                        />
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