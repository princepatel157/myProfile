import React from 'react';
import "./About.css";

const About = () => {
  return (
    <>
      <section className='about-page' id='aboutSection'>
        {/* about */}
        <div className='about-div'>
          <div className='head'>
            <span>
              About
            </span>
          </div>
  
          <div className='intro-sec'>
            A determined, dedicated, and process-oriented person with
            apt communication ability and a learner’s mindset. I am
            looking forward to work in a growth-oriented corporate
            environment and want to enrich my experience.
          </div>
        </div>

        {/* personal details */}
        <div className='self-details'>
          <div className='head'>
            <span>Personal Details</span>
          </div>
          <ul>
            <li>
              <strong>Email: </strong>  princepatel1576@gmail.com
            </li>
            <li>
              <strong>Date of Birth: </strong> 29/03/1999  
            </li>
            <li>
              <strong>Degree: </strong>  BE-CSE
            </li>
            <li>
              <strong>University: </strong>  Chandigarh University
            </li>
          </ul>
        </div>

        {/* education */}
        <div className='education-div'>
          <div className='head'>
            <span>Education</span>
          </div>
          <div className='edu-details'>
            <strong>Bachelors in Computer Science Engineering |<br/>
            Chandigarh University, Gharuan<br/></strong>
            Session: 2018-2022 | Score: 7.34 CGPA<br/><br/>

            <strong>Intermediate (RBSE) | Vandana Public School, <br/>       
            Jodhpur<br/></strong>
            Session: 2017-2018 | Percentage: 75.6%<br/><br/>

            <strong>Matriculation (CBSE) | Army Public School, Dhar Road,<br/>
            Udhampur<br/></strong>
            Session: 2014-2015 | Percentage: 81.7%<br/><br/>
          </div>
        </div>
        
      </section>
    </>
  )
}

export default About