import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
// import Home from './components/home/Home';
// import About from './components/about/About';
import HomePage from './pages/index';

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <HomePage/>
        {/* <Route path='/home' element={<HomePage/>} /> */}
        {/* <Routes>
          <>
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
          </>
        </Routes> */}
      </Router>
    </>
  )
}

export default App