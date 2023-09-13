import React from 'react';
import { Link } from 'react-router-dom';

export default class OTP extends React.Component {
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
                            <form action="" class="form-otp border rounded p-3">
                                <h3>Please enter the 4-digit verification code we sent via SMS:</h3>
                                <center><span>(we want to make sure it's you before we contact our movers)</span></center><br />
                                <div className="d-flex justify-content-between mb-3 px-5">
                                    <input type="number" className="form-control" style={input} min="0" max="9" />
                                    <input type="number" className="form-control" style={input} min="0" max="9" />
                                    <input type="number" className="form-control" style={input} min="0" max="9" />
                                    <input type="number" className="form-control" style={input} min="0" max="9" />
                                </div>
                                <div className="form-group text-center">
                                    <Link to="/forget_password">
                                        <button class="btn btn-warning" id="submit">Submit</button>
                                    </Link>
                                </div>
                                <center>
                                    <div>
                                        <p>Didn't receive the code?<br />
                                            <a href="/otp">Send code again</a></p>
                                    </div>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}