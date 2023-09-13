import React from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';

export default class MangAttendance extends React.Component {
    render() {
        // const [value, setStartDate] = useState(new Date());
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <MangSidebar />
                    <div id="page-content-wrapper">
                        <MangNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Attendence</h3>
                        </div>
                        <div class="container-fluid Attendence py-4">
                            <form action="">
                                <div class="form-row mt-3">
                                    <div class="form-group col-md-3">
                                        <div class="input-group">
                                            <input type="text" class="form-control search" placeholder="Search.." />
                                            <div class="input-group-append">
                                                <span class="input-group-text">
                                                    <img src="images/icon/search-black.png" alt="Search" width="20" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <select class="form-control sort">
                                            <option selected>Sort By Class</option>
                                            <option value="">I</option>
                                            <option value="">II</option>
                                            <option value="">III</option>
                                            <option value="">IV</option>
                                            <option value="">V</option>
                                            <option value="">VI</option>
                                            <option value="">VII</option>
                                            <option value="">VIII</option>
                                            <option value="">IX</option>
                                            <option value="">X</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <select class="form-control sort">
                                            <option value="10">Sort By Section</option>
                                            <option value="15">A</option>
                                            <option value="20">B</option>
                                            <option value="50">C</option>
                                            <option value="70">D</option>
                                            <option value="50">E</option>
                                            <option value="70">F</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <input
                                            type="month"
                                            className="form-control"
                                            name=""
                                            id=""
                                        />
                                    </div>
                                </div>
                                <button className="btn btn-warning" id="submit">Search</button>
                            </form>
                            <div className="form-row mt-5">
                                <div className="col-md-6">
                                    <h5>Attendence Sheet for January, 2021</h5>
                                </div>
                                <div className="col-md-6 text-right">
                                    <h5>Class: I, Section: B</h5>
                                </div>
                            </div>
                            <div class="table-section">
                                <table class="table table-bordered" style={{ fontSize: '14px' }}>
                                    <thead bgcolor="#ffc107">
                                        <tr>
                                            <th rowspan="2">Students</th>
                                            <th colspan="31" class="text-center">Days</th>

                                        </tr>
                                        <tr>
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                            <th>4</th>
                                            <th>5</th>
                                            <th>6</th>
                                            <th>7</th>
                                            <th>8</th>
                                            <th>9</th>
                                            <th>10</th>
                                            <th>11</th>
                                            <th>12</th>
                                            <th>13</th>
                                            <th>14</th>
                                            <th>15</th>
                                            <th>16</th>
                                            <th>17</th>
                                            <th>18</th>
                                            <th>19</th>
                                            <th>20</th>
                                            <th>21</th>
                                            <th>22</th>
                                            <th>23</th>
                                            <th>24</th>
                                            <th>25</th>
                                            <th>26</th>
                                            <th>27</th>
                                            <th>28</th>
                                            <th>29</th>
                                            <th>30</th>
                                            <th>31</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>@StudentName</th>
                                            <td><i class="fa fa-check"></i></td>
                                            <td><i class="fa fa-times"></i></td>
                                            <td><i class="fa fa-check"></i></td>
                                            <td><i class="fa fa-times"></i></td>
                                            <td><i class="fa fa-check"></i></td>
                                            <td><i class="fa fa-times"></i></td>
                                            <td><i class="fa fa-check"></i></td>
                                            <td><i class="fa fa-times"></i></td>
                                            <td><i class="fa fa-check"></i></td>
                                            <td><i class="fa fa-times"></i></td>
                                            <td><i class="fa fa-check"></i></td>
                                            <td><i class="fa fa-times"></i></td>
                                            <td><i class="fa fa-check"></i></td>
                                            <td><i class="fa fa-times"></i></td>
                                            <td><i class="fa fa-check"></i></td>
                                            <td><i class="fa fa-times"></i></td>
                                            <td><i class="fa fa-check"></i></td>
                                            <td><i class="fa fa-times"></i></td>
                                            <td><i class="fa fa-check"></i></td>
                                            <td><i class="fa fa-times"></i></td>
                                            <td><i class="fa fa-check"></i></td>
                                            <td><i class="fa fa-times"></i></td>
                                            <td><i class="fa fa-check"></i></td>
                                            <td><i class="fa fa-times"></i></td>
                                            <td><i class="fa fa-check"></i></td>
                                            <td><i class="fa fa-times"></i></td>
                                            <td><i class="fa fa-check"></i></td>
                                            <td><i class="fa fa-times"></i></td>
                                            <td><i class="fa fa-check"></i></td>
                                            <td><i class="fa fa-times"></i></td>
                                            <td><i class="fa fa-check"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}