
import React from 'react';
import img_1 from '../static/images/img_1.jpg';

class SecurityComponent extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="gtco-section-overflow">
            <div id="gtco-counter" className="gtco-section animated">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                            <h2>
                                The results of</h2>
                            <p>
                                The code you queried  is the authentic product from Honeywell, thank you for purchasing and using.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 animate-box fadeInLeft animated-fast" data-animate-effect="fadeInLeft">
                            <div className="feature-center">
                                <span className="icon"><i className="ti-download"></i></span><span className="counter js-counter" data-from="0" data-to="2122070" data-speed="5000" data-refresh-interval="50">2122070</span>
                                <span className="counter-label">Downloads</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 animate-box fadeInLeft animated-fast" data-animate-effect="fadeInLeft">
                            <div className="feature-center">
                                <span className="icon"><i className="ti-face-smile"></i></span><span className="counter js-counter" data-from="0" data-to="402002" data-speed="5000" data-refresh-interval="50">402002</span>
                                <span className="counter-label">Happy Clients</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 animate-box fadeInLeft animated-fast" data-animate-effect="fadeInLeft">
                            <div className="feature-center">
                                <span className="icon"><i className="ti-briefcase"></i></span><span className="counter js-counter" data-from="0" data-to="402" data-speed="5000" data-refresh-interval="50">402</span>
                                <span className="counter-label">Projects Done</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 animate-box fadeInLeft animated-fast" data-animate-effect="fadeInLeft">
                            <div className="feature-center">
                                <span className="icon"><i className="ti-time"></i></span><span className="counter js-counter" data-from="0" data-to="212023" data-speed="5000" data-refresh-interval="50">212023</span>
                                <span className="counter-label">Hours Spent</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="gtco-products" data-section="products">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                            <h2>
                                Products</h2>
                            <p>
                                Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
                                provident. Odit ab aliquam dolor eius.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export {SecurityComponent};

