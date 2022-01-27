import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomeSection1 from './HomeSection1'
import OurTeam from './OurTeam'
import Services from './Services'
import Technical from './Technical'
import Trusted from './Trusted'
import HomeHeader from './HomeHeader';
function Home() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>


      <div className='container-fluid' data-aos="flip-right">

        <div className='row'>

          <HomeHeader />
          <div className='col-sm-12 col-md-12 col-lg-12'>

            <hr />
            <HomeSection1 />
            <hr />

          </div>
          <Services />
          <hr />

          <Technical />
          <Trusted />
          <OurTeam />

        </div>




      </div>
    </>
  )
}

export default Home
