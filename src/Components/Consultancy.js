import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import consultancy1Img from '../public/images/consultancy1.jpg'
import consultancy2Img from '../public/images/consultancy2.jpg'
import consultancy3Img from '../public/images/consultancy3.jpg'
import consultancy4Img from '../public/images/consultancy4.jpg'
import consultancy5Img from '../public/images/consultancy5.jpg'
import ConsultancyVisa from './ConsultancyVisa'
function Consultancy() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div className='container-fluid'>

                <div className='row consultancy-header'>
                    <div className='col-sm-12 col-lg-12'>
                        <h1 className='better text-center' data-aos="fade-right">Consultancy</h1>
                    </div>



                    {/* row carousel */}

                </div>

                <ConsultancyVisa />
            </div>



            <div className='container-fluid'>

                <div className='row py-4'>
                    <div className='col-sm-12 offset-1 col-lg-10'>


                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={consultancy1Img} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={consultancy2Img} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={consultancy3Img} alt="Third slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={consultancy4Img} alt="Third slide" />
                                </div>

                                <div className="carousel-item">
                                    <img className="d-block w-100" src={consultancy5Img} alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                    </div>
                </div>

                <div className='row' >
                    <div className='col-sm-12 col-lg-10 offset-1'>
                        <header data-aos="fade-right">Development Of Quality Management System.</header>
                        <p data-aos="fade-left">We provide the services to document the processes, procedures, and responsibilities for achieving quality policies and objectives. We help coordinate and direct an organization’s activities to meet customer and regulatory requirements and improve its effectiveness and efficiency on a continuous basis.</p>


                        <header data-aos="fade-right">Development Of Occupational Health & Safety Management System.</header>
                        <p data-aos="fade-left">We provide an effective management system that improves your ability to continuously identify hazards and control risks in your workplace. It is more than just your health and safety program. It includes health and safety policies, systems, standards, and records, and involves incorporating your health and safety activities and program into your other business processes.</p>

                        <header data-aos="fade-right">Development Of Environmental Management System.</header>
                        <p data-aos="fade-right">We provide our services for the development of an Environmental Management System – EMS. to improve the environmental performance (e.g., compliance with regulations or prevent pollution).</p>

                        <header data-aos="fade-right">Development Of Integrated QHSE Management System.</header>
                        <p data-aos="fade-right" className='text-justify'>Do you want Less likelihood of overlapping responsibilities in your organization? Less duplication of effort? Creation of objectives and plans that don’t compete against, or contradict, each other? Better allocation of available resources? id yes, we can help you in this regard as well.</p>

                        <header data-aos="fade-right">Incident/Accident Investigation</header>
                        <p data-aos="fade-right" className='text-justify'>Smart Trainings & Consultancy Services Provides consultancy services to determine the cause of healthcare-related incidents, deliver remedies, and provide legal support.</p>


                        <header data-aos="fade-right">Safety Inspections</header>
                        <p data-aos="fade-right" className='text-justify'>Smart Trainings & Consultancy Services Provides consultancy services to inspect organizations, factories, machines, equipment, workplaces to ensure government rules and regulations as well as industry standards are being complied with.</p>

                        <header data-aos="fade-right">Provision Of External Competent Person</header>
                        <p data-aos="fade-right" className='text-justify'>Smart Trainings & Consultancy Services Provides an external competent person of identifying existing and predictable hazards in the surroundings or working conditions which are unsanitary, hazardous, or dangerous to employees.</p>

                        <header data-aos="fade-right">Workplace Assessment</header>
                        <p data-aos="fade-right" className='text-justify'>Greenwich Training & Consulting Provides consultancy services to understand companies what they need to do to assess and control risks in the workplace and comply with health and safety laws.</p>

                        <header data-aos="fade-right" >Conducting EIA</header>
                        <p data-aos="fade-right" className='text-justify'>Companies can get STCS Training & Consulting’s services to get the knowledge of environmental impacts of a proposed project or development, taking into account inter-related socio-economic, cultural and human-health impacts, both beneficial and adverse.</p>

                        <header data-aos="fade-right" >HSE Audits:</header>
                        <p data-aos="fade-right" className='text-justify'>The purpose of HSE auditing is to verify the existence and effectiveness of internal controls intended to manage HSE risks and comply with the Group ‘HSE Policy and Commitment’ [27] and HSE related standards [21- 40] identified in the Annual HSE Assurance Statements.</p>




                    </div>
                </div>
            </div>

        </>
    )
}

export default Consultancy
