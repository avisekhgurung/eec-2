import React from 'react';
import { Route, Switch } from "react-router-dom";
import MangDashboard from './MangDashboard';
import MangTeacher from './MangTeacher';
import MangAddTeacher from './MangAddTeacher';
import MangEditTeacher from './MangEditTeacher';
import MangTeacherDetails from './MangTeacherDetails';
import MangStudent from './MangStudent';
import MangAddStudent from './MangAddStudent';
import MangStudentDetails from './MangStudentDetails';
import MangParent from './MangParent';
import MangClass from './MangClass';
import MangEditClass from './MangEditClass';
import MangSubject from './MangSubject';
import MangAddClassSubject from './MangAddClassSubject';
import MangExam from './MangExam';
import MangRoutine from './MangRoutine';
import MangAttendance from './MangAttendance';
import MangEvent from './MangEvent';
import MangNotice from './MangNotice';
import MangLibary from './MangLibary';
import MangComplaints from './MangComplaints';
import MangComplaintDetails from './MangComplantDetails';
import MangFeedbacks from './MangFeedbacks';
import MangSettings from './MangSettings';
import MangProfile from './MangProfile';
import MangHandbook from './MangHandbook';
import MangHealthCard from './MangHealthCard';
import MangViewHealthCard from './MangViewHealthCard';
import MangProgress from './MangProgress';
import SampleForm from '../management/SampleForm';

export default class MangRoutes extends React.Component {
    render() {
        return (
            <div className="">
                <Switch>
                    <Route exact path="/management" component={MangDashboard} />
                    <Route path="/mang_teacher">
                        <Route component={MangTeacher} />
                    </Route>
                    <Route path="/mang_add_teacher">
                        <Route component={MangAddTeacher} />
                    </Route>
                    <Route path="/mang_edit_teacher/:teacherid">
                        <Route component={MangEditTeacher} />
                    </Route>
                    <Route path="/mang_teacher_details/:teacherid">
                        <Route component={MangTeacherDetails} />
                    </Route>
                    <Route path="/mang_student">
                        <Route component={MangStudent} />
                    </Route>
                    <Route path="/mang_add_student">
                        <Route component={MangAddStudent} />
                    </Route>
                    <Route path="/mang_student_details">
                        <Route component={MangStudentDetails} />
                    </Route>
                    <Route path="/mang_parent">
                        <Route component={MangParent} />
                    </Route>
                    <Route path="/mang_class">
                        <Route component={MangClass} />
                    </Route>
                    <Route path="/mang_editclass/:classid">
                        <Route component={MangEditClass} />
                    </Route>
                    <Route path="/mang_subject">
                        <Route component={MangSubject} />
                    </Route>
                    <Route path="/mang_add_classsubject">
                        <Route component={MangAddClassSubject} />
                    </Route>
                    <Route path="/mang_exam">
                        <Route component={MangExam} />
                    </Route>
                    <Route path="/mang_routine">
                        <Route component={MangRoutine} />
                    </Route>
                    <Route path="/mang_attendance">
                        <Route component={MangAttendance} />
                    </Route>
                    <Route path="/mang_event">
                        <Route component={MangEvent} />
                    </Route>
                    <Route path="/mang_notice">
                        <Route component={MangNotice} />
                    </Route>
                    <Route path="/mang_libary">
                        <Route component={MangLibary} />
                    </Route>
                    <Route path="/mang_complaints">
                        <Route component={MangComplaints} />
                    </Route>
                    <Route path="/mang_complaint_details/:complaintid">
                        <Route component={MangComplaintDetails} />
                    </Route>
                    <Route path="/mang_feedback">
                        <Route component={MangFeedbacks} />
                    </Route>
                    <Route path="/mang_settings">
                        <Route component={MangSettings} />
                    </Route>
                    <Route path="/mang_profile">
                        <Route component={MangProfile} />
                    </Route>
                    <Route path="/mang_handbook">
                        <Route component={MangHandbook} />
                    </Route>
                    <Route path="/mang_healthcard">
                        <Route component={MangHealthCard} />
                    </Route>
                    <Route path="/mang_viewhealthcard">
                        <Route component={MangViewHealthCard} />
                    </Route>
                    <Route path="/mang_progress">
                        <Route component={MangProgress} />
                    </Route>
                    <Route path="/sample_form">
                        <Route component={SampleForm} />
                    </Route>
                </Switch>
            </div>
        );
    }
}