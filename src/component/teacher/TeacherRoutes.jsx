import React from 'react';
import { Route, Switch } from "react-router-dom";
import TeacherDashboard from './TeacherDashboard';
import TeacherTimeTable from './TeacherTimeTable';
import TeacherProgress from './TeacherProgress';
import TeacherNotice from './TeacherNotice';
import TeacherSubject from './TeacherSubject';
import TeacherLessonPlan from './TeacherLessonPlan';
import TeacherAddLessonPlan from './TeacherAddLessonPlan';
import TeacherAttendence from './TeacherAttendence';
import TeacherLeaveApplications from './TeacherLeaveApplications';
import TeacherJournal from './TeacherJournal';
import TeacherPTM from './TeacherPTM';
import TeacherMail from './TeacherMail';
import TeacherComplaints from './TeacherComplaints';
import TeacherFeedback from './TeacherFeedback';
import TeacherSettings from './TeacherSettings';
import TeacherProfile from './TeacherProfile';
import TeacherStudyType from './TeacherStudyType';
import TeacherMCQ from './TeacherMCQ';
import TeacherTrueFalse from './TeacherTrueFalse';
import TeacherFillBlanks from './TeacherFillBlanks';
import TeacherReportCard from './TeacherReportCard';
import TeacherAddReportCard from './TeacherAddReportCard';
import TeacherViewReportCard from './TeacherViewReportCard';
import TeacherHealthCard from './TeacherHealthCard';
import TeacherViewHealthCard from './TeacherViewHealthCard';

export default class TeacherRoutes extends React.Component {
    render() {
        return (
            <div className="">
                <Switch>
                    <Route exact path="/teacher" component={TeacherDashboard} />
                    <Route path="/teacher_timetable" component={TeacherTimeTable} />
                    <Route path="/teacher_progress" component={TeacherProgress} />
                    <Route path="/teacher_notice" component={TeacherNotice} />
                    <Route path="/teacher_subject" component={TeacherSubject} />
                    <Route path="/teacher_lessonplan" component={TeacherLessonPlan} />
                    <Route path="/teacher_addlessonplan" component={TeacherAddLessonPlan} />
                    <Route path="/teacher_attendence" component={TeacherAttendence} />
                    <Route path="/teacher_leaveapplications" component={TeacherLeaveApplications} />
                    <Route path="/teacher_journal" component={TeacherJournal} />
                    <Route path="/teacher_ptm" component={TeacherPTM} />
                    <Route path="/teacher_mail" component={TeacherMail} />
                    <Route path="/teacher_complaints" component={TeacherComplaints} />
                    <Route path="/teacher_feedback" component={TeacherFeedback} />
                    <Route path="/teacher_settings" component={TeacherSettings} />
                    <Route path="/teacher_profile" component={TeacherProfile} />
                    <Route path="/teacher_studytype" component={TeacherStudyType} />
                    <Route path="/teacher_mcq" component={TeacherMCQ} />
                    <Route path="/teacher_truefalse" component={TeacherTrueFalse} />
                    <Route path="/teacher_fillblanks" component={TeacherFillBlanks} />
                    <Route path="/teacher_reportcard" component={TeacherReportCard} />
                    <Route path="/teacher_add_reportcard" component={TeacherAddReportCard} />
                    <Route path="/teacher_viewreportcard" component={TeacherViewReportCard} />
                    <Route path="/teacher_healthcard" component={TeacherHealthCard} />
                    <Route path="/teacher_viewhealthcard" component={TeacherViewHealthCard} />
                </Switch>
            </div>
        );
    }
}