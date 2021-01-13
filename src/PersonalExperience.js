import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Logo from './assets/logo.gif'
import Screenshot from './assets/screenshot.png';
import Col from 'react-bootstrap/Col';



class PersonalExperience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showTermOneModal: false
        }
        this.handleClick = this.handleClick.bind(this);



    }

    handleClick = () => {
        this.setState({
            showTermOneModal: !this.state.showTermOneModal
        })
    }

    render () {
        return (
            <Container>
                <Modal
                size="lg"
                show = {this.state.showTermOneModal}
                onHide = {() => this.setState({
                    showTermOneModal: !this.state.showTermOneModal
                })}
                backdrop="static"
                keyboard={false}
                centered
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Kenna Work Term #1 Report</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Col>
                                <Row>
                                    <img src={Logo} alt="Kenna logo."/>
                                </Row>
                            </Col>
                            <Col>
                                <img style={{float: "right"}} src={Screenshot} alt="BASF login." width="50%" height="50%"/>
                                <Row>
                                    <p style={{color: "black"}}>
                                        <b>Abstract:</b>
                                        <hr/>
                                        This website was created with the intention of showcasing the skills I had acquired during my work-term. I am unable to showcase back-end skills on this website but if you are interested you can check out my
                                        GitHub repo for other projects with back-end functionality.
                                        <hr/>
                                        <b>Employer Info:</b>
                                        <hr/>
                                        Kenna is a marketing solutions provider specializing in customer experience management. The company enables marketing and sales to conduct more informed and dynamic conversations with customers at every stage of the relationship lifecycle. The result: more loyal and valuable customers eager to stay connected.
                                        <hr/>
                                    </p>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <p style={{color: "black"}}>
                                        <b>Goals:</b>
                                        <hr/>
                                        My main learning goal this term was to be able to get a grasp of corporate full-stack web applications, I was guided by my mentor through the tech stack that consisted of React/Node.js/SQL, I also wanted to learn how to manage my time effectively, and construct thought patterns that would be effective in dealing with problem solving.
                                        I also wanted to get a better understanding of how corporate entities operate within the Software Development Cycle, how a requirement flows from the client to the accounts team to the developers.
                                        These skills will help me throughout my career as this tech stack is very relevant. JavaScript is one of the most used programming languages today and these frameworks are very popular and extensively used within the web development community.
                                        The technologies I worked with were the ones I were looking forward to having hands-on experience with, React/Node.js/SQL. I wanted to work with these technologies because these would become the building blocks of my career within Software Engineering.
                                        All in all I think the goals I had set out for myself were accomplished, I had gained a greater understanding of Web Development and the corporate Software Development Cycle, also my problem solving has vastly improved.
                                        <hr/>
                                        <b>Job Description:</b>
                                        <hr/>
                                        My official title was Web Applications Developer (Co-op), and as a developer I was tasked to deal with various Jira tickets related to various projects. The main project I worked with was a data delivery application developed for BASF Canada, an agricultural company.
                                        I developed React components to facilitate the conversion of Excel sheets (.csv and .xlsx files) and created back-end routes using Node.js to save this data in the database using Microsoft SQL Server. I also created SQL scripts to query the database, to sort and filter results and display these results on the front-end using React through a grid format.
                                        These syntax of JavaScript and SQL I had prior knowledge of through side-projects, however the tech stack was completely new to me. These frameworks were learned on the job through the help of various mentors and lots of documentation binging. 
                                    </p>
                                </Row>
                            </Col>



                        </Container>
                    </Modal.Body>
                </Modal>

                <Row>
                    <p>
                        3rd year Software Engineering student specializing in Web Development.
                    </p>
                </Row>
                <Row>
                    <Button variant="primary" size="md" onClick={this.handleClick} block>
                    Co-op Work Term #1 Report
                    </Button>
                </Row>
            </Container>
        )
    }


}

export default PersonalExperience;