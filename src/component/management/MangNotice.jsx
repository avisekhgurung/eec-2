import React, { useEffect, useState } from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';
import axios from 'axios';

export default function MangNotice() {
    const legend = {
        width: 'calc(100% - 40%)'
    }
    const [notice, setNotice] = useState({
        title: "",
        details: "",
        date: ""
    });

    //Post Notcie
    const onInputChange = e => {
        setNotice({ ...notice, [e.target.name]: e.target.value });
    };
    const onSubmit = async e => {
        e.preventDefault();
        console.log(notice)
        await axios.post("http://localhost:8000/api/add_notice", notice);
        loadNotice();
        window.location.reload(true);
    };

    useEffect(() => {
        loadNotice();
    }, []);

    // Load Notice
    const [get_notices, getNotices] = useState([]);
    const loadNotice = async () => {
        const result = await axios.get("http://localhost:8000/api/all_notices");
        console.log(result.data)
        getNotices(result.data.reverse());
    };

    // Delete Notice
    const deleteNotice = async id => {
        await axios.delete(`http://localhost:8000/api/delete_notice/${id}`);
        loadNotice();
    };

    // Get Single Notice
    const [upnotices, setUpNotice] = useState({
        noticeid: "",
        date: "",
        title: "",
        details: ""
    });
    
    const getNoticeOnclick = async id => {
        const result = await axios.get(`http://localhost:8000/api/get_notice/${id}`);
        setUpNotice(result.data);
        console.log("up", upnotices)
    };
    const onUpdateChange = e => {
        setUpNotice({ ...upnotices, [e.target.name]: e.target.value });
    };
    // Update Notice
    const { noticeid, date, title, details } = upnotices

    const updateNotice = async e => {
        e.preventDefault();
        console.log("Data", upnotices)
        await axios.patch(`http://localhost:8000/api/update_notice/${noticeid}`, upnotices);
        console.log(upnotices)
        loadNotice();
        window.location.reload();
    };
    return (
        <React.Fragment>
            <div class="d-flex" id="wrapper">
                <MangSidebar />
                <div id="page-content-wrapper">
                    <MangNavbar />
                    <div class="sub-heading px-3 py-2">
                        <h3>Notices</h3>
                    </div>
                    <div className="container-fluid Mang-notices py-4">
                        <div className="row">
                            <div className="col-lg-4">
                                <fieldset className="fieldset-border">
                                    <legend className="legend-text" style={legend}>Create Notice</legend>
                                    <form onSubmit={e => onSubmit(e)}>
                                        <div className="form-group">
                                            <input
                                                type="date"
                                                class="form-control"
                                                name="date"
                                                onChange={e => onInputChange(e)} />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Title"
                                                name="title"
                                                onChange={e => onInputChange(e)} />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                className="form-control"
                                                placeholder="Details.."
                                                name="details"
                                                onChange={e => onInputChange(e)}
                                                rows="5"></textarea>
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
                                <table class="table table-bordered">
                                    <thead bgcolor="#ffc107">
                                        <th>Sl No</th>
                                        <th>ID</th>
                                        <th>Date</th>
                                        <th>Title</th>
                                        <th width="35%">Details</th>
                                        <th>Action</th>
                                    </thead>
                                    <tbody>
                                        {get_notices.map((item, index) => (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.noticeid}</td>
                                                <td>{item.date}</td>
                                                <td>{item.title}</td>
                                                <td>{item.details}</td>
                                                <td>
                                                    <i className="fa fa-edit mr-3"
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={() => getNoticeOnclick(item.noticeid)}
                                                        data-toggle="modal"
                                                        data-target="#editNotice"
                                                    ></i>
                                                    <div class="modal fade" id="editNotice" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                                        <div class="modal-dialog" role="document">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title" id="exampleModalLabel">Update Notice</h5>
                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <form onSubmit={e => updateNotice(e)}>
                                                                    <div class="modal-body">

                                                                        <div className="form-group">
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                placeholder="Notice ID"
                                                                                name="noticeid"
                                                                                value={noticeid}
                                                                                readOnly />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                placeholder="Title"
                                                                                name="title"
                                                                                value={title}
                                                                                onChange={e => onUpdateChange(e)} />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <textarea
                                                                                className="form-control"
                                                                                placeholder="Details.."
                                                                                name="details"
                                                                                value={details}
                                                                                onChange={e => onUpdateChange(e)}
                                                                                rows="5"></textarea>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="date"
                                                                                class="form-control"
                                                                                name="date"
                                                                                value={date}
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
                                                        onClick={() => deleteNotice(item.noticeid)}></i>
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

        </React.Fragment>
    )
}