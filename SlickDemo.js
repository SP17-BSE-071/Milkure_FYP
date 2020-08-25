import React, { Component } from 'react';
import './slickdemo.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export class SlickDemo extends Component {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 1200,
            centerMode: true,
            slidesToShow: 2,
            slidesToScroll: 1
        };

        return (

            <div >



                <Slider {...settings} style={{ paddingTop: "30pt"},{paddingBottom:"30pt"}}>
                    <div className="wdt">
                        <img className="img" src={'images/slider1.jpg'} className="img" />
                    </div>
                    <div className="wdt">
                        <img src={'images/slider2.jpg'} className="img" />
                    </div>
                    <div className="wdt">
                        <img className="img" src={'images/slider3.jpg'} className="img" />
                    </div>
                    <div className="wdt">
                        <img className="img" src={'images/slider4.jpg'} className="img" />
                    </div >
                    <div className="wdt">
                        <img className="img" src={'images/slider5.jpg'} className="img" />
                    </div>
                    <div className="wdt">
                        <img className="img" src={'images/slider6.jpg'} className="img" />
                    </div>
                    <div className="wdt">
                        <img className="img" src={'images/slider7.jpg'} className="img" />
                    </div>
                    <div className="wdt">
                        <img className="img" src={'images/slider8.jpg'} className="img" />
                    </div>
                    <div className="wdt">
                        <img className="img" src={'images/slider9.jpg'} className="img" />
                    </div>
                    <div className="wdt">
                        <img className="img" src={'images/slider10.jpg'} className="img" />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SlickDemo;