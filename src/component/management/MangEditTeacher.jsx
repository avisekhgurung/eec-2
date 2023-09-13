import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import bsCustomFileInput from 'bs-custom-file-input';
import $ from 'jquery';
import axios from 'axios';
import '../css/mangStyle.css';

export default function MangEditTeacher() {
    $(function () {
        bsCustomFileInput.init()
    })
    let history = useHistory();
    const { teacherid } = useParams();


    //Update Teacher

    const [get_teacher, upTeacher] = useState({
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
        profilephoto: "",
        filename:"",
    });

    const loadTeacher = async () => {
        const result = await axios.get(`http://localhost:8000/api/get_teacher/${teacherid}`);
        upTeacher(result.data);
    };

    //Load Class
    const [classes, setClass] = useState([]);
    const [sections, setSection] = useState([]);
    const [subject, setSubject] = useState("");
    const [subjectid, setSubjectID] = useState("");

    const loadClasses = async () => {
        const result = await axios.get("http://localhost:8000/api/all_classes");
        setClass(result.data.reverse());
    };

    // useEffect
    useEffect(() => {
        loadTeacher();
        loadClasses();
    }, []);


    const onSectionChange = async e => {
        const result = await axios.get(`http://localhost:8000/api/get_sec/${e.target.value}`);
        setSection(result.data.sections)
        setSubject(result.data.subject)
        setSubjectID(result.data.subjectid)
        upTeacher({
            ...get_teacher,
            class: e.target.value
        })
    };
    const onInputChange = e => {
        upTeacher({ ...get_teacher, [e.target.name]: e.target.value });
    };

    const onFileChange = e => {
        upTeacher({ ...get_teacher, profilephoto: e.target.files[0] });
    }
    const onSubmit = async e => {
        e.preventDefault();
        console.log(get_teacher)
        console.log(get_teacher.profilephoto.name)
        let data = new FormData()
        data.append('profilephoto', get_teacher.profilephoto);
        data.append('filename', get_teacher.profilephoto.name);
        data.append('name', get_teacher.name);
        data.append('class', get_teacher.class);
        data.append('section', get_teacher.section);
        data.append('subject', get_teacher.subject);
        data.append('gender', get_teacher.gender);
        data.append('dateofbirth', get_teacher.dateofbirth);
        data.append('religion', get_teacher.religion);
        data.append('presentaddress', get_teacher.presentaddress);
        data.append('permanentaddress', get_teacher.permanentaddress);
        data.append('mobilenumber', get_teacher.mobilenumber);
        data.append('email', get_teacher.email);
        console.log("AppendData", data)
        await axios.patch(`http://localhost:8000/api/update_teacher/${teacherid}`, data);
        history.push("/mang_teacher");
    }
    return (
        <React.Fragment>
            <div className="d-flex" id="wrapper">
                <MangSidebar />
                <div id="page-content-wrapper">
                    <MangNavbar />
                    <div className="sub-heading px-3 py-2">
                        <h3>Teacher Information</h3>
                    </div>
                    <div className="container-fluid Mang-Add-Teacher py-4">
                        <fieldset className="fieldset-border">
                            <legend className="legend-text">Edit Teacher Details</legend>
                            <form onSubmit={e => onSubmit(e)}>
                                <div className="row mb-3">
                                    <div className="col-lg-3">
                                        <label htmlFor="">ID</label>
                                        <input
                                            className="form-control"
                                            name="teacherid"
                                            value={get_teacher.teacherid}
                                            readOnly />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={get_teacher.name}
                                            onChange={e => onInputChange(e)}
                                        />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Class</label>
                                        <select
                                            className="form-control"
                                            onChange={e => onSectionChange(e)}
                                        >
                                            <option defaultValue>- Select Class -</option>
                                            {classes.map(e => {
                                                return <option value={get_teacher.classname}>{e.classname}</option>;
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Section</label>
                                        <select
                                            className="form-control"
                                            name="section"
                                            onChange={e => onInputChange(e)}>
                                            <option defaultValue>- Select Section -</option>
                                            {sections.map(e =>
                                                <option>{e}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-3">
                                        <label htmlFor="">Subject</label>
                                        <select
                                            className="form-control"
                                            name="subject"
                                            onChange={e => onInputChange(e)}>
                                            <option defaultChecked>- Select Subject -</option>
                                            {(
                                                <option>{subjectid} - {subject}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Gender</label>
                                        <input
                                            type="text"
                                            name="gender"
                                            className="form-control"
                                            value={get_teacher.gender}
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Date of Birth</label>
                                        <input
                                            type="date"
                                            name="dateofbirth"
                                            className="form-control"
                                            value={get_teacher.dateofbirth}
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Religion</label>
                                        <input
                                            type="text"
                                            name="religion"
                                            className="form-control"
                                            value={get_teacher.religion}
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-6">
                                        <label htmlFor="">Present Address</label>
                                        <textarea
                                            className="form-control"
                                            name="presentaddress"
                                            rows="2"
                                            value={get_teacher.presentaddress}
                                            onChange={e => onInputChange(e)}></textarea>
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="">Permanent Address</label>
                                        <textarea
                                            className="form-control"
                                            name="permanentaddress"
                                            rows="2"
                                            value={get_teacher.permanentaddress}
                                            onChange={e => onInputChange(e)}></textarea>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-3">
                                        <label htmlFor="">Mobile No</label>
                                        <input
                                            type="text"
                                            name="mobilenumber"
                                            className="form-control"
                                            value={get_teacher.mobilenumber}
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">E-Mail</label>
                                        <input
                                            type="text"
                                            value={get_teacher.email}
                                            name="email"
                                            className="form-control"
                                            value={get_teacher.email}
                                            onChange={e => onInputChange(e)}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="">Upload Photo <small className="text-danger">(150px x 150px)</small></label>
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="customFile"
                                                name="profilephoto"
                                                onChange={e => onFileChange(e)} />
                                            <label className="custom-file-label" htmlFor="customFile">{get_teacher.filename}</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-warning" id="submit">Submit</button>
                            </form>
                        </fieldset>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}