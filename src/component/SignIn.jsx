import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';


export default class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            role: '',
            redirectTo: false,
            error: false
        };
        this.onChange = this.onChange.bind(this);
        this.onLogin = this.onLogin.bind(this);

    }
    onLogin = () => {
        axios.post('http://localhost:8000/api/login', this.state)
            .then(res => {
                console.log(res.data);
                if (res.data.token) {
                    localStorage.setItem('token', JSON.stringify(res.data.token));
                    localStorage.setItem('id', JSON.stringify(res.data.id));
                    this.setState({ redirectTo: true, role: res.data.role });
                }
                else {
                    this.setState({ error: res.data.message })
                    // console.log(res.data.message)
                }
            })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        if (this.state.redirectTo && this.state.role === 'Management') {
            return (<Redirect to={'/management'} />)
        }
        if (this.state.redirectTo && this.state.role === 'Teacher') {
            return (<Redirect to={'/teacher'} />)
        }
        if (this.state.redirectTo && this.state.role === 'Student') {
            return (<Redirect to={'/student'} />)
        }
        if (this.state.redirectTo && this.state.role === 'Parent') {
            return (<Redirect to={'/parent'} />)
        }
        return (
            <React.Fragment>
                <div class="text-center my-2">
                    <a href="/">
                        <img className="rounded" src="images/eecLogo.png" width="220" alt="" />
                    </a>
                </div>
                <div class="container my-3">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-9 mx-auto">
                            <h2 class="card-title text-center">SIGN IN</h2>
                            <div class="form-group">
                                <input
                                    type="email"
                                    id=""
                                    placeholder="E-Mail"
                                    name="email"
                                    onChange={this.onChange}
                                    class="form-control"
                                    required />
                            </div>
                            <div class="form-group">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.onChange}
                                    id=""
                                    class="form-control"
                                />
                            </div>
                            <div class="form-group">
                                <select
                                    name="role"
                                    onChange={this.onChange}
                                    class="form-control"
                                    id=""
                                >
                                    <option selected>- Select Role -</option>
                                    <option>Management</option>
                                    <option>Teacher</option>
                                    <option>Student</option>
                                    <option>Parent</option>
                                </select>
                            </div>
                            <h6 className="text-danger">{this.state.error}</h6>
                            <div class="custom-control custom-checkbox mb-1">
                                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                <label class="custom-control-label" for="customCheck1">Remember Me</label>
                            </div>
                            <center>
                                <input
                                    class="btn btn-warning"
                                    value="Login"
                                    type="submit"
                                    id="submit"
                                    onClick={this.onLogin} />
                                <p> <a href="/otp">Forgot Paswoord</a> / <a href="/signup">Create Acoount</a></p>
                            </center>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}