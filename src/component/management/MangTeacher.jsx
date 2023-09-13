import React, { useEffect, useState } from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import MangTableSort from './MangTableSort';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/mangStyle.css';

export default function MangTeacher() {
    const submit = {
        width: 'auto',
        minHeight: 'auto',
        fontSize: '16px'
    }
    const [all_teachers, allTeachers] = useState([]);

    //Load Teacher
    const loadTeacher = async () => {
        const result = await axios.get("http://localhost:8000/api/all_teachers");
        allTeachers(result.data.reverse());
        console.log(result.data)
    };

    // // Delete Notice
    const deleteTeacher = async teacherid => {
        await axios.delete(`http://localhost:8000/api/delete_teacher/${teacherid}`);
        loadTeacher();
    };

    useEffect(() => {
        loadTeacher();
    }, []);
    return (
        <React.Fragment>
            <div class="d-flex" id="wrapper">
                <MangSidebar />
                <div id="page-content-wrapper">
                    <MangNavbar />
                    <div class="sub-heading px-3 py-2">
                        <h3>Our Teachers</h3>
                        <div class="text-right">
                            <a class="btn btn-warning btn-sm" id="submit" href="/mang_add_teacher" style={submit}>Add Teacher</a>
                        </div>
                    </div>
                    <div class="container-fluid Mang-Teachers py-4">
                        <MangTableSort />
                        <table class="table table-bordered">
                            <thead bgcolor="#ffc107">
                                <th>No</th>
                                <th>ID</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Class</th>
                                <th>Section</th>
                                <th>Subject</th>
                                <th>Mobile No</th>
                                <th>E-Mail</th>
                                <th>DOB</th>
                                <th>Address</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                {all_teachers.map((e, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{e.teacherid}</td>
                                        <td>
                                            <img src={"http://localhost:8000/" + e.profilephoto} className="rounded-circle" width="40" alt="" />
                                        </td>
                                        <td>{e.name}</td>
                                        <td>{e.gender}</td>
                                        <td>{e.classname}</td>
                                        <td>{e.section}</td>
                                        <td>{e.subject}</td>
                                        <td>{e.mobilenumber}</td>
                                        <td>{e.email}</td>
                                        <td>{e.dateofbirth}</td>
                                        <td>{e.presentaddress}</td>
                                        <td className="justify-content-between">
                                            <Link
                                                to={`/mang_teacher_details/${e.teacherid}`}>
                                                <i
                                                    className="fa fa-eye mr-2 mr-2"
                                                    style={{ cursor: 'pointer' }}></i>
                                            </Link>
                                            <Link
                                                to={`/mang_edit_teacher/${e.teacherid}`}>
                                                <i className="fa fa-edit mr-2"></i>
                                            </Link>
                                            <i className="fa fa-trash"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => deleteTeacher(e.teacherid)}></i>
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