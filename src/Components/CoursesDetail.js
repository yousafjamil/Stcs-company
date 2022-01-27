import React from 'react'
import { useParams, Link } from 'react-router-dom';

import CoursesData from './CoursesData'
function CoursesDetail() {
    const { id } = useParams()

    const course = CoursesData.find((p) => p.id === parseInt(id));



    return (
        <div className='container py-4 '>
            <div className='row pr-4 mt-5'>
                <div className='col-sm-9 col-lg-12 ' >
                    <img src={course.image} alt='coursse pic' />
                    <h1>{course.header}</h1>
                    <b>{course.level1}</b>
                    <p className='text-justify'>{course.info}</p>
                    <blockquote>{course.duration1}</blockquote>
                    <b>{course.level2}</b>
                    <p>{course.duration2}</p>
                    <b>{course.level3}</b>
                    <p>{course.duration3}</p>

                    <Link to='/courses'>  <button className='btn btn-outline-info'>Back See all courses</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CoursesDetail
