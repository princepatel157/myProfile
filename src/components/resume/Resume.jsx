import React from 'react';
import "./Resume.css";

const Resume = () => {
  return (
    <>
      <div className='resume-sec' id='expSection'>
      {/* experience sec */}
        <section className='ex-sec'>
          <div className='head'>
            <span>Word Experience</span>
          </div>
          <div className='ex-details'>
            <h3>Node js Intern- Jungleworks Pvt. Ltd</h3>
            <span>Jan 2022 - Aug 2022</span>
            <ul>
              <li>worked on Node.js as an Associate Backend Developer.</li>
              <li>Handled all monthly sprints for Live project - <a target='_blank' rel='noreferrer' href='https://webapp.rappocart.com/en/'>Rappo</a> and others. </li>
              <li>Had experience with client issues, bug fixing,
                  Debugging, Unit Testing, building API, server handling
                  and adding new features.
              </li>
              <li>Gone through the clients call for task discussion.</li>
              <li>Also worked on email triggering, CSV handling, MySQL
                  Open API’s etc.
              </li>
              <li>Also worked on multiple projects when required.</li>
            </ul>
          </div>
          <div className='ex-details'>
            <h3>Freelancer - MERN Stack</h3>
            <span>Aug 2022 - current</span>
            <ul className='freelance'>
              <li>Projects- <br/>
                  <a target='_blank' rel='noreferrer' href='http://www.ashihelmet.com/'>Ashi Helmets</a><br/>
                  <a target='_blank' rel='noreferrer' href='http://www.nanadairyfarming.com/'>Nana Dairy Farming</a><br/>
                  <span>Rave- Blog WebPage  (in development)</span><br/>
              </li>
              <li>Worked on MERN full stack website development.</li>
              <li>In a collaboration with the freelancing team.</li>
              <li>Experienced in development and deployment.</li>
              <li>Skills used- MYSQL, EXPRESS, REACT, NODE, GIT</li>
            </ul>
          </div>
        </section>

        {/* project head */}
        <section className='project-sec'>
          <div className='head'>
            <span>Projects</span>
          </div>
          <div className='ex-details'>
          <h3>Personal Portfolio- REACT</h3>
            <span>Jan, 2023</span>
            <ul className='project-list'>
              <li>Made using REACT framework</li>
            </ul>
          </div>
          <div className='ex-details'>
          <h3>Package Delivery Manager- MEAN</h3>
            <span>Feb, 2022</span>
            <ul className='project-list'>
              <li>Company training project.</li>
              <li>made using Angular, Node.js and Mongo DB.</li>
              <li>Implemented Authentication, OTP verification, email verification, Live Tracking Link.</li>
            </ul>
          </div>
          <div className='ex-details'>
          <h3>Helmet Store website- REACT</h3>
            <span>Sept, 2021</span>
            <ul className='project-list'>
              <li>Freelance Project</li>
              <li>Used Hooks, Google Fonts, Material UI, Bootstrap.</li>
              <li>Add to Cart Page with checkout functionality</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default Resume