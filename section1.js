import React, { Component } from 'react';

class Section1 extends Component {
  render() {
    return (
      <div style={{ width: '1200px' }, { height: '800px' }, { marginBottom: "30pt" }, { paddingBottom: "30pt" }}>
        <section class="site-blocks-cover overflow-hidden bg-light">
          <div class="container"  >
            <div class="row">
              <div class="col-md-7 align-self-center text-center text-md-left" style={{ paddingRight: "" }} >
                <div class="intro-text" style={{ paddingTop: "130pt" }}>


                  <h1>We do not compromise on<span class="d-md-block"><i>Quality</i></span></h1>
                  <p class="mb-4">We always try to provide you the best quality<span class="d-block" /> products</p>
                </div>
              </div>
              <div class="col-md-5 align-self-end text-center text-md-right">
                <img src="images/header.jpg" alt="Image" class="img-fluid cover-img" style={{ width: "500pt" }, { height: "340pt" }} />
              </div>
            </div>
          </div>
        </section>




      </div>
    )
  }
}
export default Section1;