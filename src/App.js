import '../node_modules/line-awesome/dist/line-awesome/css/line-awesome.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './Background.js';
import LinkedInBadge from './LinkedInBadge.js';
import PersonalExperience from './PersonalExperience';
import AboutMe from './AboutMe';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <Container >
          <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
      <Background/>
      <Row>
        <Col>
          <AboutMe/>
        </Col>
        <Col>
          <PersonalExperience/>
        </Col>
        <Col>
          <LinkedInBadge/>
        </Col>
      </Row>
    </Container>

  );
}

export default App;