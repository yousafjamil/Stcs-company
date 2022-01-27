import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Technical() {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='container-fluid technical '>
            <div className='row'>
                <div className='col-sm-10 col-lg-10'>
                    <h4 className='HSE' data-aos="fade-right" >HSE and Consulting Business</h4>
                    <h1 className='our-technical' data-aos="fade-right" >Our techinical expertise across the market</h1>
                    <Link to='/consultancy'> <button className='btn btn-outline-success btn-lg ' data-aos="fade-right"  >Read More</button></Link>
                </div>
            </div>


        </div>
    )
}

export default Technical
