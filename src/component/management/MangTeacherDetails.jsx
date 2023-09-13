import React, { useEffect, useState } from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/mangStyle.css';

export default function MangTeacherDetails() {
    const edit = {
        color: '#343a40'
    }
    const { teacherid } = useParams();

    const [get_teacher, getTeacher] = useState({
        teacherid: "",
        name: "",
        class: "",
        section: "",
        subject: "",
        gender: "",
        dateofbirth: "",
        religion: "",
        presentaddress: "",
        permanentaddress: "",
        mobilenumber: "",
        email: "",
        profilephoto: ""
    });

    const loadClass = async () => {
        const result = await axios.get(`http://localhost:8000/api/get_teacher/${teacherid}`);
        getTeacher(result.data);
    };

    useEffect(() => {
        loadClass();
    }, []);
    return (
        <React.Fragment>
            <div className="d-flex" id="wrapper">
                <MangSidebar />
                <div id="page-content-wrapper">
                    <MangNavbar />
                    <div className="container-fluid Mang-Add-Teacher py-4">
                        <div className="container mt-3 mb-3">
                            <div className="form-row">
                                <div className="col-lg-9">
                                    <h5>{get_teacher.name}</h5>
                                </div>
                                <div className="col-lg-3 text-right">
                                    <Link to="/mang_add_teacher">
                                        <i className="fa fa-edit mr-3" style={edit}></i>
                                    </Link>
                                    <Link to="">
                                        <i className="fa fa-print" style={edit}></i>
                                    </Link>
                                </div>
                            </div>
                            <hr className="mt-0" />
                            <center>
                                <div className="">
                                    <img
                                        className="rounded-circle p-2"
                                        style={{ border: '2px solid #ffc107' }}
                                        src={"http://localhost:8000/" + get_teacher.profilephoto} 
                                        alt="Teacher Profile"
                                        width="150" />
                                </div>
                            </center>
                            <br />
                            <div className="form-row form-group">
                                <div className="col-lg-2">
                                    <label htmlFor="">ID</label>
                                </div>
                                <div className="col-lg-4">
                                    <strong>{get_teacher.teacherid}</strong>
                                </div>
                                <div className="col-lg-2">
                                    <label htmlFor="">Name</label>
                                </div>
                                <div className="col-lg-4">
                                    <strong>{get_teacher.name}</strong>
                                </div>
                            </div>
                            <div className="form-row form-group">
                                <div className="col-lg-2">
                                    <label htmlFor="">Gender</label>
                                </div>
                                <div className="col-lg-4">
                                    <strong>{get_teacher.gender}</strong>
                                </div>
                                <div className="col-lg-2">
                                    <label htmlFor="">DOB</label>
                                </div>
                                <div className="col-lg-4">
                                    <strong>{get_teacher.dateofbirth}</strong>
                                </div>
                            </div>
                            <div className="form-row form-group">
                                <div className="col-lg-2">
                                    <label htmlFor="">Class</label>
                                </div>
                                <div className="col-lg-4">
                                    <strong>{get_teacher.classname}</strong>
                                </div>
                                <div className="col-lg-2">
                                    <label htmlFor="">Subject</label>
                                </div>
                                <div className="col-lg-4">
                                    <strong>{get_teacher.subject}</strong>
                                </div>
                            </div>
                            <div className="form-row form-group">
                                <div className="col-lg-2">
                                    <label htmlFor="">Section</label>
                                </div>
                                <div className="col-lg-4">
                                    <strong>{get_teacher.section}</strong>
                                </div>
                                <div className="col-lg-2">
                                    <label htmlFor="">Religion</label>
                                </div>
                                <div className="col-lg-4">
                                    <strong>{get_teacher.religion}</strong>
                                </div>
                            </div>
                            <div className="form-row form-group">
                                <div className="col-lg-2">
                                    <label htmlFor="">Mobile No</label>
                                </div>
                                <div className="col-lg-4">
                                    <strong>{get_teacher.mobilenumber}</strong>
                                </div>
                                <div className="col-lg-2">
                                    <label htmlFor="">E-Mail</label>
                                </div>
                                <div className="col-lg-4">
                                    <strong>{get_teacher.email}</strong>
                                </div>
                            </div>
                            <div className="form-row form-group">
                                <div className="col-lg-2">
                                    <label htmlFor="">Present Address</label>
                                </div>
                                <div className="col-lg-4">
                                    <strong>{get_teacher.presentaddress}</strong>
                                </div>
                                <div className="col-lg-2">
                                    <label htmlFor="">Permanent Address</label>
                                </div>
                                <div className="col-lg-4">
                                    <strong>{get_teacher.permanentaddress}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}