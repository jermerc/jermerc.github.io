import React from 'react';
import './App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class AboutMe extends React.Component {

    render () {
        return (
            <div className="four columns u-pull-left">
                <h1>Jermaine Mercado</h1>
                <h6>Software Engineering @ University of Guelph 2023</h6>
                <hr/>
                <h5>Contact Me</h5>
                <hr/>
                <Row>
                    <Col>
                    <i style={{color: "white"}} class="las la-envelope"></i><a href="mailto:jermaine.mercado7@gmail.com">Email</a>
                    </Col>
                    <Col>
                    <i style={{color: "white"}} class="lar la-file"></i><a href="https://drive.google.com/file/d/1Gra014qMSC-YHad6sStr3nfPZJFHw0XV/view">Resume</a>
                    </Col>
                </Row>



                <p>
                    <hr/>
                    <i class="las la-code"></i>Languages: JavaScript, Python, Java, C/C++<br />
                    <i class="las la-toolbox"></i>Frameworks: React/Redux, Node.js, Django<br />
                    <i class="las la-database"></i>Database/APIs: MS SQL, PostgreSQL, REST<br />
                    <i class="las la-tools"></i>Tools: Git, BitBucket, Jira
                </p>

            </div>

        )
    }
}

export default AboutMe;
