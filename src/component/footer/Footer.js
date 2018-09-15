import React, { Component } from 'react';

import facebookicon from './images/facebook-icon.png';
import linkedinicon from './images/linkedin-icon.png';
import twitericon from './images/twitter-icon.png';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import './footer.css';



class Footer extends Component {
    render() {
        return (
            <Container fluid={true} id="contectFooter" >

                <div className="FooterOpacity">

                    <Row>
                        <Col md="6"></Col>



                        <Col md="3">
                            <p id="aboutHeading">ABOUT</p>
                            <p className="contectDetails">About</p>
                            <p className="contectDetails">Privacy Policy</p>
                            <p className="contectDetails">Terms of Services</p>
                            <p className="contectDetails">Careers</p>
                            <p className="contectDetails">Contact</p>
                        </Col>
                        <Col md="3">
                            <p className="copyRight">&copy;2018. All Right Reserved.<br />
                                Made by M Asif Mushtaq<br />Roll No. 1267</p>
                            <div>
                                <a href="https://www.facebook.com"><img src={facebookicon} alt="facebook.com" /></a>
                                <a href="https://www.linkedin.com"><img src={linkedinicon} alt="linkedin" /></a>
                                <a href="https://www.twitter.com"><img src={twitericon} alt="twitter" /></a>
                            </div>

                        </Col>





                    </Row>

                </div>
            </Container>
        )
    }
}
export default Footer;