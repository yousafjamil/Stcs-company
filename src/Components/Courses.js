import React, { useEffect } from 'react'
import postData from './CoursesData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
function Courses() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='container-fluid mb-4 py-4 '>
            <div className='row py-4'>
                {postData.map((course, index) => {
                    return <div className='col-sm-12 col-md-10 col-lg-4' key={course.id} >

                        <div className="card py-3 m-2" data-aos="fade-right" >
                            <img className="card-img-top" src={course.image} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">{course.header}</h5>
                                <p className="card-text">{course.subHeading1}</p>
                                <Link to={`/course/${course.id}`}>
                                    <button className="btn btn-info">See More  Detail </button>
                                </Link>

                            </div>
                        </div>


                    </div>
                })}
            </div>

        </div>
    )
}

export default Courses
