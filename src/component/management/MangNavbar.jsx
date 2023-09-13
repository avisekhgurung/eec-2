import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class MangNavbar extends React.Component {
    constructor() {
        super();
        this.state = {
            user: []
        };
        this.logout = this.logout.bind(this);
    }
    logout() {
        localStorage.clear();
    }
    componentDidMount = () => {
        const user1 = JSON.parse(localStorage.getItem("id"))
        axios.get(`http://localhost:8000/api/users/` + user1)
            .then(res => {
                const user = res.data;
                this.setState({ user })
            })
            .catch(error => {
                return console.log("Error", error.message);
            })
    }
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <i className="fa fa-bars" id="menu-toggle"></i>
                    <h6 className="mb-0 ml-3">Welcome, {this.state.user.name}</h6>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="menu-toggle">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <div className="nav-link">
                                    <Link to="/">
                                        <i className="fas fa-comments"></i>
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <div className="dropdown">
                                        <i className="fa fa-bell" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                                        <div className="dropdown-menu" aria-labelledby="">
                                            <a className="dropdown-item" href="{#}">Action 1</a>
                                            <a className="dropdown-item" href="{#}">Action 2</a>
                                            <a className="dropdown-item" href="{#}">Action 3</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <Link to="/mang_profile">
                                        <i className="fas fa-user"></i>
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href="/#" className="nav-link">
                                    <i className="fas fa-sign-out-alt" onClick={this.logout}></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}