import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,HashRouter, Route, Link,Redirect} from 'react-router-dom';
import $ from 'jquery';
import './static/js/main.js';
import "./static/css/animate.css";
import "./static/css/icomoon.css";
import "./static/css/themify-icons.css";
import "./static/css/bootstrap.css";
import "./static/css/magnific-popup.css";
import "./static/css/owl.carousel.min.css";
import "./static/css/owl.theme.default.min.css";
import "./static/css/flexslider.css";
import "./static/css/style.css";
import {IndexPage} from './page/index.js';
import {IntegrationPage} from './page/Inteagration.js';
import {FleeingGoodsPage} from './page/FleeingGoods.js';
import {SecurityPage} from './page/Security.js';

var div_content=document.createElement('div');
div_content.id="content";
document.body.appendChild(div_content);

 var AutoBrower=BrowserRouter;
if(process.env.NODE_ENV==='production'){
    console.info('production env use nodejs server,so use BrowserRouter to router');
    AutoBrower=BrowserRouter;
}else{
    console.info('dev env use webpack-dev-server,so use HashRouter to router');
    AutoBrower=HashRouter;
}


const MenuRouter=()=>(
        <AutoBrower basename="/">
            <div id="page">
                <Route exact path="/"  render={(match,location)=>(
                    <IndexPage/>
                )} />

                <Route exact path="/integration"  render={(match,location)=>(
                    <IntegrationPage/>
                )} />

                <Route exact path="/fg"  render={(match,location)=>(
                    <FleeingGoodsPage/>
                )} />

                <Route exact path="/security"  render={(match,location)=>(
                    <SecurityPage/>
                )} />
            </div>
        </AutoBrower>
);

ReactDOM.render(
    (<MenuRouter/>)
    , div_content);



