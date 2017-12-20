

import React from 'react';

class NavComponent extends React.Component{
    
    constructor(props) {
        super(props);
        var hash=process.env.NODE_ENV==='production'?'/':'#/';
        this.state={
            hash:hash,
            router:window.location.href.substr(window.location.href.lastIndexOf('/')+1)
        }

        console.log(this.state.router)
    }

    render(){
        return (
            <nav className="gtco-nav" role="navigation">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-sm-2 col-md-8 col-xs-12 col-lg-8">
                            <input type="text" className="form-control" id="username" placeholder="Qr code or number"/>
                            <input type="submit" value="Box Computing" className="btn btn-info"/>
                        </div>
                    
                        <div className="col-xs-10 col-md-4 col-lg-4 text-right menu-1 main-nav">
                            <ul>
                                <li className={this.state.router=='security'?'active':''}><a href={this.state.hash+'security'} data-nav-section="Security" title="Security">SE</a></li>
                                <li className={this.state.router=='integration'?'active':''}><a href={this.state.hash+'integration'} data-nav-section="Integration" title="Integration">IN</a></li>
                                <li className={this.state.router=='fg'?'active':''}><a href={this.state.hash+'fg'} data-nav-section="FleeingGoods" title="FleeingGoods">FG</a></li>
                                <li><a href="#" data-nav-section="Ascend" title="Ascend">ASC</a></li>
                                <li><a href="#" data-nav-section="DataMarket" title="DataMarket">DM</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </nav>
        )
    }
}


export {NavComponent};

