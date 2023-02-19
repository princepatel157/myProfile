import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <>
      <section className='skills-sec' id='skillSection'>
        <div className='tech-skills'>
          <div className='head'>
            <span>Technical Skills</span>
          </div>
          <div className='skill-details'>

            <ul>
              <li>C++ <progress id="file" value="75" max="100"></progress> </li>
              <li>JavaScript <progress id="file" value="85" max="100"></progress> </li>
              <li>Node.js <progress id="file" value="80" max="100"></progress> </li>
              <li>React.js <progress id="file" value="75" max="100"></progress> </li>
              <li>Mysql <progress id="file" value="75" max="100"></progress> </li>
              <li>Git Github <progress id="file" value="90" max="100"></progress> </li>
            </ul>

            {/* C++ | JavaScript | Node.js |<br/>
            React.js | MongoDB | MySQL |<br/>
            Git GitHub | REST api<br/> */}
          </div>
        </div>
        <div className='personal-skills'>
          <div className='head'>
            <span>Interpersonal Skills</span>
          </div>
          <div className='inskill'>
            <ul>
              <li>Discipline</li>
              <li>Creative</li>
              <li>Organized</li>
              <li>Perseverance</li>
              <li>Dedicated</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills