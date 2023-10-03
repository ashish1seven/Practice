import React from 'react';

const Footer = () => {
    return (
      <div>
        <footer class="footer">
          <div class="waves">
            <div class="wave" id="wave1"></div>
            <div class="wave" id="wave2"></div>
            <div class="wave" id="wave3"></div>
            <div class="wave" id="wave4"></div>
          </div>
          <ul class="social-icon">
            <li class="social-icon__item">
              <a class="social-icon__link" href="">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/social-media-free-13/32/Google_Search_social_media_logo--256.png"
                  alt=""
                />
              </a>
            </li>
            <li class="social-icon__item">
              <a class="social-icon__link" href="">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/social-media-free-13/32/whatsapp_social_media_logo--256.png"
                  alt=""
                />
              </a>
            </li>
            <li class="social-icon__item">
              <a class="social-icon__link" href="">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/capsocial/500/linkedin2-256.png"
                  alt=""
                />
              </a>
            </li>
            <li class="social-icon__item">
              <a class="social-icon__link" href="">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-256.png"
                  alt=""
                />
              </a>
            </li>
            <li class="social-icon__item">
              <a class="social-icon__link" href="">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/github-256.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="menu__item">
              <a href="" class="menu__link">
                Dashboard
              </a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">
                About
              </a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">
                Project
              </a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">
                Skills
              </a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">
                Contact
              </a>
            </li>
          </ul>
          <p>2023 Ashish | All rights reserved</p>
        </footer>
      </div>
    );
}

export default Footer;
