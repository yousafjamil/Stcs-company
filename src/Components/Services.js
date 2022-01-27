import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServicesData from './ServiceData'
//import icon from '../public/images/icon-17.png'
function Services() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='services container-fluid'>
            <div className='container '>
                <h5 className=' text-center' data-aos="fade-right" >Our All Sercices</h5>
                <h1 className='text-center better' data-aos="fade-right" >What we are offering to customers</h1>
                <div className='row m-3 '>
                    {ServicesData.map((sercice, index) => {
                        return (

                            <div key={index} className='col-sm-10 col-lg-4' data-aos="fade-right" >

                                <div className="card mb-3" >
                                    <img className="card-img-top" src={sercice.image} alt=' ' />

                                    <div className="card-body">
                                        <h5 className="card-title">{sercice.title}</h5>
                                        <p className="card-text">{sercice.info}</p>
                                    </div>
                                    <Link to='/courses' >   <button className='btn btn-info'>Read More</button></Link>

                                </div>

                            </div>


                        )


                    })}








                </div>






            </div>


        </div>





    )
}

export default Services
