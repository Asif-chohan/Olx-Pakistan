import React from 'react';
import Container from 'muicss/lib/react/container';
import './login.css';
import Header from '../../component/header/header';
import axios from 'axios';
// import Signup from '../signup/signup';
import Footer from '../../component/footer/Footer';
import {Link} from 'react-router-dom';
const baseURL = window.location.hostname === "localhost" ?
"http://localhost:5051" : '';


export default class Login extends React.Component {

  render() {

    return (
      <Container fluid={true} className="loginContainer">
        <Header />
        <div className="signin">

          <div className="formDiv">
            <form class="mui-form" onSubmit={(e) => {
              e.preventDefault();
              var data = {
                email: this.refs.email.value,
                password: this.refs.password.value
              }
              console.log(data);
              axios.post(baseURL +'/login', data).then((res) => {

                this.props.history.push('/dashboard');

                console.log(res);

              }).catch((err) => {
                alert("incorrect email or password")
                console.log(err);

              })
            }}>
              <legend className="formLagend">Sign in</legend>
              <div class="mui-textfield inputCustom">
                <label className="inptLabels">Email</label>
                <input ref="email" type="email" required className="inputCustom"  />

              </div>
              <div class="mui-textfield">
                <label className="inptLabels">Password</label>
                <input ref="password" type="password" required className="inputCustom"  />
              </div>
              <div className="btmBox">

              <button type="submit" class="mui-btn mui-btn--raised sbmitBtn">Signin</button>
              </div>
              
              


            </form>
            <p className="inptLabels">Not a member?</p>
            <Link to="/Signup"> Click to Register</Link>
          </div>
          



        </div>
        <Footer />

      </Container>
    );
  }
}