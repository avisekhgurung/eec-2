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
    const [classes, setClass] = useState([]);
    const [sections, setSection] = useState([]);
    const [subject, setSubject] = useState("");
    const [subjectid, setSubjectID] = useState("");

    // loadClass
    const loadClasses = async () => {
        const result = await axios.get("http://localhost:8000/api/all_classes");
        setClass(result.data.reverse());
    };
    const onSectionChange = async e => {
        const result = await axios.get(`http://localhost:8000/api/get_sec/${e.target.value}`);
        setSection(result.data.sections)
        setSubject(result.data.subject)
        setSubjectID(result.data.subjectid)
        addRoutine({
            [e.target.name]: e.target.value,
            "subjectid": result.data.subjectid
        })
    };

    // Load Routine
    const [get_routines, getRoutines] = useState([]);
    const loadRoutine = async () => {
        const result = await axios.get("http://localhost:8000/api/all_routines");
        getRoutines(result.data.reverse());
    };

    useEffect(() => {
        loadRoutine();
        loadClasses();
    }, []);


    //Post Routine
    const [add_routine, addRoutine] = useState({
        classname: "",
        section: "",
        subject: "",
        subjectid: "",
        day: "",
        timefrom: "",
        timeto: ""
    });

    const onInputChange = e => {
        addRoutine({ ...add_routine, [e.target.name]: e.target.value });
    };
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/add_routine", add_routine);
        loadRoutine();
        window.location.reload();
    };

    // // Delete Notice
    const deleteRoutine = async routineid => {
        await axios.delete(`http://localhost:8000/api/delete_routine/${routineid}`);
        loadRoutine();
    };

    // Update Exam
    const [update_routine, updateRoutine] = useState({
        routineid: "",
        classname: "",
        section: "",
        subject: "",
        subjectid: "",
        day: "",
        timefrom: "",
        timeto: ""
    });
    const getRoutine = async routineid => {
        const result = await axios.get(`http://localhost:8000/api/get_routine/${routineid}`);
        updateRoutine(result.data);
        console.log("Up", update_routine)
    };
    const onUpdateChange = e => {
        updateRoutine({ ...update_routine, [e.target.name]: e.target.value });
    };
    const onUpdate = async e => {
        e.preventDefault();
        console.log("Updated Data", update_routine)
        await axios.patch(`http://localhost:8000/api/update_routine/${update_routine.routineid}`, update_routine);
        loadRoutine();
        window.location.reload();
    };
    return (
        <React.Fragment>
            <div class="d-flex" id="wrapper">
                <MangSidebar />
                <div id="page-content-wrapper">
                    <MangNavbar />
                    <div class="sub-heading px-3 py-2">
                        <h3>Routine</h3>
                    </div>
                    <div class="container-fluid Mang-Routine py-4">
                        <div className="row">
                            <div className="col-lg-4">
                                <fieldset className="fieldset-border">
                                    <legend className="legend-text" style={legend}>Create Routine</legend>
                                    <form onSubmit={e => onSubmit(e)}>
                                        <div className="form-group">
                                            <select
                                                class="form-control"
                                                name="classname"
                                                onChange={e => onSectionChange(e)}>
                                                <option selected>- Select Class -</option>
                                                {classes.map((e, key) => {
                                                    return <option key={key} value={update_routine.classname}>{e.classname}</option>;
                                                })}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <select
                                                class="form-control"
                                                name="section"
                                                onChange={e => onInputChange(e)}>
                                                <option selected>- Select Section -</option>
                                                {sections.map((e =>
                                                    <option>{e}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <select
                                                class="form-control"
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
                                                value={subjectid}
                                                name="subjectid"
                                                onChange={e => onInputChange(e)} />
                                        </div>
                                        <div className="form-group">
                                            <select
                                                className="form-control"
                                                name="day"
                                                onChange={e => onInputChange(e)}>
                                                <option>- Select Day-</option>
                                                <option>Monday</option>
                                                <option>Tuesday</option>
                                                <option>Wednesday</option>
                                                <option>Thursday</option>
                                                <option>Friday</option>
                                                <option>Saturday</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">From</span>
                                                </div>
                                                <input
                                                    type="time"
                                                    class="form-control"
                                                    name="timefrom"
                                                    onChange={e => onInputChange(e)} />
                                            </div>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">To</span>
                                                </div>
                                                <input
                                                    type="time"
                                                    class="form-control"
                                                    name="timeto"
                                                    onChange={e => onInputChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Teacher Name"
                                                name="teachername"
                                                onChange={e => onInputChange(e)} />
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-warning" id="submit">Submit</button>
                                        </div>
                                    </form>
                                </fieldset>
                            </div>
                            <div className="col-lg-8">
                                <MangTableSort />
                                <table class="table table-bordered">
                                    <thead bgcolor="#ffc107">
                                        <th>No</th>
                                        <th>Routine ID</th>
                                        <th>Day</th>
                                        <th>Timing</th>
                                        <th>Class</th>
                                        <th>Section</th>
                                        <th>Subject ID</th>
                                        <th>Subject</th>
                                        <th>Teacher</th>
                                        <th>Action</th>
                                    </thead>
                                    <tbody>
                                        {get_routines.map((item, index) => (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.routineid}</td>
                                                <td>{item.day}</td>
                                                <td>{item.timefrom} - {item.timeto}</td>
                                                <td>{item.classname}</td>
                                                <td>{item.section}</td>
                                                <td>{item.subjectid}</td>
                                                <td>{item.subject}</td>
                                                <td>{item.teachername}</td>
                                                <td>
                                                    <i className="fa fa-edit mr-3"
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={() => getRoutine(item.routineid)}
                                                        data-toggle="modal"
                                                        data-target="#editRoutine"
                                                    ></i>
                                                    <div class="modal fade" id="editRoutine" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                                        <div class="modal-dialog" role="document">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title" id="exampleModalLabel">Update Routine</h5>
                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <form onSubmit={e => onUpdate(e)}>
                                                                    <div class="modal-body">
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                placeholder="Exam ID"
                                                                                name="examid"
                                                                                value={update_routine.routineid}
                                                                                readOnly />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <select
                                                                                class="form-control"
                                                                                name="classname"
                                                                                onChange={e => onSectionChange(e)}>
                                                                                <option selected>- Select Class -</option>
                                                                                {classes.map((e, key) => {
                                                                                    return <option key={key} value={update_routine.classname}>{e.classname}</option>;
                                                                                })}
                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <select
                                                                                class="form-control"
                                                                                name="section"
                                                                                onChange={e => onUpdateChange(e)}>
                                                                                <option selected>- Select Section -</option>
                                                                                {sections.map((e =>
                                                                                    <option>{e}</option>
                                                                                ))}
                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <select
                                                                                class="form-control"
                                                                                name="subject"
                                                                                onChange={e => onUpdateChange(e)}>
                                                                                <option selected>- Select Subject -</option>
                                                                                {(
                                                                                    <option>{update_routine.subject}</option>
                                                                                )}
                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                placeholder="Subject ID"
                                                                                value={update_routine.subjectid}
                                                                                name="subjectid"
                                                                                onChange={e => onUpdateChange(e)} />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <select
                                                                                className="form-control"
                                                                                name="day"
                                                                                value={update_routine.day}
                                                                                onChange={e => onUpdateChange(e)}>
                                                                                <option>- Select Day-</option>
                                                                                <option>Monday</option>
                                                                                <option>Tuesday</option>
                                                                                <option>Wednesday</option>
                                                                                <option>Thursday</option>
                                                                                <option>Friday</option>
                                                                                <option>Saturday</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <div class="input-group mb-3">
                                                                                <div class="input-group-prepend">
                                                                                    <span class="input-group-text">From</span>
                                                                                </div>
                                                                                <input
                                                                                    type="time"
                                                                                    class="form-control"
                                                                                    name="timefrom"
                                                                                    value={update_routine.timefrom}
                                                                                    onChange={e => onUpdateChange(e)} />
                                                                            </div>
                                                                            <div class="input-group">
                                                                                <div class="input-group-prepend">
                                                                                    <span class="input-group-text">To</span>
                                                                                </div>
                                                                                <input
                                                                                    type="time"
                                                                                    class="form-control"
                                                                                    name="timeto"
                                                                                    value={update_routine.timeto}
                                                                                    onChange={e => onUpdateChange(e)} />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                placeholder="Teacher Name"
                                                                                name="teachername"
                                                                                value={update_routine.teachername}
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
                                                        onClick={() => deleteRoutine(item.routineid)}></i>

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