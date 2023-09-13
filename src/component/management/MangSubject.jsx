import React, { useEffect, useState } from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import MangTableSort from './MangTableSort';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/mangStyle.css';

export default function MangSubject() {
    const [subjects, setSubject] = useState([]);
    useEffect(() => {
        loadSubject();
    }, []);

    const loadSubject = async () => {
        const result = await axios.get("http://localhost:8000/api/all_classes");
        setSubject(result.data.reverse());
    };
    const deleteSubject = async id => {
        await axios.delete(`http://localhost:8000/api/delete_class/${id}`);
        loadSubject();
    };
    return (
        <React.Fragment>
            <div class="d-flex" id="wrapper">
                <MangSidebar />
                <div id="page-content-wrapper">
                    <MangNavbar />
                    <div class="sub-heading px-3 py-2">
                        <h3>List of Subject</h3>
                    </div>
                    <div class="container-fluid Mang-Class py-4">
                        <MangTableSort />
                        <table class="table table-bordered">
                            <thead bgcolor="#ffc107">
                                <tr>
                                    <th rowSpan="2">Sl No</th>
                                    <th rowSpan="2">Class</th>
                                    <th rowSpan="2">
                                        Subject ID
                                    </th>
                                    <th rowSpan="2">Subject</th>
                                    <th colSpan="2" className="text-center">Syllabus</th>
                                    <th rowSpan="2">Action</th>
                                </tr>
                                <tr>
                                    <th width="30%">Chapter</th>
                                    <th width="30%">Topic</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subjects.map((item, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.classname}</td>

                                        <td>{item.subjectid}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.chapter}</td>
                                        <td>{item.topic}</td>
                                        <td>
                                            <Link to={`/mang_editclass/${item.classid}`} >
                                                <i className="fa fa-edit mr-3"
                                                    data-toggle="modal"
                                                    data-target="#addClass"
                                                    style={{ cursor: 'pointer' }}></i>
                                            </Link>
                                            <i className="fa fa-trash"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => deleteSubject(item.classid)}></i>
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