import React, { useEffect, useState } from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import { Link } from 'react-router-dom';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import axios from 'axios';
import 'bootstrap-daterangepicker/daterangepicker.css';

export default function MangComplaints() {

    const [all_complaints, allComplaints] = useState([]);

    const loadComplaints = async () => {
        const result = await axios.get("http://localhost:8000/api/all_complaints");
        allComplaints(result.data.reverse());
    };
    const deleteComplaint = async complaintid => {
        await axios.delete(`http://localhost:8000/api/delete_complaint/${complaintid}`);
        loadComplaints();
    };
    useEffect(() => {
        loadComplaints();
    }, []);

    return (
        <React.Fragment>
            <div className="d-flex" id="wrapper">
                <MangSidebar />
                <div id="page-content-wrapper">
                    <MangNavbar />
                    <div className="sub-heading px-3 py-2">
                        <h3>Complaints</h3>
                    </div>
                    <div className="container-fluid Mang-Complaints py-4">
                        <form action="">
                            <div className="input-group col-lg-3 px-0 mb-3">
                                <DateRangePicker>
                                    <input type="text" className="form-control" />
                                </DateRangePicker>
                                <div className="input-group-append">
                                    <span className="input-group-text" id="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <table className="table table-bordered">
                                <thead bgcolor="#ffc107">
                                    <tr>
                                        <th>No</th>
                                        <th>Complaint ID</th>
                                        <th>Date</th>
                                        <th>Complainant Name</th>
                                        <th>Complainant E-Mail</th>
                                        <th>Statement</th>
                                        <th>Ref. Letter</th>
                                        <th>Investigator</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {all_complaints.map((e, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{e.complaintid}</td>
                                            <td>{e.date}</td>
                                            <td>{e.complainantname}</td>
                                            <td>{e.complainantemail}</td>
                                            <td>{e.statement}</td>
                                            <td>
                                                <a href={"http://localhost:8000/" + e.refferenceletter}>
                                                    {e.filename}
                                                </a>
                                            </td>
                                            <td>{e.investigator}</td>
                                            <td>{e.status}</td>
                                            <td>
                                                <Link to={`/mang_complaint_details/${e.complaintid}`} >
                                                    <i className="fa fa-edit mr-2"
                                                    ></i>
                                                </Link>
                                                <i className="fa fa-trash"
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => deleteComplaint(e.complaintid)}></i>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}