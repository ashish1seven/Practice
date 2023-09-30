import React from 'react';
import video from './resources/waves-bg.mp4'
import profpic from './resources/1692076805438.jpg'

const VideoBg = () => {
    return (
        <>
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                </video>
                
                <div className="overlay"></div>
                <div className="content">
                    <div className='flex flex-col items-center'>
                        <img className='h-40 rounded-full w-44 border-x-8 border-slate-800 ' src={profpic} alt="Profile_pic" />
                        <h1 className='mt-4 text-6xl '>B Ashish </h1>
                        <h1>Web Developer</h1>
                        <div className='flex items-center h-10 mt-6 '>
                            <a className='px-5 py-2 mr-3 bg-transparent border-t-2 border-l-2 border-white rounded hover:scale-110 hover:border-t-0 hover:border-l-0 hover:border-b-2 hover:border-r-2 hover:border-white' href="tel:+917898691929" target='blank'>Contact Me</a>
                            <a className='px-5 py-2 ml-3 bg-transparent border-b-2 border-r-2 border-white rounded hover:scale-110 hover:bg-black hover:border-2 hover:border-white' href="https://docs.google.com/document/d/1uDkwzFA58jP_mYDvVj27NmVH5QQNqKsIPZTrlHEhDRk/edit?usp=drive_link" target='blank'>Download CV</a>

                        </div>
                    </div>
                </div>
                <div className='flex links'>
                    <a href="mailto:[ashishbobbari@gmail.com]" target='blank'><img className='w-10 h-10 mr-2 transition-all duration-500 ease-in-out delay-75 rounded-full hover:bg-white hover:scale-110 hover:rotate-[360deg]' src="https://cdn4.iconfinder.com/data/icons/social-media-free-13/32/Google_Search_social_media_logo--256.png" alt="gmail" /></a>

                    <a href="https://wa.me/+917898691929" target='blank'><img className='w-10 h-10 mr-2 transition-all duration-500 ease-in-out delay-75 rounded-full hover:bg-white hover:scale-110 hover:rotate-[360deg]' src="https://cdn4.iconfinder.com/data/icons/social-media-free-13/32/whatsapp_social_media_logo--256.png" alt="whatsapp" /></a>

                    <a href="https://www.linkedin.com/in/ashish-bobbari-6b73b1221/" target='blank'><img className='w-10 h-10 mr-2 transition-all duration-500 ease-in-out delay-75 rounded-full hover:bg-white hover:scale-110 hover:rotate-[360deg]' src="https://cdn1.iconfinder.com/data/icons/capsocial/500/linkedin2-256.png" alt="linkedin" /></a>

                    <a href="https://www.instagram.com/_._.ashish/" target='blank'><img className='w-10 h-10 mr-2 transition-all duration-500 ease-in-out delay-75 rounded-full hover:bg-white hover:scale-110 hover:rotate-[360deg] ' src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-256.png" alt="instagram" /></a>

                    <a href="https://github.com/ashish1seven" target='blank'><img className='w-10 h-10 mr-2 transition-all duration-500 ease-in-out delay-75 rounded-full hover:bg-white hover:scale-110 hover:rotate-[360deg]' src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/github-256.png" alt="github" /></a>
                </div>
            </div>
            
        </>
    );
}

export default VideoBg;
