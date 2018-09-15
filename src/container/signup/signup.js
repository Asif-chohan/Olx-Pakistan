import React from 'react';
import Container from 'muicss/lib/react/container';
import './signup.css';
import Header from '../../component/header/header';
import axios from 'axios';
// import Signup from '../signup/signup';
import Footer from '../../component/footer/Footer';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
const baseURL = window.location.hostname === "localhost" ?
"http://localhost:5051" : '';


export default class Signup extends React.Component {

  render() {

    return (
      <Container fluid={true} className="loginContainer">
        <Header />
        <div className="signin">
          <Row className="singupformDiv">


            <div >
              <Col md="6">
                <form class="mui-form" onSubmit={(e) => {
                  e.preventDefault();
                  var data = {
                    email: this.refs.email.value,
                    name: this.refs.FName.value + " " + this.refs.LName.value,
                    password: this.refs.password.value
                  }
                  console.log(data);

                  axios.post(baseURL + '/signup', data).then((res) => {

                    alert("Successfully Registered.....Now login to continue")

                    this.props.history.push('/myAccount');

                    console.log(res);

                  }).catch((err) => {
                    console.log(err);

                  })
                }}>
                  <legend className="formLagend">Create An Account</legend>
                  <div class="mui-textfield inputCustom">
                    <label className="inptLabels">Email</label>
                    <input ref="email" type="email" required className="inputCustom" placeholder="Enter Your Email" />

                  </div>
                  <div class="mui-textfield">
                    <label className="inptLabels">First Name</label>
                    <input ref="FName" type="text" required className="inputCustom" placeholder="Enter Your First Name" />
                  </div>
                  <div class="mui-textfield">
                    <label className="inptLabels">Last Name</label>
                    <input ref="LName" type="text" required className="inputCustom" placeholder="Enter Your Last Name" />
                  </div>

                  <div class="mui-textfield">
                    <label className="inptLabels">Password</label>
                    <input ref="password" type="password" required className="inputCustom" placeholder="Enter a Password" />
                  </div>
                  <div className="btmBox">

                    <button type="submit" class="mui-btn mui-btn--raised sbmitBtn">Signin</button>
                  </div>


                </form>
              </Col>
              <Col md="6">
                <div className="signupDescrptn">
                  <p>
                    By having a password you will have access to My ads where you can:
              </p>
                  <ul>
                    <li>
                      Edit or Delete your Ads


                  </li>
                    <li>
                      Check responses for your Ads
                  </li>
                    <li>
                      See saved Ads
                  </li>
                  </ul>
                </div>
              </Col>
            </div>

          </Row>


          <Footer />

        </div>


      </Container>
    );
  }
}