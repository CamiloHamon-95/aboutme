import { ReactComponent as DjangoSVG } from '../../../static/django.svg';
import { ReactComponent as FlaskSVG } from '../../../static/flask.svg';
import { ReactComponent as PythonSVG } from '../../../static/python.svg';
import { ReactComponent as FastApiSVG } from '../../../static/fastapi.svg';
import { ReactComponent as ReactJsSVG } from '../../../static/react.svg';
import { ReactComponent as JavaScriptSVG } from '../../../static/javascript.svg';
import { ReactComponent as HtmlSVG } from '../../../static/html.svg';
import { ReactComponent as CssSVG } from '../../../static/css.svg';
import { ReactComponent as MongoSVG } from '../../../static/mongodb.svg';
import { ReactComponent as MySqlSVG } from '../../../static/mysql.svg';
import { ReactComponent as FirebaseSVG } from '../../../static/firebase.svg';
import { ReactComponent as PostgreSVG } from '../../../static/postgresql.svg';
import { ReactComponent as DockerSVG } from '../../../static/docker.svg';
import { ReactComponent as GitSVG } from '../../../static/git.svg';
import { ReactComponent as AwsSVG } from '../../../static/aws2.svg';
import { ReactComponent as LinuxSVG } from '../../../static/linux.svg';
import './SkillsFrame.css';
import React from 'react';

const iconTypes = {
    'frontend': [
        <ReactJsSVG key='react-svg' className="svg-skills" />,
        <JavaScriptSVG key='javascript-svg' className="svg-skills" />,
        <HtmlSVG key='html-svg' className="svg-skills" />,
        <CssSVG key='css-svg' className="svg-skills" />
    ],
    'backend': [
        <DjangoSVG key='django-svg' className="svg-skills" />,
        <FlaskSVG key='flask-svg' className="svg-skills" />,
        <PythonSVG key='python-svg' className="svg-skills" />,
        <FastApiSVG key='fast-svg' className="svg-skills" />
    ],
    'database-ms': [
        <MongoSVG key='mongo-svg' className="svg-skills" />,
        <MySqlSVG key='mysql-svg' className="svg-skills" />,
        <FirebaseSVG key='firebas-svg' className="svg-skills" />,
        <PostgreSVG key='postgre-svg' className="svg-skills" />
    ],
    'tools': [
        <DockerSVG key='docker-svg' className="svg-skills" />,
        <GitSVG key='git-svg' className="svg-skills" />,
        <AwsSVG key='aws-svg' className="svg-skills" />,
        <LinuxSVG key='linux-svg' className="svg-skills" />
    ]
  };

  const phrases = {
    'frontend': 'One ring to rule them all...',
    'backend': 'One ring to find them...',
    'database-ms': 'One ring to bring them all...',
    'tools': 'And in the darkness bind them!'
  };
  
  function SkillsFrame({ skillsName }) {
  
    return (
        <div className={`div-skills ${skillsName}`}>
            <div className="skills-title">
                <h1>
                    { skillsName.toUpperCase() }
                    <span>
                        {phrases[skillsName]}
                    </span>
                </h1>
            </div>
            {/* <div className='title-group-skills'>
                <p>{ skillsName.toUpperCase() }</p>
            </div> */}
            <div className='group-skills-icons'>
                {iconTypes[skillsName]}
            </div>
        </div>
    )
  }
  
  export { SkillsFrame };