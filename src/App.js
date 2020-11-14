import './App.css';
import './skeleton.css';
import Background from './Background.js';
import LinkedInBadge from './LinkedInBadge.js';
import PersonalExperience from './PersonalExperience';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="container">
      <div className="row">
      <AboutMe/>
      <Background/>
      <PersonalExperience/>
      <LinkedInBadge/>
      </div>
    </div>
  );
}

export default App;
