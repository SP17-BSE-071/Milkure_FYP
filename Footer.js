import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="site-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9">
                                <div class="row">
                                    <div class="col-md-5">
                                        <h2 class="footer-heading mb-4">About Us</h2>
                                        <p>We are a delivery system that will provide you the fresh'n pure milk after performing various quality tests at your doorstep. Our customers' satisfaction is our first and foremost priority.</p>
                                    </div>
                                    <div class="col-md-3 ml-auto">
                                        <h2 class="footer-heading mb-4">Quick Links</h2>
                                        <ul class="list-unstyled">
                                            <li><a href="#about-section" class="smoothscroll">Home</a></li>
                                            <li><a href="#trainers-section" class="smoothscroll">Quality Checks</a></li>
                                            <li><a href="#services-section" class="smoothscroll">About</a></li>
                                            <li><a href="#testimonials-section" class="smoothscroll">Contact Us</a></li>
                                            <li><a href="#contact-section" class="smoothscroll">FAQ</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3">
                                        <h2 class="footer-heading mb-4">Follow Us</h2>
                                        <a href="#" class="pl-0 pr-3"><span class="icon-facebook"></span></a>
                                        <a href="#" class="pl-3 pr-3"><span class="icon-twitter"></span></a>
                                        <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                                        <a href="#" class="pl-3 pr-3"><span class="icon-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <h2 class="footer-heading mb-4">Subscribe Newsletter</h2>
                                <form action="#" method="post" class="footer-subscribe">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2" />
                                        <div class="input-group-append">
                                            <button class="btn btn-primary text-black" type="button" id="button-addon2">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row pt-5 mt-5 text-center">
                            <div class="col-md-12">
                                <div class="border-top pt-5">
                                    <p class="copyright"><small>
                                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved <i class="icon-heart text-danger" aria-hidden="true"></i> by <h7><b style={{ color: 'white' }}>Milkure</b></h7>
                                    </small></p>

                                </div>
                            </div>

                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}
export default Footer;