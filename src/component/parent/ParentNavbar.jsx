import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/main.css';
import '../css/parentStyle.css';

export default function ParentNavbar() {
    let history = useHistory();

    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <i class="fa fa-bars" id="menu-toggle"></i>
                <h6 class="mb-0 ml-3">Welcome To @UserName</h6>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="menu-toggle">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <div class="nav-link">
                                <i class="fas fa-comments" onClick={() => { history.push('/')}} ></i>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link">
                                <div class="dropdown">
                                    <i class="fa fa-bell" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                                    <div class="dropdown-menu" aria-labelledby="">
                                        <a class="dropdown-item" href="{#}">Action 1</a>
                                        <a class="dropdown-item" href="{#}">Action 2</a>
                                        <a class="dropdown-item" href="{#}">Action 3</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link">
                                <i class="fa fa-user" onClick={() => { history.push('/parentprofile')}}></i>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a href="/#" class="nav-link">
                                <i className="fa fa-sign-out-alt"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}