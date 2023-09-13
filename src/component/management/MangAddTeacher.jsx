import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import bsCustomFileInput from 'bs-custom-file-input';
import $ from 'jquery';
import axios from 'axios';
import '../css/mangStyle.css';

export default function MangAddTeacher() {

    $(function () {
        bsCustomFileInput.init()
    })
    let history = useHistory();

    //Load User ID
    const [id, setteacherid] = useState([]);
    const [tName, setName] = useState("");
    const [tEmail, setEmail] = useState("");

    const loadteacherid = async () => {
        const result = await axios.get("http://localhost:8000/api/allusers/");
        setteacherid(result.data);
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
        loadteacherid();
        loadClasses();
    }, []);

    //Add Teacher
    const [add_teacher, addTeacher] = useState({
        teacherid: "",
        name: "",
        classname: "",
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

    const onSectionChange = async e => {
        const result = await axios.get(`http://localhost:8000/api/get_sec/${e.target.value}`);
        setSection(result.data.sections)
        setSubject(result.data.subject)
        setSubjectID(result.data.subjectid)
        addTeacher({
            ...add_teacher,
            [e.target.name]: e.target.value
        })
    };
    const onIDChange = async e => {
        const result = await axios.get(`http://localhost:8000/api/get_user/${e.target.value}`);
        setName(result.data.name)
        setEmail(result.data.email)
        addTeacher(
            {
                ...add_teacher,
                teacherid: e.target.value,
                name: result.data.name,
                email: result.data.email
            }
        )
    }
    const onInputChange = e => {
        addTeacher({ ...add_teacher, [e.target.name]: e.target.value });
    };

    const onFileChange = e => {
        addTeacher({ ...add_teacher, profilephoto: e.target.files[0] });
    }

    const onSubmit = async e => {
        e.preventDefault();
        console.log(add_teacher)
        let data = new FormData()
        data.append('profilephoto', add_teacher.profilephoto);
        data.append('filename', add_teacher.profilephoto.name);
        data.append('teacherid', add_teacher.teacherid);
        data.append('name', add_teacher.name);
        data.append('classname', add_teacher.classname);
        data.append('section', add_teacher.section);
        data.append('subject', add_teacher.subject);
        data.append('gender', add_teacher.gender);
        data.append('dateofbirth', add_teacher.dateofbirth);
        data.append('religion', add_teacher.religion);
        data.append('presentaddress', add_teacher.presentaddress);
        data.append('permanentaddress', add_teacher.permanentaddress);
        data.append('mobilenumber', add_teacher.mobilenumber);
        data.append('email', add_teacher.email);
        console.log("AppendData", data)
        await axios.post("http://localhost:8000/api/add_teacher", data);
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
                            <legend className="legend-text">Add New Teacher</legend>
                            <form onSubmit={e => onSubmit(e)}>
                                <div className="row mb-3">
                                    <div className="col-lg-3">
                                        <label htmlFor="">ID</label>
                                        <input
                                            className="form-control"
                                            name="teacherid"
                                            list="list-id"
                                            onChange={e => onIDChange(e)}
                                            multiple
                                            required />
                                        <datalist id="list-id">
                                            {
                                                id.map((id, key) => {
                                                    return <option key={key} data-foo={id.userid} value={id.userid}>{id.userid}</option>;
                                                })
                                            }
                                        </datalist>
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={tName}
                                            onChange={e => onIDChange(e)}
                                            readOnly />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Class</label>
                                        <select
                                            className="form-control"
                                            name="classname"
                                            onChange={e => onSectionChange(e)}>
                                            <option defaultValue>- Select Class -</option>
                                            {classes.map(e => {
                                                return <option value={e.classname}>{e.classname}</option>;
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
                                                <option key={e}>{e}</option>
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
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Date of Birth</label>
                                        <input
                                            type="date"
                                            name="dateofbirth"
                                            className="form-control"
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">Religion</label>
                                        <input
                                            type="text"
                                            name="religion"
                                            className="form-control"
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
                                            onChange={e => onInputChange(e)}></textarea>
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="">Permanent Address</label>
                                        <textarea
                                            className="form-control"
                                            name="permanentaddress"
                                            rows="2"
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
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="">E-Mail</label>
                                        <input
                                            type="text"
                                            value={tEmail}
                                            name="email"
                                            className="form-control"
                                            onChange={e => onIDChange(e)}
                                            readOnly />
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
                                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
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