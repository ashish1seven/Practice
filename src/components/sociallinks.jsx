import React from "react";

const Sociallinks = () => {
  return (
    <div className="flex links">
      <a href="mailto:[ashishbobbari@gmail.com]" target="blank">
        <img
          className="w-10 h-10 mr-1 transition-all duration-700 ease-in-out delay-75 rounded-full hover:bg-white hover:scale-110 hover:rotate-[360deg]"
          src="https://cdn4.iconfinder.com/data/icons/social-media-free-13/32/Google_Search_social_media_logo--256.png"
          alt="gmail"
        />
      </a>

      <a href="https://wa.me/+917898691929" target="blank">
        <img
          className="w-10 h-10 mx-1 transition-all duration-1000 ease-in-out delay-75 rounded-full hover:bg-white hover:scale-110 hover:rotate-[360deg]"
          src="https://cdn4.iconfinder.com/data/icons/social-media-free-13/32/whatsapp_social_media_logo--256.png"
          alt="whatsapp"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/ashish-bobbari-6b73b1221/"
        target="blank"
      >
        <img
          className="w-10 h-10 mx-1 transition-all duration-1000 ease-in-out delay-75 rounded-full hover:bg-white hover:scale-110 hover:rotate-[360deg]"
          src="https://cdn1.iconfinder.com/data/icons/capsocial/500/linkedin2-256.png"
          alt="linkedin"
        />
      </a>

      <a href="https://www.instagram.com/_._.ashish/" target="blank">
        <img
          className="w-10 h-10 mx-1 transition-all duration-1000 ease-in-out delay-75 rounded-full hover:bg-white hover:scale-110 hover:rotate-[360deg] "
          src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-256.png"
          alt="instagram"
        />
      </a>

      <a href="https://github.com/ashish1seven" target="blank">
        <img
          className="w-10 h-10 ml-1 transition-all duration-1000 ease-in-out delay-75 rounded-full hover:bg-white hover:scale-110 hover:rotate-[360deg]"
          src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/github-256.png"
          alt="github"
        />
      </a>
    </div>
  );
};

export default Sociallinks;
