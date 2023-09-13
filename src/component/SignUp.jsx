import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

export default class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmpassword: '',
            role: '',
            error: '',
            redirectTo: false
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        const { password, confirmpassword } = this.state;
        if (password !== confirmpassword) {
            this.setState({ error: "Password doesn't Match" })
        }
        else {
            axios.post('http://localhost:8000/api/signup', this.state)
                .then(res => {
                    console.log("Data",res.data);
                    this.setState({
                        name: '',
                        email: '',
                        password: '',
                        confirmpassword: '',
                        role: '',
                        redirectTo: true
                    });
                })
                .catch(error => {
                    // console.log(error.message)
                    this.setState({ error: "User Already Exist" })
                })
        }
    }
    render() {
        if (this.state.redirectTo) {
            return (<Redirect to={'/signin'} />)
        }
        return (
            <React.Fragment>
                <div class="text-center my-2">
                    <img className="rounded" src="images/eecLogo.png" width="220" alt="" />
                </div>
                <div class="container my-3">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-9 mx-auto">
                            <h2 class="card-title text-center">SIGN UP</h2>
                            <form onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        onChange={this.onChange}
                                        class="form-control"
                                        placeholder="Enter your Name"
                                        name="name"
                                        required />
                                </div>
                                <div class="form-group">
                                    <input
                                        type="email"
                                        onChange={this.onChange}
                                        class="form-control"
                                        placeholder="Enter your E-Mail"
                                        name="email" required />
                                </div>
                                <div class="form-group">
                                    <input
                                        type="password"
                                        onChange={this.onChange}
                                        class="form-control"
                                        placeholder="Password"
                                        name="password"
                                        required />
                                </div>
                                <div class="form-group">
                                    <input
                                        type="password"
                                        onChange={this.onChange}
                                        class="form-control"
                                        placeholder="Confirm Password"
                                        name="confirmpassword"
                                        required />
                                </div>
                                <div class="form-group">
                                    <select
                                        class="form-control"
                                        onChange={this.onChange}
                                        name="role" required>
                                        <option selected>- Select Role -</option>
                                        <option>Management</option>
                                        <option>Teacher</option>
                                        <option>Student</option>
                                        <option>Parent</option>
                                    </select>
                                </div>
                                <h6 className="text-danger">{this.state.error}</h6>
                                <center>
                                    <input type="submit" class="btn btn-warning" id="submit" value="Sign Up" />
                                    <p>Already have an account?<a href="/signin">&nbsp;Sign In</a></p>
                                </center>
                            </form>

                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}