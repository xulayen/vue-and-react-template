import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,HashRouter, Route, Link,Redirect} from 'react-router-dom';
import './static/css/style.css';
import $ from 'jquery';
import './static/js/main.js';
import {IndexPage} from './page/index.js';


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
            <div>
                <Route exact path="/"  render={(match,location)=>(
                    <IndexPage/>
                )} />

                <Route exact path="/other"  render={(match,location)=>(
                    <div>
                            other Route
                    </div>
                )} />
            </div>
        </AutoBrower>
);

ReactDOM.render(
    (<MenuRouter/>)
    , div_content);



