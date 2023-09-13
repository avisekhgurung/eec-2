import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

export default function ProtectedRoute(props) {
    let Component = props.component
    const history = useHistory();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token == null) {
            history.push("/")
        }
    }, [])
    return (
        <Component />
    )
}