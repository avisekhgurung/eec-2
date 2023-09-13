import React from 'react';
import { Route, Switch } from "react-router-dom";
import $ from 'jquery';
import Home from './component/Home';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import OTP from './component/OTP';
import ForgetPassword from './component/ForgetPassword';

class App extends React.Component {
  componentDidMount = () => {
    $(function () {
      $("#menu-toggle").on('click', function (e) {
        console.log("Hello");
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
      });
    });
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/otp" component={OTP} />
          <Route path="/forget_password" component={ForgetPassword} />
        </Switch>
      </div>
    );
  }
}
export default App;