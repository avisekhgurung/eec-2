import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import axios from 'axios';

export default function MangComplaintDetails() {
    const { complaintid } = useParams();
    let history = useHistory();

    //Get Complaint
    const loadComplaint = async () => {
        const result = await axios.get(`http://localhost:8000/api/get_complaint/${complaintid}`);
        upComplaint(result.data);
    };

    useEffect(() => {
        loadComplaint();
    }, []);

    //Update Complaint
    const [up_complaint, upComplaint] = useState({
        investigator: "",
        status: ""
    });

    const onInputChange = e => {
        upComplaint({ ...up_complaint, [e.target.name]: e.target.value });
    }
    const onSubmit = async e => {
        e.preventDefault();
        console.log(up_complaint)
        await axios.patch(`http://localhost:8000/api/update_complaint/${complaintid}`, up_complaint);
        history.push("/mang_complaints");
    }

    return (
        <React.Fragment>
            <div class="d-flex" id="wrapper">
                <MangSidebar />
                <div id="page-content-wrapper">
                    <MangNavbar />
                    <div class="sub-heading px-3 py-2">
                        <h3>Details of Complaint</h3>
                    </div>
                    <div className="container-fluid Mang-Complaint-Details py-4">
                        <fieldset className="fieldset-border">
                            <legend className="legend-text">Manage Complaint</legend>
                            <form onSubmit={e => onSubmit(e)}>
                                <div className="form-row mb-3">
                                    <div className="col-lg-4">
                                        <label className="col-form-label">No</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={up_complaint.complaintid}
                                            readOnly />
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col-lg-4">
                                        <label className="col-form-label">Date</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={up_complaint.date}
                                            readOnly />
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col-lg-4">
                                        <label className="col-form-label">Complainant Name</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={up_complaint.complainantname}
                                            readOnly />
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col-lg-4">
                                        <label className="col-form-label">Complainant E-Mail</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={up_complaint.complainantemail}
                                            readOnly />
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col-lg-4">
                                        <label className="col-form-label">Ref. Letter</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={up_complaint.filename}
                                            readOnly />
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col-lg-4">
                                        <label className="col-form-label">Assign Investigator</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search.."
                                            name="investigator"
                                            value={up_complaint.investigator}
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col-lg-4">
                                        <label className="col-form-label">Status</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <select
                                            className="custom-select"
                                            name="status"
                                            value={up_complaint.status}
                                            onChange={e => onInputChange(e)}>
                                            <option selected>- Select Status -</option>
                                            <option>Initiated</option>
                                            <option>Under Investigation</option>
                                            <option>Closed</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit"
                                    className="btn btn-warning"
                                    id="submit">Submit</button>
                            </form>
                        </fieldset>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}