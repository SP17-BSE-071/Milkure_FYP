import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <div>
                <section class="" id="contact-section" style={{ width: '1200' }, { height: '900' }, { marginBottom: "20px" }, { paddingTop: '50px' }}>
                    <div class="container">
                        <div class="row no-gutters">
                            <div class="col-lg-6 bg-primary">
                                <form action="#" class="p-5 contact-form">

                                    <h2 class="h4 mb-5 heading" style={{ color: 'black' }}>Contact Form</h2>

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
                                            <label for="subject" style={{ color: 'black' }}>Subject</label>
                                            <input type="subject" id="subject" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <label for="message" style={{ color: 'black' }}>Message</label>
                                            <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Write your notes or questions here..."></textarea>
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <input type="submit" value="Send Message" class="btn btn-dark btn-md text-white" />
                                        </div>
                                    </div>


                                </form>
                            </div>
                            <div class="col-lg-6 bg-secondary">
                                <div class="row justify-content-center align-items-center h-100">
                                    <div class="col-lg-6 text-center heading-section mb-5 align-self-center">

                                        <h2 class="text-white mb-5">Contact Us</h2>
                                        <ul class="list-unstyled text-left address">
                                            <li>
                                                <span class="d-block">Address:</span>
                                                <p>Plot # 387 Sector G-17/3 Islamabad, Pakistan</p>
                                            </li>
                                            <li>
                                                <span class="d-block">Phone:</span>
                                                <p>+(92)3032940668</p>
                                            </li>
                                            <li>
                                                <span class="d-block">Email:</span>
                                                <p>milkure@gmail.com</p>
                                            </li>
                                        </ul>
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

export default ContactForm;