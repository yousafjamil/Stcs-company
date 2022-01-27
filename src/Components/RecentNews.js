import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Data from './ReCentData'
function RecentNews() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='container'>
            <div className='row py-4'>
                {Data.map((post, index) => {
                    return <div className='col-sm-12 col-md-10 col-lg-4' key={index}>

                        <div className="card py-3 m-2" key='unique id' data-aos="fade-right" >
                            <img className="card-img-top" src={post.link} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">{post.header}</h5>
                                <p className="card-text">{post.subHeading1}</p>
                                <Link to={`/details/${post.id}`}>
                                    <button className="btn btn-info">Read More</button>
                                </Link>

                            </div>
                        </div>


                    </div>
                })}
            </div>
        </div>
    )
}

export default RecentNews
