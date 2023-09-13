import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import axios from 'axios';
import '../css/mangStyle.css';

export default function MangEditClass() {
    const legend = {
        width: 'calc(100% - 75%)'
    }
    const { classid } = useParams();
    let history = useHistory();

    const [classes, setClass] = useState({
        classname: "",
        sections: "",
        subjectid: "",
        subject: "",
        chapter: "",
        topic: ""

    });
    const { classname, subjectid, subject, chapter, topic } = classes

    const onInputChange = e => {
        setClass({ ...classes, [e.target.name]: e.target.value });
    };
    const loadClass = async () => {
        const result = await axios.get(`http://localhost:8000/api/get_class/${classid}`);
        setClass(result.data);
    };
    useEffect(() => {
        loadClass();
    }, []);
    const updateClass = async e => {
        e.preventDefault();
        console.log("Data", classes)
        await axios.patch(`http://localhost:8000/api/update_class/${classid}`, classes);
        history.push("/mang_class");
    };
    return (
        <React.Fragment>
            <div class="d-flex" id="wrapper">
                <MangSidebar />
                <div id="page-content-wrapper">
                    <MangNavbar />
                    <div class="sub-heading px-3 py-2">
                        <h3>Edit Class</h3>
                    </div>
                    <div class="container-fluid Mang-Add-Teacher py-4">
                        <fieldset className="fieldset-border">
                            <legend className="legend-text" style={legend}>Class & Subject Information</legend>
                            <form onSubmit={e => updateClass(e)}>
                                <div className="row">
                                    <div className="col-lg-6 form-group">
                                        <label htmlFor="">Class ID :</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="classid"
                                            value={classid}
                                            onChange={e => onInputChange(e)}
                                            readOnly />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label htmlFor="">Class :</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="classname"
                                            value={classname}
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Sections :</label>
                                    <div class="row form-group">
                                        <div className="col-lg-2">
                                            <div className="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    name="sections"
                                                    onChange=""
                                                    value="A" />
                                                <label class="form-check-label" for="">A</label>
                                            </div>
                                            {/* <input type="number" className="form-control" name="number_of_student" onChange= placeholder="No of Students" /> */}
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    name="sections"
                                                    onChange=""
                                                    value="B" />
                                                <label class="form-check-label" for="">B</label>
                                            </div>
                                            {/* <input type="number" className="form-control" name="number_of_student" onChange= placeholder="No of Students" /> */}
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    name="sections"
                                                    onChange=""
                                                    value="C" />
                                                <label class="form-check-label" for="">C</label>
                                            </div>
                                            {/* <input type="number" className="form-control" name="number_of_student" onChange= placeholder="No of Students" /> */}
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    name="sections"
                                                    onChange=""
                                                    value="D" />
                                                <label class="form-check-label" for="">D</label>
                                            </div>
                                            {/* <input type="number" className="form-control" name="number_of_student" onChange= placeholder="No of Students" /> */}
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    name="sections"
                                                    onChange=""
                                                    value="E" />
                                                <label class="form-check-label" for="">E</label>
                                            </div>
                                            {/* <input type="number" className="form-control" name="number_of_student" onChange= placeholder="No of Students" /> */}
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    name="sections"
                                                    onChange=""
                                                    value="F" />
                                                <label class="form-check-label" for="">F</label>
                                            </div>
                                            {/* <input type="number" className="form-control" name="number_of_student" onChange= placeholder="No of Students" /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 form-group">
                                        <label htmlFor="">Subject ID :</label>
                                        <input
                                            type="text"
                                            value={subjectid}
                                            onChange={e => onInputChange(e)}
                                            className="form-control"
                                            name="subjectid"
                                            readOnly />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label htmlFor="">Subject :</label>
                                        <input
                                            type="text"
                                            value={subject}
                                            onChange={e => onInputChange(e)}
                                            className="form-control"
                                            name="subject" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Syllabus:</label>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label>Chapter:</label>
                                            <textarea
                                                className="form-control"
                                                name="chapter"
                                                value={chapter}
                                                onChange={e => onInputChange(e)}
                                                rows="10"></textarea>
                                        </div>
                                        <div className="col-lg-6">
                                            <label>Topic:</label>
                                            <textarea
                                                className="form-control"
                                                name="topic"
                                                value={topic}
                                                onChange={e => onInputChange(e)}
                                                rows="10"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type="submit"
                                    className="btn btn-warning"
                                    id="submit"
                                    value="Submit" />
                            </form>
                        </fieldset>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}