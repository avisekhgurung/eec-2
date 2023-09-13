import React from 'react';
import { Route, Switch } from "react-router-dom";
import ParentDashboard from './ParentDashboard';
import ParentNotice from './ParentNotice';
import ParentRoutine from './ParentRoutine';
import ParentStudProgress from './ParentStudProgress';
import ParentHandbook from './ParentHandbook';
import ParentFeesStructure from './ParentFeesStructure';
import ParentExamination from './ParentExmination';
import ParentPTM from './ParentPTM';
import ParentEvent from './ParentEvent';
import ParentLeaveApplication from './ParentLeaveApplication';
import ParentPHR from './ParentPHR';
import ParentFeedback from './ParentFeedback';
import ParentSettings from './ParentSettings';
import ParentProfile from './ParentProfile';


export default class ParentsRoutes extends React.Component {
    render() {
        return (
            <div className="">
                <Switch>
                    <Route exact path="/parent" component={ParentDashboard} />
                    <Route path="/parentnotice" component={ParentNotice} />
                    <Route path="/parentroutine" component={ParentRoutine} />
                    <Route path="/parentstudprogress" component={ParentStudProgress} />
                    <Route path="/parenthandbook" component={ParentHandbook} />
                    <Route path="/parentfeesstructure" component={ParentFeesStructure} />
                    <Route path="/parentexamination" component={ParentExamination} />
                    <Route path="/parentptm" component={ParentPTM} />
                    <Route path="/parentevent" component={ParentEvent} />
                    <Route path="/parentleaveapplication" component={ParentLeaveApplication} />
                    <Route path="/parentphr" component={ParentPHR} />
                    <Route path="/parentfeedback" component={ParentFeedback} />
                    <Route path="/parentsettings" component={ParentSettings} />
                    <Route path="/parentprofile" component={ParentProfile} />
                </Switch>
            </div>
        );
    }
}