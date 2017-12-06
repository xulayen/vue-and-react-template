import React from 'react';
import {MyButtonController} from '../components/MyButtonController.js';

class IndexPage extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <MyButtonController/>
        )
    }
}
export {IndexPage};
