import React from 'react';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Resume from '../components/resume/Resume';

const index = () => {
  return (
    <>
      <Home/>
      <About/>
      <Skills/>
      <Resume/>
    </>
  )
}

export default index