import React from 'react';
import { Link } from 'react-router-dom';

export default class ForgetPassword extends React.Component {
    render() {
        const input = {
            width: '15%',
            height: '80px',
            padding: '0',
            textAlign: 'center',
            lineHeight: '80px',
            fontSize: '40px'
        }
        return (
            <React.Fragment>
                <div class="text-center my-2">
                    <img className="rounded" src="images/eecLogo.png" width="220" alt="" />
                </div>
                <div class="container my-3">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-9 mx-auto">
                        <form class="form-password border rounded p-3">
                                <h2 class="card-title text-center">New Password</h2>
                                <div class="form-group">
                                    <input type="password" id="" placeholder="New Password" class="form-control" required />
                                </div>
                                <div class="form-group">
                                    <input type="password" placeholder="Confirm Password" id="" class="form-control" required />
                                </div>
                                <center>
                                    <Link to="/signin">
                                        <button class="btn btn-warning" id="submit">Confirm</button>
                                    </Link>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}