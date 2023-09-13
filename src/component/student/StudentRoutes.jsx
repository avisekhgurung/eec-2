import React from 'react';
import { Route, Switch } from "react-router-dom";
import StudentDashboard from './StudentDashboard';
import StudentRoutine from './StudentRoutine';
import StudentNotice from './StudentNotice';
import StudentAttendance from './StudentAttendance';
import StudentHandbook from './StudentHandbook';
import StudentExamination from './StudentExamination';
import StudentEvent from './StudentEvent';
import StudentHealthCard from './StudentHealthCard';
import StudentLibrary from './StudentLibrary';
import StudentComplaint from './StudentComplaint';
import StudentFeedback from './StudentFeedback';
import StudentSettings from './StudentSettings';
import StudentProfile from './StudentProfile';
import StudentJournal from './StudentJournal';
import StudentLearnRevise from './StudentLearnRevise';
import StudentStudyMaterials from './StudentStudyMaterials';
import StudentReportCard from './StudentReportCard';


export default class StudentRoutes extends React.Component {
    render() {
        return (
            <div className="">
                <Switch>
                    <Route exact path="/student" component={StudentDashboard} />

                    <Route path="/student_notice">
                        <Route component={StudentNotice} />
                    </Route>
                    <Route path="/student_routine">
                        <Route component={StudentRoutine} />
                    </Route>
                    <Route path="/student_attendance">
                        <Route component={StudentAttendance} />
                    </Route>
                    <Route path="/student_handbook">
                        <Route component={StudentHandbook} />
                    </Route>
                    <Route path="/student_examination">
                        <Route component={StudentExamination} />
                    </Route>
                    <Route path="/student_event">
                        <Route component={StudentEvent} />
                    </Route>
                    <Route path="/student_healthcard">
                        <Route component={StudentHealthCard} />
                    </Route>
                    <Route path="/student_library">
                        <Route component={StudentLibrary} />
                    </Route>
                    <Route path="/student_complaint">
                        <Route component={StudentComplaint} />
                    </Route>
                    <Route path="/student_feedback">
                        <Route component={StudentFeedback} />
                    </Route>
                    <Route path="/student_settings">
                        <Route component={StudentSettings} />
                    </Route>
                    <Route path="/student_profile">
                        <Route component={StudentProfile} />
                    </Route>
                    <Route path="/student_journal">
                        <Route component={StudentJournal} />
                    </Route>
                    <Route path="/student_learnandrevise">
                        <Route component={StudentLearnRevise} />
                    </Route>
                    <Route path="/student_studymaterials">
                        <Route component={StudentStudyMaterials} />
                    </Route>
                    <Route path="/student_reportcard">
                        <Route component={StudentReportCard} />
                    </Route>
                </Switch>
            </div>
        );
    }
}