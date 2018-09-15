import React, { Component } from 'react';
import logo from './logo.png';
import Button from '@material-ui/core/Button';
import './header.css';
import { Link } from 'react-router-dom';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import axios from 'axios';
import { withRouter } from 'react-router'


const baseURL = window.location.hostname === "localhost" ?
"http://localhost:5051" : '';




class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: false
        }
        this.onClick = this.onClick.bind(this);
        
    }

    componentDidMount = () => {
        axios.post(baseURL + "/dashboard", { message: "Login first" })
            .then((res) => {

                console.log("response" + res);


                this.setState({
                    user: true
                })
            }).catch((err) => {
                console.log(err);
            
            })
    };

    onClick() {
        axios.post(baseURL + "/logout", { message: "Login first" }).then((response) => {
            this.setState({
                user: false
            })
            this.props.history.push('/myAccount');
        }).catch((err) => {
            alert("error  has been occored!");
        })
    }

    render() {

        return (
            <Container className="headCustom">
                <Row>
                    <Col md="2" className="logoOlx">
                        <div className="imgBox">
                            <Link to="/">
                                <img src={logo} className="logoCustom" />
                            </Link>
                        </div>
                    </Col>

                    <Col md="4" className="headerTop">
                        <div className="appHeading">
                            <h2>Pakistan's Largest Marketplace</h2>
                        </div>
                    </Col>


                    <Col md="5" className="headerBtn">
                        <Link to="/dashboard">
                            <Button variant="contained" color="primary" className="HBtnCusstom" >
                                My Account
                        </Button>
                        </Link>
                    
                        <Link to="SubmitAd">
                            <Button variant="contained" color="primary" className="HBtnCusstom" >
                                Submit an Ad
                        </Button>
                        </Link>
                 
                        {this.state.user ?
                            <Button variant="contained" color="primary" onClick={this.onClick} className="HBtnCusstom" >
                              Log Out
                            </Button>
                              : <span></span> 
                        } 
                    </Col>





                </Row>

            </Container>







        )
    }
}


export default withRouter(Header)




