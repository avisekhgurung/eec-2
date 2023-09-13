import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MangRoutes from './component/management/MangRoutes';
import TeacherRoutes from './component/teacher/TeacherRoutes';
import ParentRoutes from './component/parent/ParentRoutes';
import StudentRoutes from './component/student/StudentRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './component/css/main.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
        <MangRoutes />
        <TeacherRoutes />
        <ParentRoutes />
        <StudentRoutes />
    </BrowserRouter>,
    document.getElementById('root')
);
