import React from 'react';
import './skeleton.css';
import ScriptTag from 'react-script-tag';



class LinkedInBadge extends React.Component {


    render () {
        return (
        <React.Fragment>
            <ScriptTag type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer/>
            <div class="LI-profile-badge four columns u-pull-right"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="jermaine-mercado"><a class="LI-simple-link" href='https://ca.linkedin.com/in/jermaine-mercado?trk=profile-badge'>Jermaine M.</a>
            <p>made with vanta.js & create-react-app</p>
            </div>
        </React.Fragment>
        )
    }


}

export default LinkedInBadge;
