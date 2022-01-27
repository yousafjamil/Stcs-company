import React from 'react'
import { useParams, Link } from 'react-router-dom'
import RecentData from './ReCentData'
function PostDetail() {
    const { id } = useParams()
    const RecentPost = RecentData.find(p => p.id === parseInt(id))

    return (
        <div className='container py-5 mt-4'>
            <div className='row'>
                <div className='col-sm-12 col-md-10 col-lg-10'>

                    <div className=" py-3 m-2"  >
                        <img className="card-img-top" src={RecentPost.link} alt="Card cap" />
                        <div className="card-body">
                            <b className="card-title">{RecentPost.header}</b><br />
                            <i className="card-text">{RecentPost.subHeading1}</i>
                            <p className='text-justify'>{RecentPost.subPara1}</p>
                            <b>{RecentPost.subHeadin2}</b>
                            <p className='text-justify'>{RecentPost.subpara2}</p>
                            <b>{RecentPost.subHeading3}</b>
                            <p className='text-justify'>{RecentPost.subpara3}</p>
                            <b>{RecentPost.subHeadin4}</b>
                            <p className='text-justify'>{RecentPost.subpara4}</p>
                        </div>

                        <Link to='/recentNews'><button className='btn btn-outline-success w-25' >Go back</button></Link>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default PostDetail
