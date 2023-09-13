import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        const style = {
            background: "#d5d6da",
            color: "#3D3D3D",
            textTransform: "uppercase",
            borderRadius: "1rem",
            border: "3px solid #ffc107",
            margin: "5px",
            padding: "10px",
            minWidth: "160px",
            height: "150px",
            fontFamily: "PT Sans', sans - serif",
            fontWeight: "400 !important",
            letterSpacing: "2px"
        };
        return (
            <React.Fragment>
                <h1 className="text-center bg-warning py-3">EEC</h1>
                <div className="form-group text-center">
                    <a href="/signin" className="btn btn-warning">Sign In</a>
                </div>
                <div class="container Home py-5">
                    <div className="d-flex justify-content-between">
                        <Link to="/management">
                            <button className="btn" style={style}>Management</button>
                        </Link>
                        <Link to="/teacher">
                            <button className="btn" style={style}>Teacher</button>
                        </Link>
                        <Link to="/student">
                            <button className="btn" style={style}>Student</button>
                        </Link>
                        <Link to="/parent">
                            <button className="btn" style={style}>Parent</button>
                        </Link>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}