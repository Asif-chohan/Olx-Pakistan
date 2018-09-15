import React, { Component } from 'react';
import './App.css';
import '../../css/css/mui.min.css';
import Parent from '../../component/parent/parent';
import Container from 'muicss/lib/react/container';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from '../login/login';
import Signin from '../signup/signup';
import SubmitAnAd from '../../component/submitAnAD/submitAnAD';
import Dashboard from '../dashboard/dashboard';
import showAdByCategory from '../../component/showAdsByCategory/showAdsByCategory'
import showSearchContent from '../../component/searchBar/showSearchContent/showSearchContent'




class App extends Component {
  render() {
    return (
      <Router>
      <Container fluid={true} className="App">
      
      <Route exact path="/" component={Parent} />
      <Route exact path="/myAccount" component={Login} />
      <Route exact path="/Signup" component={Signin} />
      <Route exact path="/SubmitAd" component={SubmitAnAd} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/showAdByCategory" component={showAdByCategory} />
      <Route exact path="/SearchContents" component={showSearchContent} />


    

     
      
      </Container>
      </Router>
    );
  }
}

export default App;
