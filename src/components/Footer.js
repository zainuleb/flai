import React from "react";

const Footer = () => {
  return (
    <footer
      id="site-footer"
      className="main-footer bg-transparent py-70"
      style={{
        backgroundImage: "linear-gradient(170deg, #2D3140 0%, #19272C 100%)",
      }}
    >
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-20percent mb-30 sm:w-50percent">
            <div className="ld-fancy-heading relative">
              <h6 className="ld-fh-element relative mb-3em text-10 font-bold tracking-1 text-white-40 uppercase">
                COMPANY
              </h6>
            </div>
            <nav className="link-white-80 lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none">
              <ul className="reset-ul">
                <li className="mb-15">
                  <a href="/#">Contact Us</a>
                </li>
                <li className="mb-15">
                  <a href="/#">FAQ</a>
                </li>
                <li className="mb-15">
                  <a href="/#">Report A Bug</a>
                </li>
                <li className="mb-15">
                  <a href="/#">Careers</a>
                </li>
                <li>
                  <a href="/#">About Us</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-20percent mb-30 sm:w-50percent">
            <div className="ld-fancy-heading relative">
              <h6 className="ld-fh-element relative mb-3em text-10 font-bold tracking-1 text-white-40 uppercase">
                SUPPORT
              </h6>
            </div>
            <nav className="link-white-80 lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none">
              <ul className="reset-ul">
                <li className="mb-15">
                  <a href="/#">Privacy Policy</a>
                </li>
                <li className="mb-15">
                  <a href="/#">Jobs</a>
                </li>
                <li className="mb-15">
                  <a href="/#">Linkedin</a>
                </li>
                <li>
                  <a href="/#">Community</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-20percent mb-30 sm:w-full">
            <div className="ld-fancy-heading relative">
              <h6 className="ld-fh-element relative mb-3em text-10 font-bold tracking-1 text-white-40 uppercase">
                NEED HELP?
              </h6>
            </div>
            <div className="ld-fancy-heading relative">
              <h6 className="ld-fh-element inline-block relative mb-0/5em text-9 uppercase tracking-1 text-white-30">
                CALL US DIRECTLY
              </h6>
            </div>
            <div className="ld-fancy-heading relative">
              <p className="ld-fh-element relative mb-1/65em text-18 font-medium text-white">
                (123) 567 8901
              </p>
            </div>
            <div className="ld-fancy-heading relative">
              <h6 className="ld-fh-element inline-block relative mb-0/5em text-9 uppercase tracking-1 text-white-30">
                CALL US DIRECTLY
              </h6>
            </div>
            <div className="ld-fancy-heading relative">
              <p className="ld-fh-element relative mb-1/65em text-18 font-medium text-white">
                info@liquid.com
              </p>
            </div>
          </div>
          <div className="w-35percent mb-30 ml-5percent text-center sm:w-full lg:m-0">
            <div className="flex flex-col justify-center items-center pt-45 pb-60 px-45 mb-2percent rounded-20 border-1 border-white-10 sm:ml-0 module-border">
              <div className="ld-fancy-heading relative">
                <h4 className="ld-fh-element mb-1/75em relative text-18 text-white">
                  <span className="text-1/5em mr-0/25em">🎉</span>
                  Join the community
                </h4>
              </div>
              <div className="ld-fancy-heading relative">
                <p className="ld-fh-element relative mb-1/5em text-16 leading-20 text-white-40 hover:text-white-80">
                  Bring your ideas to life an intuitive visual editor. Create,
                  edit, and{" "}
                </p>
              </div>
              <a
                href="#contact-modal"
                target="_blank"
                rel="nofollow"
                className="btn btn-solid btn-md btn-hover-txt-switch-change btn-hover-txt-switch btn-hover-txt-switch-y btn-icon-shaped bg-green-50 text-green-400 rounded-100"
                data-lity="#contact-modal"
              >
                <span
                  data-text="Join the community"
                  className="btn-txt"
                  data-transition-delay="true"
                  data-delay-options='{"elements":  ".lqd-chars" ,  "delayType":  "animation" ,  "startDelay":  0, "delayBetween":  32.5}'
                  data-split-text="true"
                  data-split-options='{"type":  "chars, words"}'
                >
                  {" "}
                  Join the community{" "}
                </span>
              </a>
            </div>
          </div>
          <div className="w-50percent mt-55 flex items-center sm:w-full sm:flex-col module-copyright">
            <div className="mr-20 lqd-imggrp-single block relative">
              <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                <figure className="w-full relative">
                  <img
                    width="106"
                    height="32"
                    src="./assets/images/demo/start-hub-8/logo-light.svg"
                    alt="START HUB 8"
                  />
                </figure>
              </div>
            </div>
            <div className="ld-fancy-heading relative">
              <p className="ld-fh-element relative m-0 text-14 text-white-60">
                © 2022 StartupHub. All images are for demo purposes.
              </p>
            </div>
          </div>
          <div className="w-50percent mt-55 text-end sm:text-start sm:w-full module-social">
            <div className="social-icons-wrapper shape-circle flex-wrap gap-30 gap-y-0">
              <span className="grid-item">
                <a
                  href="/#"
                  className="icon social-icon social-icon-gitlab"
                  target="_blank"
                >
                  <span className="sr-only">Gitlab</span>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"
                      fill="#FFFFFFB0"
                    ></path>
                  </svg>
                </a>
              </span>
              <span className="grid-item">
                <a
                  href="/#"
                  className="icon social-icon social-icon-instagram"
                  target="_blank"
                >
                  <span className="sr-only">Instagram</span>
                  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      fill="#FFFFFFB0"
                    ></path>
                  </svg>
                </a>
              </span>
              <span className="grid-item">
                <a
                  href="/#"
                  className="icon social-icon social-icon-spotify"
                  target="_blank"
                >
                  <span className="sr-only">Spotify</span>
                  <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
                      fill="#FFFFFFB0"
                    ></path>
                  </svg>
                </a>
              </span>
              <span className="grid-item">
                <a
                  href="/#"
                  className="icon social-icon social-icon-facebook"
                  target="_blank"
                >
                  <span className="sr-only">Facebook</span>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                      fill="#FFFFFFB0"
                    ></path>
                  </svg>
                </a>
              </span>
              <span className="grid-item">
                <a
                  href="/#"
                  className="icon social-icon social-icon-twitter"
                  target="_blank"
                >
                  <span className="sr-only">Twitter</span>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      fill="#FFFFFFB0"
                    ></path>
                  </svg>
                </a>
              </span>
              <span className="grid-item">
                <a
                  href="/#"
                  className="icon social-icon social-icon-medium"
                  target="_blank"
                >
                  <span className="sr-only">Medium</span>
                  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"
                      fill="#FFFFFFB0"
                    ></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
