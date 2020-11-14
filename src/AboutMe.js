import React from 'react';
import './skeleton.css';
import './App.css';

class AboutMe extends React.Component {

    render () {
        return (
            <div className="four columns u-pull-left">
                <h1>Jermaine Mercado</h1>
                <h6>Software Engineering @ University of Guelph 2023</h6>
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
