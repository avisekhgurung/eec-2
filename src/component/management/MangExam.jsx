import React, { useEffect, useState } from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import MangTableSort from './MangTableSort';
import axios from 'axios';
import '../css/mangStyle.css';

export default function MangExam() {
    const legend = {
        width: 'calc(100% - 40%)'
    }
    // Load Notice
    const [get_Exams, getExams] = useState([]);
    const loadExams = async () => {
        const result = await axios.get("http://localhost:8000/api/all_exams");
        console.log(result.data)
        getExams(result.data.reverse());
    };
    // Load Class & Subject
    const [classes, setClass] = useState([]);
    const [sections, setSection] = useState([]);
    const [subject, setSubject] = useState("");
    const [subjectid, setSubjectID] = useState("");

    const loadClasses = async () => {
        const result = await axios.get("http://localhost:8000/api/all_classes");
        setClass(result.data.reverse());
    };
    const onSectionChange = async e => {
        const result = await axios.get(`http://localhost:8000/api/get_sec/${e.target.value}`);
        setSection(result.data.sections)
        setSubject(result.data.subject)
        setSubjectID(result.data.subjectid)
        setExam({
            [e.target.name]: e.target.value,
            "subjectid": result.data.subjectid
        })
    };
    //Post Exam
    const [exam, setExam] = useState({
        classname: "",
        section: "",
        subject: "",
        subjectid: "",
        examtype: "",
        totalmarks: "",
    });

    const onInputChange = e => {
        setExam({ ...exam, [e.target.name]: e.target.value });
    };
    const onSubmit = async e => {
        e.preventDefault();
        console.log(exam)
        await axios.post("http://localhost:8000/api/add_exam", exam);
        loadExams();
        window.location.reload();
    };

    useEffect(() => {
        loadExams();
        loadClasses();
    }, []);


    // // Delete Notice
    const deleteExam = async id => {
        await axios.delete(`http://localhost:8000/api/delete_exam/${id}`);
        loadExams();
    };

    // Update Exam
    const [upexam, setUpExam] = useState({
        examid: "",
        classname: "",
        section: "",
        subject: "",
        subjectid: "",
        examtype: "",
        totalmarks: ""
    });
    const getExamOnclick = async id => {
        const result = await axios.get(`http://localhost:8000/api/get_exam/${id}`);
        setUpExam(result.data);
        console.log("Up", upexam)
    };
    const onUpdateChange = e => {
        setUpExam({ ...upexam, [e.target.name]: e.target.value });
    };
    const updateExam = async e => {
        e.preventDefault();
        console.log("Data", upexam)
        await axios.patch(`http://localhost:8000/api/update_exam/${upexam.examid}`, upexam);
        console.log(upexam)
        loadExams();
        window.location.reload();
    };
    return (
        <React.Fragment>
            <div class="d-flex" id="wrapper">
                <MangSidebar />
                <div id="page-content-wrapper">
                    <MangNavbar />
                    <div class="sub-heading px-3 py-2">
                        <h3>Examination Schedule</h3>
                    </div>
                    <div class="container-fluid Mang-Exam py-4">
                        <div className="row">
                            <div className="col-lg-4">
                                <fieldset className="fieldset-border">
                                    <legend className="legend-text" style={legend}>Create New Exam</legend>
                                    <form onSubmit={e => onSubmit(e)}>
                                        <div className="form-group">
                                            <select class="form-control sort"
                                                name="classname"
                                                onChange={e => onSectionChange(e)}>
                                                <option selected>- Select Class -</option>
                                                {classes.map((e, key) => {
                                                    return <option key={key} value={e.classname}>{e.classname}</option>;
                                                })}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <select
                                                class="form-control sort"
                                                name="section"
                                                onChange={e => onInputChange(e)} >
                                                <option selected>- Select Section -</option>
                                                {sections.map((e =>
                                                    <option>{e}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <select
                                                class="form-control sort"
                                                name="subject"
                                                onChange={e => onInputChange(e)}>
                                                <option selected>- Select Subject -</option>
                                                {(
                                                    <option>{subject}</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Subject ID"
                                                name="subjectid"
                                                onChange={e => onInputChange(e)}
                                                value={subjectid}
                                                readOnly />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Exam Type"
                                                name="examtype"
                                                onChange={e => onInputChange(e)} />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Total Marks"
                                                name="totalmarks"
                                                onChange={e => onInputChange(e)} />
                                        </div>
                                        <div className="form-group">
                                            <button
                                                type="submit"
                                                className="btn btn-warning"
                                                id="submit">Submit</button>
                                        </div>
                                    </form>
                                </fieldset>
                            </div>
                            <div className="col-lg-8">
                                <MangTableSort />
                                <table class="table table-bordered">
                                    <thead bgcolor="#ffc107">
                                        <th>No</th>
                                        <th>Exam ID</th>
                                        <th>Class</th>
                                        <th>Section</th>
                                        <th>Subject ID</th>
                                        <th>Subject</th>
                                        <th>Exam Type</th>
                                        <th>Total Marks</th>
                                        <th>Action</th>
                                    </thead>
                                    <tbody>
                                        {get_Exams.map((item, index) => (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.examid}</td>
                                                <td>{item.classname}</td>
                                                <td>{item.section}</td>
                                                <td>{item.subjectid}</td>
                                                <td>{item.subject}</td>
                                                <td>{item.examtype}</td>
                                                <td>{item.totalmarks}</td>
                                                <td>
                                                    <i className="fa fa-edit mr-3"
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={() => getExamOnclick(item.examid)}
                                                        data-toggle="modal"
                                                        data-target="#editExam"
                                                    ></i>
                                                    <div class="modal fade" id="editExam" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                                        <div class="modal-dialog" role="document">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title" id="exampleModalLabel">Update Notice</h5>
                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <form onSubmit={e => updateExam(e)}>
                                                                    <div class="modal-body">
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                placeholder="Exam ID"
                                                                                name="examid"
                                                                                value={upexam.examid}
                                                                                readOnly />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <select class="form-control sort"
                                                                                name="classname"
                                                                                onChange={e => onSectionChange(e)}>
                                                                                <option>Select Class</option>
                                                                                {classes.map((e, key) => {
                                                                                    return <option key={key} value={upexam.classname}>{e.classname}</option>;
                                                                                })}
                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <select
                                                                                class="form-control sort"
                                                                                name="section"
                                                                                onChange={e => onUpdateChange(e)} >
                                                                                <option selected>Select Section</option>
                                                                                {sections.map((e =>
                                                                                    <option>{e}</option>
                                                                                ))}
                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <select
                                                                                class="form-control sort"
                                                                                name="subject"
                                                                                onChange={e => onUpdateChange(e)}>
                                                                                <option selected>Select Subject</option>
                                                                                {(
                                                                                    <option>{subject}</option>
                                                                                )}
                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                placeholder="Subject ID"
                                                                                name="subjectid"
                                                                                value={upexam.subjectid}
                                                                                readOnly />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                placeholder="Exam Type"
                                                                                name="examtype"
                                                                                value={upexam.examtype}
                                                                                onChange={e => onUpdateChange(e)} />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                placeholder="Total Marks"
                                                                                name="totalmarks"
                                                                                value={upexam.totalmarks}
                                                                                onChange={e => onUpdateChange(e)} />
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                        <button type="submit" className="btn btn-warning" id="submit">Submit</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <i className="fa fa-trash"
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={() => deleteExam(item.examid)}></i>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment >
    )

}