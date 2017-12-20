import React from 'react';
import {NavComponent} from '../components/nav.js';
import {FleeinggoodsComponent} from '../components/fleeinggoods.js';

class FleeingGoodsPage extends React.Component{
    constructor(props) {
        super(props);
    }


  
    render(){
        return (
            <div>
                <NavComponent/>
                <FleeinggoodsComponent/>
            </div>
        )
    }
}
export {FleeingGoodsPage};
