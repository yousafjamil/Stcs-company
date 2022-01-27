import React, { useEffect } from 'react'
//import sohail from '../public/images/sohail.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import afsar from '../public/images/afsar.jpg'
import zahid from '../public/images/zahid1.jpg'
import Mati from '../public/images/Mati.jpg'
import shahkar from '../public/images/shahkar.jpeg'
import yousaf from '../public/images/yousaf.jpg'
import uzair from '../public/images/uzair.jpeg'
import shahkhalid from '../public/images/shahkhalid.jpeg'
import shahkhan from '../public/images/shahkhan.jpeg'
import Carousel from 'react-bootstrap/Carousel'

function OurTeam() {



  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='container'>
      <div className='row '>

        <div className='col-lg-12'>
          <div className='container'>
            <h1 className='team-para' data-aos="flip-right">Meet our professional team members</h1>
            <div className='row'>
              <div className='col-cm-12 col-md-12 col-lg-12'>

                <Carousel>
                  <Carousel.Item interval={500}>
                    <img
                      className="d-inline  carousel-img"
                      src={yousaf}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Yousaf Jaamil</h3>
                      <p>MERN Stack  DEVEloper.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-inline carousel-img "
                      src={zahid}
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h3>Zahid Kamal</h3>
                      <p>SEO of STCS Company.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-inline  carousel-img"
                      src={shahkar}
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h3>Shah Kar</h3>
                      <p>Photo Grapher in STCS.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-inline carousel-img"
                      src={shahkhan}
                      alt="Four slide"
                    />
                    <Carousel.Caption>
                      <h3>Shah Khan</h3>
                      <p>Teacher in STCS.</p>
                    </Carousel.Caption>
                  </Carousel.Item>



                  <Carousel.Item>
                    <img
                      className="d-inline carousel-img"
                      src={shahkhalid}
                      alt="Five slide"
                    />
                    <Carousel.Caption>
                      <h3>Shah Khalid</h3>
                      <p>Accounter in STCS.</p>
                    </Carousel.Caption>
                  </Carousel.Item>


                  <Carousel.Item>
                    <img
                      className="d-inline carousel-img"
                      src={afsar}
                      alt="six slide"
                    />
                    <Carousel.Caption>
                      <h3>Afsar</h3>
                      <p>member  of STCS.</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-inline carousel-img"
                      src={Mati}
                      alt="Seven slide"
                    />
                    <Carousel.Caption>
                      <h3>Mati</h3>
                      <p>member  of STCS.</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-inline carousel-img"
                      src={uzair}
                      alt="six slide"
                    />
                    <Carousel.Caption>
                      <h3>Uzair</h3>
                      <p>Graphic Desighner in STCS.</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                </Carousel>

              </div>
            </div>
          </div>



        </div>

      </div>
    </div>
  )
}

export default OurTeam
