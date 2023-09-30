import React from 'react';
import video from './resources/waves-bg.mp4'
import Profile from './profile';
import Sociallinks from './sociallinks';
import Navbar from './navbar';

const VideoBg = () => {
    return (
        <div className="video-background">
            <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
            <div className="overlay"></div>
            <Navbar/>
            <Profile />
            <Sociallinks />
        </div>
    );
}

export default VideoBg;
