import React from 'react';
import {NavComponent} from '../components/nav.js';
import {IntegrationComponent} from '../components/integration.js';

class IntegrationPage extends React.Component{
    constructor(props) {
        super(props);
    }


  
    render(){
        return (
            <div>
                <NavComponent/>
                <IntegrationComponent/>
            </div>
        )
    }
}
export {IntegrationPage};
