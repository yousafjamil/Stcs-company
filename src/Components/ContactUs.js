import React from 'react'

function ContactUs() {
    return (
        <>
            <div className='container py-4 mt-5'>

                <div className='row'>

                    <div className='col-sm-12 col-lg-6'>
                        <h1 className='get-in-touch'>Get in Touch With Us</h1>
                        <p>Aliq is notm hendr erit a augue insu image pellen tes que id erat quis sollicitud. Lorem ipsum is simply free text dolor sit amet, consectetur adipiscing ullam blandit hendrerit faucibus suspendisse</p>
                    </div>

                    {/* col 2 contact  form */}
                    <div className='col-sm-12 col-lg-6 jumbotron mt-5'>

                        <form>
                            <h1>Sign Up</h1>
                            <div class="form-group">
                                <label >Yours Name</label>
                                <input type="text" class="form-control" placeholder="Enter Your Name" />

                            </div>

                            <div class="form-group">
                                <label >Email address</label>
                                <input type="email" class="form-control" placeholder="Enter yuor email" />
                            </div>

                            <div class="form-group">
                                <label >Your Subject</label>
                                <input type="text" class="form-control" placeholder="Enter your subject" />
                            </div>

                            <div class="form-group">
                                <label >Your conntact</label>
                                <input type="number" class="form-control" placeholder="Enter your Contact  Number" />
                            </div>

                            <div class="form-group">
                                <label >Your message</label>
                                <textarea cols={60} rows={4}></textarea>

                            </div>


                            <div class="form-group">
                                <label >Password</label>
                                <input type="password" class="form-control" placeholder="Password" />
                            </div>

                            <button type="submit" class="btn btn-info w-50">Submit</button>
                        </form>

                    </div>

                </div>

                <hr />

                <div className='row'>
                    <div className='col-sm-10 col-lg-4 mb-3'>
                        <div class="card " >
                            <h1> About</h1>
                            <div class="card-body">
                                <p class="card-text">Smart Trainings & Consultancy Services are committed to providing the best HSE Courses..</p>
                            </div>
                        </div>

                    </div>

                    <div className='col-sm-10 col-lg-4 mb-3'>
                        <div class="card" >
                            <h1>Address </h1>
                            <div class="card-body">
                                <p class="card-text">Office TF-183, Deans Trade Center, Peshawar, Kpk
                                    Paksitan</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-10 col-lg-4 mb-3'>
                        <div class="card" >
                            <h1>Contact</h1>
                            <div class="card-body">
                                <p class="card-text">nfo@stcs.pk
                                    0092 91 5253375
                                    0092 345 1584542.</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}

export default ContactUs
