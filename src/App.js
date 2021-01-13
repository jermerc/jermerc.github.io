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