import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import libar1Image from '../public/images/image101.jpg';
import libar2Image from '../public/images/image102.jpg'
import icon1 from '../public/images/icon-17.png'
import icon2 from '../public/images/icon-18.png'
import icon3 from '../public/images/icon-19.png'
import icon4 from '../public/images/icon-20.png'
function HomeSection1() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='container-fluid'>

            <div className='row'>
                <div className='col-lg-6 col-sm-12 '>
                    <div>
                        <img src={libar2Image} className='libar-img1' alt='labour1Img' />
                        <img src={libar1Image} className='libar-img2' alt='labour2images' />
                    </div>
                </div>


                <div className='col-lg-6 col-sm-12 safety-content' data-aos="flip-right">
                    <h1 className='better' >Better solution at your fingertips</h1>
                    <p className='consultancy-para' data-aos="flip-right">
                        We at the Smart Trainings & Consultancy Services are committed to providing the best occupational health and safety courses and qualifications that contribute to raising the level of services provided to industries and contributing to saving lives.
                    </p>
                    <button className='btn btn-outline-info btn-lg' data-aos="flip-right">Discover More</button>
                </div>
            </div>

            <hr></hr>

            <div className='container py-5'>
                <div className='row'>
                    <div className='col-sm-10 col-md-3 col-lg-3'>
                        <img src={icon1} className='testmonal-icon' alt='' data-aos="flip-right" />
                        <p data-aos="flip-right">World leader in consulting and finance</p>
                    </div>

                    <div className='col-sm-10 col-md-3 col-lg-3'>
                        <img src={icon2} className='testmonal-icon' alt=' ' data-aos="flip-right" />
                        <p data-aos="flip-right">A focused team with a specialized skill set</p>
                    </div>

                    <div className='col-sm-10 col-md-3 col-lg-3' data-aos="flip-right">
                        <img src={icon3} className='testmonal-icon' alt=' ' />
                        <p data-aos="flip-right"> Trusted and professional advisors for you</p>
                    </div>

                    <div className='col-sm-10 col-md-3 col-lg-3' >
                        <img src={icon4} className='testmonal-icon' alt=' ' />
                        <p data-aos="flip-right">Experience to give you a better results</p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default HomeSection1
