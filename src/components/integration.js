
import React from 'react';
import img_1 from '../static/images/img_1.jpg';
import img_2 from '../static/images/img_2.jpg';
import img_3 from '../static/images/img_3.jpg';
import img_4 from '../static/images/img_4.jpg';
import img_5 from '../static/images/img_5.jpg';
import img_6 from '../static/images/img_6.jpg';

// 防伪
class IntegrationComponent extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="gtco-section-overflow">
            <div className="gtco-section" id="gtco-services" data-section="Security">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="gtco-heading">
                                <h2 className="gtco-left">
                                    Services</h2>
                                <p>
                                    Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
                                    provident. Odit ab aliquam dolor eius.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="feature-left">
                                        <span className="icon"><i className="icon-paper-clip"></i></span>
                                        <div className="feature-copy">
                                            <h3>
                                                Web Development</h3>
                                            <p>
                                                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="feature-left">
                                        <span className="icon"><i className="icon-monitor"></i></span>
                                        <div className="feature-copy">
                                            <h3>
                                                Web Design</h3>
                                            <p>
                                                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="feature-left">
                                        <span className="icon"><i className="icon-toggle"></i></span>
                                        <div className="feature-copy">
                                            <h3>
                                                Customer Support</h3>
                                            <p>
                                                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="feature-left">
                                        <span className="icon"><i className="icon-layout"></i></span>
                                        <div className="feature-copy">
                                            <h3>
                                                Web Design</h3>
                                            <p>
                                                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box fadeIn animated-fast" data-animate-effect="fadeIn">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="feature-left">
                                        <span className="icon"><i className="icon-pencil"></i></span>
                                        <div className="feature-copy">
                                            <h3>
                                                Copy Writing</h3>
                                            <p>
                                                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="feature-left">
                                        <span className="icon"><i className="icon-cog"></i></span>
                                        <div className="feature-copy">
                                            <h3>
                                                CMS Development</h3>
                                            <p>
                                                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="feature-left">
                                        <span className="icon"><i className="icon-layers"></i></span>
                                        <div className="feature-copy">
                                            <h3>
                                                Data Gathering</h3>
                                            <p>
                                                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="feature-left">
                                        <span className="icon"><i className="icon-search"></i></span>
                                        <div className="feature-copy">
                                            <h3>
                                                Search Engine</h3>
                                            <p>
                                                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gtco-section" id="gtco-portfolio" data-section="Integration">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                            <h2>
                                Portfolio</h2>
                            <p>
                                Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
                                provident. Odit ab aliquam dolor eius.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <a href={img_2} className="gtco-card-item image-popup" title="Project name here.">
                                <figure>
                                    <div className="overlay"><i className="ti-plus"></i></div>
                                    <img src={img_2} alt="Image" className="img-responsive"/>
                                </figure>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href={img_1} className="gtco-card-item image-popup" title="Project name here.">
                                <figure>
								<div className="overlay"><i className="ti-plus"></i></div>
								<img src={img_1} alt="Image" className="img-responsive"/>
							</figure>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href={img_1} className="gtco-card-item image-popup" title="Project name here.">
                                <figure>
								<div className="overlay"><i className="ti-plus"></i></div>
								<img src={img_1} alt="Image" className="img-responsive"/>
							</figure>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href={img_4} className="gtco-card-item image-popup" title="Project name here.">
                                <figure>
								<div className="overlay"><i className="ti-plus"></i></div>
								<img src={img_4} alt="Image" className="img-responsive"/>
							</figure>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href={img_5} className="gtco-card-item image-popup" title="Project name here.">
                                <figure>
								<div className="overlay"><i className="ti-plus"></i></div>
								<img src={img_5} alt="Image" className="img-responsive"/>
							</figure>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href={img_6} className="gtco-card-item image-popup" title="Project name here.">
                                <figure>
								<div className="overlay"><i className="ti-plus"></i></div>
								<img src={img_6} alt="Image" className="img-responsive"/>
							</figure>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href={img_2} className="gtco-card-item image-popup" title="Project name here.">
                                <figure>
								<div className="overlay"><i className="ti-plus"></i></div>
								<img src={img_2} alt="Image" className="img-responsive"/>
							</figure>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href={img_1} className="gtco-card-item image-popup" title="Project name here.">
                                <figure>
								<div className="overlay"><i className="ti-plus"></i></div>
								<img src={img_1} alt="Image" className="img-responsive"/>
							</figure>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href={img_3} className="gtco-card-item image-popup" title="Project name here.">
                                <figure>
								<div className="overlay"><i className="ti-plus"></i></div>
								<img src={img_3} alt="Image" className="img-responsive"/>
							</figure>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gtco-section" id="gtco-faq" data-section="faq">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                            <h2>
                                Frequently Ask Questions</h2>
                            <p>
                                Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
                                provident. Odit ab aliquam dolor eius.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="gtco-accordion">
                                <div className="gtco-accordion-heading">
                                    <div className="icon">
                                        <i className="icon-cross"></i>
                                    </div>
                                    <h3>
                                        What is Asymmetry?</h3>
                                </div>
                                <div className="gtco-accordion-content">
                                    <div className="inner">
                                        <p>
                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                                            of the Semantics, a large language ocean.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="gtco-accordion">
                                <div className="gtco-accordion-heading">
                                    <div className="icon">
                                        <i className="icon-cross"></i>
                                    </div>
                                    <h3>
                                        I have technical problem, who do I email?</h3>
                                </div>
                                <div className="gtco-accordion-content">
                                    <div className="inner">
                                        <p>
                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                                            of the Semantics, a large language ocean.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="gtco-accordion">
                                <div className="gtco-accordion-heading">
                                    <div className="icon">
                                        <i className="icon-cross"></i>
                                    </div>
                                    <h3>
                                        How do I use Asymmetry features?</h3>
                                </div>
                                <div className="gtco-accordion-content">
                                    <div className="inner">
                                        <p>
                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                                            of the Semantics, a large language ocean.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="gtco-accordion">
                                <div className="gtco-accordion-heading">
                                    <div className="icon">
                                        <i className="icon-cross"></i>
                                    </div>
                                    <h3>
                                        What language are available?</h3>
                                </div>
                                <div className="gtco-accordion-content">
                                    <div className="inner">
                                        <p>
                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                                            of the Semantics, a large language ocean.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="gtco-accordion">
                                <div className="gtco-accordion-heading">
                                    <div className="icon">
                                        <i className="icon-cross"></i>
                                    </div>
                                    <h3>
                                        Can I have a username that is already taken?</h3>
                                </div>
                                <div className="gtco-accordion-content">
                                    <div className="inner">
                                        <p>
                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                                            of the Semantics, a large language ocean.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="gtco-accordion">
                                <div className="gtco-accordion-heading">
                                    <div className="icon">
                                        <i className="icon-cross"></i>
                                    </div>
                                    <h3>
                                        Is Asymmetry free?</h3>
                                </div>
                                <div className="gtco-accordion-content">
                                    <div className="inner">
                                        <p>
                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                                            of the Semantics, a large language ocean.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export {IntegrationComponent};

