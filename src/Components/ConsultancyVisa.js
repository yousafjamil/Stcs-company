import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function ConsultancyVisa() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='container py-4 m-4'>
            <div className='row'>
                <div className='col-sm-12 col-md-12 col-lg-12'>

                    <header className='VISA-HEADER' data-aos="fade-right">VISIT VISAS</header>
                    <div className='row'>
                        <div className='col-sm-4 col-md-4 col-lg-4 '>
                            <ul data-aos="fade-right">
                                <li>Canada</li>
                                <br />
                                <li>Spain</li>
                                <br />
                                <li>Turkey</li>
                                <br />
                                <li>UK</li>
                            </ul>
                        </div>

                        <div className='col-sm-4 col-md-4 col-lg-4'>
                            <ul data-aos="fade-right">
                                <li><img alt='coutry ' className='country-img' src='https://t3.ftcdn.net/jpg/01/71/57/72/240_F_171577280_Gj1SV9BV1vrvowWTexaiJW7OBj7uNgCT.jpg' /></li>
                                <li><img alt='country ' className='country-img' src='https://t3.ftcdn.net/jpg/01/81/03/46/240_F_181034690_YGrkZjbc01ynd9pCJNgwJZ8z62SHsjlG.jpg' /></li>
                                <li><img alt='country ' className='country-img' src='https://cdn-icons-png.flaticon.com/128/197/197518.png' /></li>
                                <li><img alt='country ' className='country-img' src='https://t3.ftcdn.net/jpg/01/80/24/26/240_F_180242617_KvMclYitCWavc8cuRgrUx0uV3BAAnnpy.jpg' /></li>
                            </ul>
                        </div>

                        <div className='col-sm-4 col-md-4 col-lg-4'>

                            <ul data-aos="fade-right">
                                <h5>Requirment</h5>
                                <li>Bank statement</li>
                                <li>chamber</li>
                                <li>NTN</li>
                                <li>company profile</li>
                                <li>Land evaluation</li>
                                <li>FRC</li>
                                <li>PIctures</li>
                                <li>Passport</li>
                                <li>Cnic</li>

                            </ul>
                        </div>


                    </div>


                </div>
            </div>

            {/* study visa */}
            <hr />
            <div className='row mt-4'>
                <div className='col-sm-4 col-md-4 col-lg-4'>
                    <header className='VISA-HEADER' data-aos="fade-right">Study  Visas</header>

                    <ul data-aos="fade-right">
                        <li>UK</li><br />
                        <li>Australia</li><br />
                        <li>USA</li><br />
                        <li>Canada</li>
                    </ul>
                </div>

                <div className='col-sm-4 col-md-4 col-lg-4'>
                    <br />   <br /><br />


                    <ul data-aos="fade-right">
                        <li><img className='country-img' alt='country ' src='https://t3.ftcdn.net/jpg/01/80/24/26/240_F_180242617_KvMclYitCWavc8cuRgrUx0uV3BAAnnpy.jpg' /></li>
                        <li><img className='country-img' alt='contry ' src="https://t4.ftcdn.net/jpg/03/15/28/01/240_F_315280104_UB08R4kY3u1CcMaJG4huCk5ZCUCiOuEj.jpg" /></li>
                        <li><img className='country-img' alt='country ' src='https://t3.ftcdn.net/jpg/02/70/24/98/240_F_270249859_mf1Kyad7MO3Gb1BGvBahbB9SNttnVZO7.jpg' /></li>
                        <li><img className='country-img' alt='country ' src='https://t3.ftcdn.net/jpg/01/71/57/72/240_F_171577280_Gj1SV9BV1vrvowWTexaiJW7OBj7uNgCT.jpg' /></li>
                    </ul>
                </div>


                <div className='col-sm-4 col-md-4 col-lg-4'>
                    <header className='VISA-HEADER' data-aos="fade-right">Requirment</header>

                    <ul data-aos="fade-right">
                        <li>Study Document</li>
                        <li>Passport</li>
                        <li>Cnic</li>
                        <li>Pictures</li>
                        <li>CV</li>
                    </ul>
                </div>



            </div>



            {/* Work visa  */}
            <hr />
            <div className='row mt-4'>
                <div className='col-sm-4 col-md-4 col-lg-4'>
                    <header className='VISA-HEADER' data-aos="fade-right">Work  Visas</header>

                    <ul data-aos="fade-right">
                        <li>UAE</li><br />

                        <li>SAUDI ARABIA</li><br />
                        <li>QATAR</li><br />
                        <li>KUWAIT</li>
                    </ul>
                </div>

                <div className='col-sm-4 col-md-4 col-lg-4'>

                    <br /> <br /><br />
                    <ul data-aos="fade-right">
                        <li><img className='country-img' src='https://t4.ftcdn.net/jpg/03/02/38/13/240_F_302381358_Od86y1ZmuRq9AGTAh4gXxPQD19n3wl4B.jpg' alt='visa  ' /></li>
                        <li><img className='country-img' src='https://t4.ftcdn.net/jpg/02/52/14/47/240_F_252144751_VvEHObnZPbafZmui9N4UkKbK3bcNEPMZ.jpg' alt='visa  ' /></li>
                        <li>  <img className='country-img' src='https://t4.ftcdn.net/jpg/02/54/76/95/240_F_254769527_VtZiDMrjWz5Fdksw7fytqkYgIm1KTdqp.jpg' alt='visa  ' /> </li>
                        <li>  <img className='country-img' src='https://t4.ftcdn.net/jpg/03/64/21/43/240_F_364214343_GzIaKztY399TTp5wAcLVTeF48WQ4eDQl.jpg' alt='visa  ' /> </li>
                    </ul>
                </div>


                <div className='col-sm-4 col-md-4 col-lg-4'>
                    <header className='VISA-HEADER' data-aos="fade-right">Requirment</header>
                    <br /><br /><br />
                    <ul data-aos="fade-right">
                        <li>Study Document</li>
                        <li>Passport</li>
                        <li>Cnic</li>
                        <li>Pictures</li>
                        <li>CV</li>
                    </ul>
                </div>







            </div>
        </div>
    )
}

export default ConsultancyVisa
