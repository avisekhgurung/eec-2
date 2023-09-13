import React, { useState } from 'react';
import StudentNavbar from './StudentNavbar';
import StudentSidebar from './StudentSidebar';
import bsCustomFileInput from 'bs-custom-file-input';
import $ from 'jquery';
import axios from 'axios';

export default function StudentComplaint() {
    const style = {
        width: 'calc(100% - 60%)'
    }

    $(function () {
        bsCustomFileInput.init()
    })

    // Get Current Date
    const tempDate = new Date();
    var setDate = tempDate.getDate() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getFullYear() + ' ' + tempDate.getHours() + ':' + tempDate.getMinutes();
    const currDate = setDate;


    //Add complaint
    const [add_complaint, addcomplaint] = useState({
        date: setDate,
        complainantname: "",
        complainantemail: "",
        complainttype: "",
        statement: "",
        refferenceletter: ""
    });

    const onInputChange = e => {
        addcomplaint({ ...add_complaint, [e.target.name]: e.target.value });
    };

    // const onDateChange = e => {
    //     addcomplaint({ ...add_complaint, date: e.target.value });
    // };

    const onFileChange = e => {
        addcomplaint({ ...add_complaint, refferenceletter: e.target.files[0] });
    }

    const onSubmit = async e => {
        e.preventDefault();
        console.log(add_complaint)
        let data = new FormData()
        data.append('refferenceletter', add_complaint.refferenceletter);
        data.append('filename', add_complaint.refferenceletter.name);
        data.append('date', add_complaint.date);
        data.append('complainantname', add_complaint.complainantname);
        data.append('complainantemail', add_complaint.complainantemail);
        data.append('complainttype', add_complaint.complainttype);
        data.append('statement', add_complaint.statement);
        console.log("AppendData", data)
        await axios.post("http://localhost:8000/api/add_complaint", data);
        window.location.reload();
    }
    return (
        <React.Fragment>
            <div className="d-flex" id="wrapper">
                <StudentSidebar />
                <div id="page-content-wrapper">
                    <StudentNavbar />
                    <div className="sub-heading px-3 py-2">
                        <h3>Complaint </h3>
                    </div>
                    <div className="container-fluid ComplaintEnquiry py-4">
                        <div className="container">
                            <div className="row justify-content-md-center">
                                <div className="col-md-8">
                                    <fieldset className="fieldset-border">
                                        <legend className="legend-text" style={style}>Make new Complaint</legend>
                                        <form onSubmit={e => onSubmit(e)}>
                                            <div className="form-group">
                                                <label>Date</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="date"
                                                    value={currDate}
                                                    onChange={e => onInputChange(e)}
                                                    readOnly />
                                            </div>
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your Name"
                                                    name="complainantname"
                                                    onChange={e => onInputChange(e)} />
                                            </div>
                                            <div className="form-group">
                                                <label>E-Mail</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter your E-Mail"
                                                    name="complainantemail"
                                                    onChange={e => onInputChange(e)} />
                                            </div>
                                            <div className="form-group">
                                                <label>Comaplaint</label>
                                                <select
                                                    className="form-control"
                                                    name="complainttype"
                                                    onChange={e => onInputChange(e)}>
                                                    <option>- Select Complaint Type -</option>
                                                    <option>General</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Statement</label>
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Write your statement here.."
                                                    name="statement"
                                                    onChange={e => onInputChange(e)}></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label>Reference Letter</label>
                                                <div className="custom-file">
                                                    <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        id="customFile"
                                                        name="refferenceletter"
                                                        onChange={e => onFileChange(e)} />
                                                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                                </div>
                                            </div>
                                            <center>
                                                <button
                                                    type="submit"
                                                    className="btn btn-warning"
                                                    id="submit">Submit</button>
                                            </center>
                                        </form>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}