import React from 'react'
import logo from '../public/images/logo.png';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer-container '>


      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 col-lg-2  offset-lg-1'>
            <img src={logo} className='footer-logo' alt=' ' />
            <p className='footer-para'>Smart Trainings & Consultancy Services offer a comprehensive range of globally-recognized qualifications designed to meet the health, safety and environmental management needs of all places of work & Consultancy services.</p>
          </div>

          <div className='col-sm-12 col-lg-2 footer-link-1'>
            <h3 className='py-5 text-white ml-2'>Explore STCS</h3>
            <ul className='pl-2 text-white '>
              <br /><br />
              <li><Link to='/about'>About</Link></li>
              <li> <Link to='/consultancy'>Consultancy</Link></li>
              <li> <Link to='/courses'>Courses</Link></li>
              <li> <Link to='/services'>Our Term</Link></li>
            </ul>

          </div>

          <div className='col-sm-12 col-lg-2 footer-link-2'>

            <ul className='pl-2 text-white py-5'>
              <li>Locations</li>
              <li>Clients</li>
              <li>Help</li>
              <li> <Link to='/contact'>Contact</Link></li>
            </ul>

          </div>

          <div className='col-sm-12 col-lg-2 footer-link-2'>

            <ul className='pl-2 text-white py-5'>
              <li>Privecy Policy</li>
              <li>Terms Of Use</li>
              <li>Support</li>

            </ul>

          </div>


          <div className='col-sm-12 col-lg-2 footer-link-1'>
            <h3 className='py-5 text-white'>Have You Any Questions</h3>
            <ul className='pl-2 text-white'>
              <li>Phone</li>
              <span>	091 5253375</span>
              <address>
                Office TF-183 Deans Trade Center Peshawar, Khyber Pakhtunkhwa, Pakistan
              </address>
            </ul>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Footer
