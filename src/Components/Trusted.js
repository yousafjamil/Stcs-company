import React from 'react'
import clientImg1 from '../public/images/clients1.jpg'
import clientimg2 from '../public/images/client2.jpg'
function Trusted() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 trusted-col-1'>
                    <h1 className='trusted-para'>We’re trusted by more than 50 clients</h1>
                    <img src={clientImg1} alt='client' />
                </div>

                <div className='col-lg-6 col-sm-12'>
                    <img src={clientimg2} alt='clieent-imag' className='clent-image' />
                </div>
            </div>
        </div>
    )
}

export default Trusted
