import React, { Component } from 'react'
import axios from 'axios';
import Header from '../../component/header/header';
import Container from 'muicss/lib/react/container';
import Footer from '../../component/footer/Footer';
import './dashboard.css';
import Tabs from './dashboardTabs/dashboardTab';
const baseURL = window.location.hostname === "localhost" ?
  "http://localhost:5051" : '';


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      user: false,
      username: '',
      userid: ''

    }
  }


  componentWillMount = () => {
    axios.get(baseURL + "/dashboard", { message: "Login first" })
      .then((res) => {

        console.log("response" + res);
        this.setState({
          user: true,
          username: res.data.name,
          userid: res.data._id

        })
      }).catch((err) => {
        alert("You should login first");
        console.log(err);
        this.props.history.push('/myAccount');
      })
  };




  onClick() {
    axios.post("/logout", { message: "Login first" }).then((response) => {
      this.setState({
        user: false
      })
      this.props.history.push('/');
    }).catch((err) => {
      alert("error  has been occored!");
    })
  }
  render() {
    return (
      <Container fluid={true} className="dashboardContainer">

        {this.state.user ?
          <div >
            <Header />
            <div className="dashboardCustom">
              <h1>Your OLX Ads</h1>

              <p>You can manage your Active & Inactive Ads here</p>
              <Tabs userid={this.state.userid} />

            </div>
            <Footer />
          </div>

          :
          <div></div>
        }
      </Container>
    )
  }
}



















// onClick={this.onClick}