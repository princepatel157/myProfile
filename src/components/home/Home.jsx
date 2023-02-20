import React from 'react';
import "./Home.css"
import DescriptionIcon from '@mui/icons-material/Description';

const Home = () => {
  return (
    <>
      <section className='home-sec' id='homeSection'>
        <div className='intro-sec'>
          <h1>Prince Patel</h1>
          <h4>I'm a Full Stack developer</h4>

          <div className='resume-btn'>
            <a href='https://drive.google.com/file/d/1Q5bEE_dqLaNO9oelGtAQ2JHgKGlyFF6s/view?usp=sharing' rel='noreferrer' target='_blank'>
            <DescriptionIcon className='des-btn'/>
            <span className='hide-resume'>Resume</span>
            </a> 
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Home;