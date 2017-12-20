

import React from 'react';

import img_1 from '../static/images/img_1.jpg';
import img_2 from '../static/images/img_2.jpg';
import img_3 from '../static/images/img_3.jpg';
import img_4 from '../static/images/img_4.jpg';
import img_5 from '../static/images/img_5.jpg';
import img_6 from '../static/images/img_6.jpg';

// 窜货
class FleeinggoodsComponent extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="gtco-section-overflow">
            <div id="gtco-blog" data-section="FleeingGoods">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                            <h2>
                                Blog</h2>
                            <p>
                                Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
                                provident. Odit ab aliquam dolor eius.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <a href="#" className="gtco-card-item has-text">
                                <figure>
							<div className="overlay"><i className="ti-plus"></i></div>
							<img src={img_1} alt="Image" className="img-responsive"/>
						</figure>
                                <div className="gtco-text text-left">
                                    <h2>
                                        25 Minimal Web Design for Inspiration</h2>
                                    <p>
                                        Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                    <p className="gtco-category">
                                        Sep. 25th, 2016 by John Doe</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="#" className="gtco-card-item has-text">
                                <figure>
                                    <div className="overlay"><i className="ti-plus"></i></div>
                                    <img src={img_2} alt="Image" className="img-responsive"/>
                                </figure>
                                <div className="gtco-text text-left">
                                    <h2>
                                        25 Minimal Web Design for Inspiration</h2>
                                    <p>
                                        Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                    <p className="gtco-category">
                                        Sep. 25th, 2016 by John Doe</p>
                                </div>
                            </a>
                        </div>
                        <div className="clearfix visible-sm-block">
                        </div>
                        <div className="col-md-4">
                            <a href="#" className="gtco-card-item has-text">
                                <figure>
							<div className="overlay"><i className="ti-plus"></i></div>
							<img src={img_3} alt="Image" className="img-responsive"/>
						</figure>
                                <div className="gtco-text text-left">
                                    <h2>
                                        25 Minimal Web Design for Inspiration</h2>
                                    <p>
                                        Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                    <p className="gtco-category">
                                        Sep. 25th, 2016 by John Doe</p>
                                </div>
                            </a>
                        </div>
                        <div className="clearfix visible-lg-block visible-md-block">
                        </div>
                        <div className="col-md-4">
                            <a href="#" className="gtco-card-item has-text">
                                <figure>
							<div className="overlay"><i className="ti-plus"></i></div>
							<img src={img_4} alt="Image" className="img-responsive"/>
						</figure>
                                <div className="gtco-text text-left">
                                    <h2>
                                        25 Minimal Web Design for Inspiration</h2>
                                    <p>
                                        Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                    <p className="gtco-category">
                                        Sep. 25th, 2016 by John Doe</p>
                                </div>
                            </a>
                        </div>
                        <div className="clearfix visible-sm-block">
                        </div>
                        <div className="col-md-4">
                            <a href="#" className="gtco-card-item has-text">
                                <figure>
                                    <div className="overlay"><i className="ti-plus"></i></div>
                                    <img src={img_5} alt="Image" className="img-responsive"/>
                                </figure>
                                <div className="gtco-text text-left">
                                    <h2>
                                        25 Minimal Web Design for Inspiration</h2>
                                    <p>
                                        Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                    <p className="gtco-category">
                                        Sep. 25th, 2016 by John Doe</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="#" className="gtco-card-item has-text">
                                <figure>
                                    <div className="overlay"><i className="ti-plus"></i></div>
                                    <img src={img_6} alt="Image" className="img-responsive"/>
                                </figure>
                                <div className="gtco-text text-left">
                                    <h2>
                                        25 Minimal Web Design for Inspiration</h2>
                                    <p>
                                        Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                    <p className="gtco-category">
                                        Sep. 25th, 2016 by John Doe</p>
                                </div>
                            </a>
                        </div>
                        <div className="clearfix visible-lg-block visible-md-block">
                        </div>
                        <div className="clearfix visible-sm-block">
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        )
    }
}


export {FleeinggoodsComponent};

