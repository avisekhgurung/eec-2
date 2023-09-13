import React, { useEffect, useState } from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import MangTableSort from './MangTableSort';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/mangStyle.css';

export default function MangClass() {
    const [classes, setClass] = useState([]);
    useEffect(() => {
        loadClasses();
    }, []);

    const loadClasses = async () => {
        const result = await axios.get("http://localhost:8000/api/all_classes");
        setClass(result.data.reverse());
    };
    const deleteClass = async id => {
        await axios.delete(`http://localhost:8000/api/delete_class/${id}`);
        loadClasses();
    };
    const submit = {
        width: 'auto',
        minHeight: 'auto',
        fontSize: '16px'
    }
    return (
        <React.Fragment>
            <div class="d-flex" id="wrapper">
                <MangSidebar />
                <div id="page-content-wrapper">
                    <MangNavbar />
                    <div class="sub-heading px-3 py-2">
                        <h3>List of Classes</h3>
                        <div class="text-right">
                            <a href="/mang_add_classsubject" class="btn btn-warning" id="submit" style={submit} >Add Class & Subject</a>
                        </div>
                    </div>
                    <div class="container-fluid Mang-Class py-4">
                        <MangTableSort />
                        <table class="table table-bordered">
                            <thead bgcolor="#ffc107">
                                <th>No</th>
                                <th>Class ID</th>
                                <th>Class</th>
                                <th>Section</th>
                                <th>Subject ID</th>
                                <th>Subject</th>
                                <th>Syllabus</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                {classes.map((item, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.classid}</td>
                                        <td>{item.classname}</td>
                                        <td>
                                            {item.sections.map((sec) => (
                                                <li>{sec}</li>
                                            ))}
                                        </td>
                                        <td>{item.subjectid}</td>
                                        <td>{item.subject}</td>
                                        <td>
                                            <a href="/mang_subject" className="badge badge-warning">Check</a>
                                        </td>
                                        <td>
                                            <Link to={`/mang_editclass/${item.classid}`} >
                                                <i className="fa fa-edit mr-2"></i>
                                            </Link>
                                            <i className="fa fa-trash"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => deleteClass(item.classid)}></i>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}