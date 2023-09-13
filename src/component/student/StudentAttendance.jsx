import React from 'react';
import StudentSidebar from './StudentSidebar';
import StudentNavbar from './StudentNavbar';
import '../css/studentStyle.css';

export default class StudentAttendance extends React.Component {
    render() {
        const table = {
            fontSize: '14px',
        }
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <StudentSidebar />
                    <div id="page-content-wrapper">
                        <StudentNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Attendance</h3>
                        </div>
                        <div class="container-fluid Attendence py-4">
                            <div className="table-section">
                                <table class="table table-bordered" style={table}>
                                    <thead bgcolor="#ffc107">
                                        <tr>
                                            <th rowSpan="2">Month</th>
                                            <th colSpan="31" className="text-center">Days</th>
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
                                            <th>January</th>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <th>February</th>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <th>March</th>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <th>April</th>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <th>May</th>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <th>June</th>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <th>July</th>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <th>August</th>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <th>September</th>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <th>October</th>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <th>November</th>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <th>December</th>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
                                            <td><i className="fa fa-times"></i></td>
                                            <td><i className="fa fa-check"></i></td>
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