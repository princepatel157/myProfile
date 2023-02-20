import React from 'react';
import "./Navbar.css";
import dp from '../../assets/dp2.jpeg';
// import {Link} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DescriptionIcon from '@mui/icons-material/Description';

const Navbar = () => {
  return (
    <>
      <header className='sidebar'>
        {/* profile section */}
        <section className='profile-sec'>
          <div className='profile-img'>
            <img src={dp} alt='dp'/>
          </div>
          <div className='profile-name'>
            PRINCE PATEL
          </div>
          <div className='social-sec'>
            <ul>
              <li className='links'><a href="https://github.com/princepatel157" target='_blank' rel='noreferrer'><GitHubIcon/> </a></li>
              <li className='links'><a href="https://www.linkedin.com/in/prince-patel-bb6b32194/" target='_blank' rel='noreferrer'><LinkedInIcon/> </a></li>
              <li className='links'><a href="https://www.instagram.com/prince.vikram.singh.patel/" target='_blank' rel='noreferrer'><InstagramIcon className="icon"/> </a></li>
            </ul>
          </div>
        </section>

        {/* nav section */}
        <section className='nav-sec'>
          <nav id='navId' className='nav'>
            <ul>
              <li className='nav-links' id='home'>
                <Link to="#homeSection">
                  <span className='icon'><HomeIcon/></span>
                  <span className='link-name'>Home</span>
                </Link>
              </li>
              <li className='nav-links' id='about'>
                <Link to="#aboutSection">
                  <span className='icon'><PersonIcon/></span>
                  <span className='link-name'>About</span>
                </Link>
              </li>
              <li className='nav-links' id='skills'>
                <Link to="#skillSection">
                  <span className='icon'><HowToRegIcon/></span>
                  <span className='link-name'>Skills</span>
                </Link>
              </li>
              <li className='nav-links' id='experience'>
                <Link to="#expSection">
                  <span className='icon'><DescriptionIcon/></span>
                  <span className='link-name'>Experience</span>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  )
}

export default Navbar