import React from 'react';
import {NavComponent} from '../components/nav.js';
import {SecurityComponent} from '../components/security.js';

class SecurityPage extends React.Component{
    constructor(props) {
        super(props);
    }


  
    render(){
        return (
            <div>
                <NavComponent/>
                <SecurityComponent/>
            </div>
        )
    }
}
export {SecurityPage};
