import React from 'react';
import { useHistory } from 'react-router-dom';


export default function StudentNavbar() {
    let history = useHistory();

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <i className="fa fa-bars" id="menu-toggle"></i>
                <h6 className="mb-0 ml-3">Welcome To @UserName</h6>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="menu-toggle">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="nav-link">
                                <i className="fas fa-comments" onClick={() => { history.push('/')}} ></i>
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
                                <i className="fa fa-user" onClick={() => { history.push('/student_profile')}}></i>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-link">
                                <i className="fa fa-sign-out-alt"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}