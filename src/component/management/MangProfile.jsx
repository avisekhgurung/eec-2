import React from 'react';
import MangSidebar from './MangSidebar';
import MangNavbar from './MangNavbar';
import axios from 'axios';
import bsCustomFileInput from 'bs-custom-file-input';
import $ from 'jquery';
import '../css/mangStyle.css';

export default class MangProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            userid: '',
            name: '',
            email: '',
            mobilenumber: '',
            phonenumber: '',
            address: '',
            pincode: '',
            district: '',
            state: '',
            board: '',
            school: '',
            profilephoto: '',
            error: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);

    }
    componentDidMount = () => {
        $(function () {
            bsCustomFileInput.init()
        })
        const userid = JSON.parse(localStorage.getItem("id"))
        // To Get User Details
        axios.get(`http://localhost:8000/api/users/` + userid)
            .then(res => {
                const user = res.data;
                this.setState({ user })
            })
            .catch(error => {
                return console.log("Error", error.message);
            });
        // To Get Mang Details
        axios.get(`http://localhost:8000/api/get_mang/` + userid)
            .then(res => {
                this.setState({ profilephoto: res.data.profilephoto })
                // this.setState({})
            })
            .catch(error => {
                return console.log("Error", error.message);
            });

    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onFileChange = e => {
        this.setState({ profilephoto: e.target.files[0] });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('profilephoto', this.state.profilephoto)
        data.append('userid', this.state.user.userid)
        data.append('name', this.state.user.name)
        data.append('email', this.state.user.email)
        data.append('mobilenumber', this.state.mobilenumber)
        data.append('phonenumber', this.state.phonenumber)
        data.append('address', this.state.address)
        data.append('pincode', this.state.pincode)
        data.append('district', this.state.district)
        data.append('state', this.state.state)
        data.append('board', this.state.board)
        data.append('school', this.state.school)
        console.log("AppendData", data)
        axios.post('http://localhost:8000/api/add_mang', data)
            .then(res => {
                console.log("Response", res.data)
                this.setState({
                    userid: '',
                    name: '',
                    email: '',
                    mobilenumber: '',
                    phonenumber: '',
                    address: '',
                    pincode: '',
                    district: '',
                    state: '',
                    board: '',
                    school: '',
                    profilephoto: ''
                })
            })
            .catch(error => {
                // console.log(error.message)
                this.setState({ error: error })
            })
    }
    render() {
        const style = {
            height: '200px',
            width: '200px',
            position: 'relative',
            border: '10px solid #018492',
            borderRadius: '50%',
            backgroundSize: '100% 100%',
            // backgroundImage: `url("images/dp.png")`,
            overflow: 'hidden'
        }
        var profile = "http://localhost:8000/" + this.state.profilephoto;
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <MangSidebar />
                    <div id="page-content-wrapper">
                        <MangNavbar />
                        <div class="container mt-3">
                            <div class="row">
                                <div class="col-lg-11 col-md-11 col-sm-11">
                                    <center>
                                        <div class="profile">
                                            <img src={profile} alt="" style={style} />
                                        </div>
                                        <hr class="col-sm-6" style={{ borderTop: '6px solid #ffc107' }} />
                                        <h5>{this.state.user.name}</h5>
                                    </center>
                                </div>
                                <div class="col-lg-1 col-md-1 col-sm-1">
                                    <ul class="list-group list-group-flush">
                                        <a href="/#">
                                            <img src="images/icon/12.png" id="logoLeft" data-toggle="tooltip" data-placement="left" title="Sample" alt="" />
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="container">
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label">ID</label>
                                    <div class="col-sm-6">
                                        <input
                                            type="text"
                                            class="form-control"
                                            value={this.state.user.userid}
                                            onChange={this.onChange}
                                            placeholder="ID"
                                            name="id"
                                            readOnly />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label">Name</label>
                                    <div class="col-sm-6">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Name"
                                            name="name"
                                            value={this.state.user.name}
                                            onChange={this.onChange}
                                            readOnly />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label">E-Mail</label>
                                    <div class="col-sm-6">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="E-Mail"
                                            value={this.state.user.email}
                                            onChange={this.onChange}
                                            name="email"
                                            id=""
                                            readOnly />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label">Mobile No</label>
                                    <div class="col-sm-6">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Mobile No"
                                            onChange={this.onChange}
                                            name="mobilenumber"
                                            required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label">Phone No</label>
                                    <div class="col-sm-6">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Phone No"
                                            onChange={this.onChange}
                                            name="phonenumber"
                                            required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label">Address</label>
                                    <div class="col-sm-6">
                                        <textarea
                                            type="text"
                                            class="form-control"
                                            placeholder="Address"
                                            onChange={this.onChange}
                                            name="address"
                                            required></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label">Pincode</label>
                                    <div class="col-sm-6">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Pincode"
                                            onChange={this.onChange}
                                            name="pincode"
                                            required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label">District</label>
                                    <div class="col-sm-6">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="District"
                                            onChange={this.onChange}
                                            name="district"
                                            required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label">State</label>
                                    <div class="col-sm-6">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="State"
                                            onChange={this.onChange}
                                            name="state"
                                            required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label">Board</label>
                                    <div class="col-sm-6">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Board"
                                            onChange={this.onChange}
                                            name="board"
                                            required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label">School / College / University Code</label>
                                    <div class="col-sm-6">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="School / College / University Code"
                                            onChange={this.onChange}
                                            name="school"
                                            required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="" class="col-sm-6 col-form-label">Upload Photo <small class="text-danger">(150px x 150px)</small></label>
                                    <div class="col-sm-6">
                                        <div class="custom-file">
                                            <input
                                                type="file"
                                                class="custom-file-input"
                                                onChange={this.onFileChange}
                                                id="customFile"
                                                name="profilephoto" />
                                            <label class="custom-file-label" for="customFile">Choose file</label>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="text-danger">{this.state.error}</h6>
                                <div class="form-group">
                                    <input type="submit" class="btn btn-warning" id="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}