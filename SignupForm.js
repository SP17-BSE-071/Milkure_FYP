import React, { Component } from 'react';

class SignupForm extends Component {
    render() {
        return (
            <div>
                <section class="" id="contact-section">
                    <div class="container">
                        <div class="row no-gutters">
                            <div class="col-lg-6 bg-primary" >

                                <form action="#" class="p-5 contact-form">

                                    <h2 class="h4 mb-5 heading" style={{ color: 'black' }}>Registration Form</h2>

                                    <div class="row form-group">
                                        <div class="col-md-6 mb-3 mb-md-0">
                                            <label for="fname" style={{ color: 'black' }}>First Name</label>
                                            <input type="text" id="fname" class="form-control" />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="lname" style={{ color: 'black' }}>Last Name</label>
                                            <input type="text" id="lname" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row form-group">

                                        <div class="col-md-12">
                                            <label for="email" style={{ color: 'black' }}>Email</label>
                                            <input type="email" id="email" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row form-group">

                                        <div class="col-md-12">
                                            <label for="subject" style={{ color: 'black' }}>Mobile #</label>
                                            <input type="Address" id="Address" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <label for="message" style={{ color: 'black' }}>Address</label>
                                            <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Write your Address here ...."></textarea>
                                        </div>
                                    </div>
                                    <div class="row form-group">

                                        <div class="col-md-12" >
                                            <label for="password" style={{ color: 'black' }}>Password</label>
                                            <input type="password" id="email" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="row form-group">

                                        <div class="col-md-12" >
                                            <label for="password" style={{ color: 'red' }}><h6>Confirm Password</h6></label>
                                            <input type="password" id="email" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <input type="submit" value="Register" class="btn btn-dark btn-md text-white" />
                                        </div>
                                    </div>


                                </form>


                            </div>
                            <div class="col-lg-6 bg-secondary">
                                <div class="row justify-content-center align-items-center h-100">
                                    <div class="col-lg-6 text-center heading-section mb-5 align-self-center">
                                        <img src="logo4.ico" style={{ paddingbottom: "20pt" }} />

                                        <form action="#" class="p-5 contact-form">

                                            <h2 class="h4 mb-5 heading" style={{ color: 'white' }}>Sign in</h2>



                                            <div class="row form-group">

                                                <div class="col-md-12" >
                                                    <label for="email" style={{ color: 'white' }}>Email</label>
                                                    <input type="email" id="email" class="form-control" />
                                                </div>
                                            </div>


                                            <div class="row form-group">

                                                <div class="col-md-12">
                                                    <label for="email" style={{ color: 'white' }}>Password</label>
                                                    <input type="email" id="email" class="form-control" />
                                                </div>
                                            </div>





                                            <div class="row form-group">
                                                <div class="col-md-12">
                                                    <input type="submit" value="Sign In" class="btn btn-dark btn-md text-white" style={{ color: 'white' }} />
                                                </div>
                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>

            </div>
        )
    }
}

export default SignupForm;