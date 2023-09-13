import React from 'react';
import ParentSidebar from './ParentSidebar';
import ParentNavbar from './ParentNavbar';
import $ from 'jquery';
import '../css/main.css';
import '../css/parentStyle.css';

export default class ParentFeesStructure extends React.Component {
    componentDidMount = () => {
        // $(function (){
        //     // Add minus icon for collapse element which is open by default
        //     console.log("Hello");
        //     $(".collapse.show").each(function(){
        //         $(this).prev(".card-header").find(".fa").addClass("fa-minus-circle").removeClass("fa-plus-circle");
        //     });
        //     // Toggle plus minus icon on show hide of collapse element
        //     $(".collapse").on('show.bs.collapse', function(){
        //         $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        //     }).on('hide.bs.collapse', function(){
        //         $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        //     });
        // });
        $('.card-header').on('click', function(){
            $(this).find('i').toggleClass('fa-minus fa-plus-circle');
        });
    }
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <ParentSidebar />
                    <div id="page-content-wrapper">
                        <ParentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Fees Structure</h3>
                        </div>
                        <div class="container-fluid Fees Structure py-4">
                            <div class="container">
                                <div class="accordion" id="accordionExample">
                                    <div class="card">
                                        <div class="card-header" id="headingOne" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <h5 class="card-title float-left mb-0">FEES  STRUCTURE FOR THE SESSION 2020-2021 OF CLASS [V(DB)]</h5>
                                            <div class="card-tools float-right">
                                                <button type="button" class="btn btn-tool"><i class="fa fa-plus-circle"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <table class="table table-bordered table-striped">
                                                    <thead bgcolor="#ffc107">
                                                        <th width="40%">Particulars</th>
                                                        <th>Class V(DB)</th>
                                                        <th>Status</th>
                                                        <th>Action(K)</th>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Admission Fees</td>
                                                            <td>65000</td>
                                                            <td>Paid</td>
                                                            <td>
                                                                <a href="{#}">Invoice</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Session Fees</td>
                                                            <td>5500</td>
                                                            <td>Paid</td>
                                                            <td>
                                                                <a href="{#}">Invoice</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tuition Fees (April- June) '2020 @Rs.3,500.00</td>
                                                            <td>10500</td>
                                                            <td>Due</td>
                                                            <td>
                                                                <a href="{#}">Pay</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Other Fees (Half yearly)</td>
                                                            <td>7000</td>
                                                            <td>Paid</td>
                                                            <td>
                                                                <a href="{#}">Invoice</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>ECA / Exam / Lab Fees (Half yearly)</td>
                                                            <td>5500</td>
                                                            <td>Due</td>
                                                            <td>
                                                                <a href="{#}">Pay</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Total</b></td>
                                                            <td colspan="3"><b>35000</b></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingTwo" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <h5 class="card-title float-left mb-0">FEES STRUCTURE FOR ALL CLASS (Only for Management)</h5>
                                            <div class="card-tools float-right">
                                                <button type="button" class="btn btn-tool"><i class="fa fa-plus-circle"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <table class="table table-bordered table-striped">
                                                    <thead bgcolor="#ffc107">
                                                        <th>Particulars</th>
                                                        <th>LKG & UKG</th>
                                                        <th>Class I-IV</th>
                                                        <th>Class V</th>
                                                        <th>Class VI-VIII</th>
                                                        <th>IX-X</th>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Admission Fees</td>
                                                            <td>32000.00</td>
                                                            <td>32000.00</td>
                                                            <td>32000.00</td>
                                                            <td>45000.00</td>
                                                            <td>55000.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Session Fees</td>
                                                            <td>8000.00</td>
                                                            <td>8000.00</td>
                                                            <td>8000.00</td>
                                                            <td>8000.00</td>
                                                            <td>8000.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Library Caution Deposit</td>
                                                            <td>2500.00</td>
                                                            <td>2500.00</td>
                                                            <td>2500.00</td>
                                                            <td>2500.00</td>
                                                            <td>2500.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tuition Fees</td>
                                                            <td>4200.00</td>
                                                            <td>4800.00</td>
                                                            <td>5400.00</td>
                                                            <td>6000.00</td>
                                                            <td>6900.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Other Fees</td>
                                                            <td>8000.00</td>
                                                            <td>8000.00</td>
                                                            <td>8000.00</td>
                                                            <td>10000.00</td>
                                                            <td>10000.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Total</b></td>
                                                            <td><b>50500.00</b></td>
                                                            <td><b>50500.00</b></td>
                                                            <td><b>50500.00</b></td>
                                                            <td><b>65500.00</b></td>
                                                            <td><b>75500.00</b></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingThree" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <h5 class="card-title float-left mb-0">FEES COLLECTION SCHEDULE</h5>
                                            <div class="card-tools float-right">
                                                <button type="button" class="btn btn-tool"><i class="fa fa-plus-circle"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <table class="table table-bordered table-striped">
                                                    <thead bgcolor="#ffc107">
                                                        <th>Quarter</th>
                                                        <th>Fees Schedule for Month</th>
                                                        <th>LAST DATE FOR COLLECTION</th>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1st</td>
                                                            <td>April, May, June</td>
                                                            <td>15th April</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2nd</td>
                                                            <td>July, August, September</td>
                                                            <td>15th July</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3rd</td>
                                                            <td>October, November, December</td>
                                                            <td>15th October</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4th</td>
                                                            <td>January, February, March</td>
                                                            <td>15th January</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
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