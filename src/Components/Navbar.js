import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../public/images/logo.png';
// import phoneIcon from '../public/images/phoneIcon.png';

function Navbar() {
  return (
    <div className='mb-5 '>



      <nav className="navbar navbar-expand-sm navbar-light  fixed-top">
        <Link className="navbar-brand" to="/"><img src={logo} className='logo ' alt='logo-pic' /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to="/consultancy">Consultancy</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white " to="/courses">HSE Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to="/about">About us</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white " to="/recentNews">Recent News</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-white " to="/contact">Contact</Link>
            </li>




          </ul>

        </div>
      </nav>



    </div>
  )
}

export default Navbar
