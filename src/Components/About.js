import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import safetyboss from '../public/images/safety-boss.jpg'
import safetycap from '../public/images/safety-cap.jpg'
function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='container-fluid'>
      <h1 className='text-center py-5 text-info' data-aos="fade-right">About Us</h1>
      <div className='row'>

        <div className='col-sm-12 col-lg-6' data-aos="fade-right">
          <p className='para'>STCS Pvt. Ltd serving with subseries CSCP (Cardiff School of Certified Professionals) & CIHS (Cardiff Institute of Health Sciences) since 2014, CSCP is also registered firm in United Kingdom # . We are a globally focused, innovative, and forward-thinking organization. We thrive at generating studies that have a local and global impact.</p>
          <p className='para'>Our educational team is motivated by innovation and passion, and many are specialists in their professions, resulting in a vibrant learning atmosphere. Passion and innovation motivate our education and learning, which benefits our learners.We collaborate with our learners to foster a dynamic and supportive atmosphere where most of our learners can succeed. Because our learners come and develop in a knowledge-rich atmosphere, they are educated by experts pushing the boundaries of knowledge in their fields.</p>
          <p className='para'>We provide several qualifications up to Postgraduate level internationally through, NEBOSH (UK), IOSH (UK), TRACCERT (Canada), HSI (USA), ASNT USA, LEEA (UK), AOSH (UK), HABC (UK), OTHM (UK), ICML (USA), offer the following fields qualifications:</p>
        </div>

        <div className='col-sm-12 offset-sm-2 col-lg-4 pb-2'>
          <img alt='cap worker' src={safetyboss} data-aos="fade-up" />
          <img alt='cap boss' src={safetycap} data-aos="fade-down" />

        </div>
      </div>
    </div>
  )
}

export default About
