import React from 'react';
import {MyButtonController} from '../components/MyButtonController.js';
import mp4 from '../data/video/wild.mp4';
import webm from '../data/video/wild.webm';
import music1 from '../data/music/music.mp3';

class IndexPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>


                <audio controls="controls">
                    <source src={music1} type="audio/mp3" />
                    Your browser does not support this audio format.
                </audio>
                <div className="videobg">
                    <div className="gridbg"></div>
                    <video className="video" loop="loop" autoPlay="autoplay">
                        <source src={webm} type="video/webm"/>
                        <source src={mp4} type="video/mp4"/>
                    </video>
                    <MyButtonController/>

                </div>
            </div>
        )
    }
}
export {IndexPage};
