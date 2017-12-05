import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,HashRouter, Route, Link,Redirect} from 'react-router-dom';
import './static/css/style.css';
import $ from 'jquery';
import './static/js/main.js';


var div_content=document.createElement('div');
div_content.id="content";
document.body.appendChild(div_content);



const MenuRouter=()=>(
        <BrowserRouter basename="/">
            <div>
                <Route exact path="/"  render={(match,location)=>(
                    <section>
                        template
                    </section>
                )} />
            </div>
        </BrowserRouter>
);

ReactDOM.render(
    (<MenuRouter/>)
    , div_content);



