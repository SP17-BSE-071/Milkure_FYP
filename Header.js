import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div style={{ paddingBottom: "10pt" }, { marginBottom: "0pt" }}>
        <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300" id="home-section"></body>
        <div class="site-wrap">

          <div class="site-mobile-menu site-navbar-target">
            <div class="site-mobile-menu-header">
              <div class="site-mobile-menu-close mt-3">
                <span class="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div class="site-mobile-menu-body"></div>
          </div>


          <header class="site-navbar js-sticky-header site-navbar-target" role="banner" style={{ marginTop: "5pt" }}>

            <div class="container">
              <div class="row align-items-center">

                <div class="col-6 col-xl-2">
                  <h1 class="mb-0 site-logo"><a href="index.html" class="h2 mb-0"><img src="logo.ico" style={{ marginTop: "1pt" }, { paddingTop: "1pt" }} /> </a></h1>
                </div>

                <div class="col-12 col-md-10 d-none d-xl-block">
                  <nav class="site-navigation position-relative text-right" role="navigation">

                    <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                      <li><a href="#home-section" class="nav-link">Home</a></li>
                      <li class="has-children">
                        <a href="#about-section" class="nav-link">More</a>
                        <ul class="dropdown">
                          <li><a href="#trainers-section" class="nav-link">Coverage Areas</a></li>
                          <li><a href="#pricing-section" class="nav-link">Pricing</a></li>
                          <li><a href="#faq-section" class="nav-link">FAQ</a></li>
                          <li><a href="#testimonials-section" class="nav-link">Raw sites</a></li>
                          <li><a href="#gallery-section" class="nav-link">Gallery</a></li>
                          <li><a href="#blog-section" class="nav-link">Recommendation</a></li>
                          <li class="has-children">
                            <a href="#">Login as</a>
                            <ul class="dropdown">
                              <li><a href="#">Vendor</a></li>
                              <li><a href="#">Delivery Staff</a></li>
                              <li><a href="#">Collection Staff</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li><a href="#trainers-section" class="nav-link">Quality Checks</a></li>
                      <li><a href="#services-section" class="nav-link">About</a></li>
                      <li><a href="#contact-section" class="nav-link">Contact</a></li>
                    </ul>
                  </nav>
                </div>


                <div class="col-6 d-inline-block d-xl-none ml-md-0 py-3" ><a href="#" class="site-menu-toggle js-menu-toggle float-right"><span class="icon-menu h3"></span></a></div>

              </div>
            </div>

          </header>

        </div>
      </div>
    )
  }
}


export default Header;
