import React from "react";

const ESGIntro = () => {
  return (
    <section
      className="lqd-section video-box pt-120 pb-160"
      id="video-tutorials"
    >
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xl-6 relative text-center">
            <div className="module-shape absolute max-w-full z-0 top-10percent sm:hidden">
              <figure
                id="lqd-draw-shape"
                className="lqd-draw-shape"
                data-lqd-draw-shape="true"
                data-draw-shape-options='{"drawSVG": "0% 0%", "stagger" : 2, "start": "top bottom", "end": "center center", "scrub" : 2, "ease": "power2.inOut"}'
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="421"
                  height="454"
                  viewBox="0 0 421 454"
                  fill="none"
                >
                  <path
                    d="M19.9825 124.207C104.89 -36.1255 346.014 -23.9645 410.809 144.689"
                    stroke="#49C193"
                    stroke-width="20"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M10.2579 309.748C77.9419 478.078 319.015 491.188 401.084 330.23"
                    stroke="#707070"
                    stroke-opacity="0.1"
                    stroke-width="20"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </figure>
            </div>
            <div
              className="lqd-imggrp-single block relative module-img"
              data-parallax="true"
              data-parallax-options='{"ease": "power2.out", "start": "top bottom", "end": "bottom-=35% top"}'
              data-parallax-from='{"transformPerspective": "1200px", "y": "120px", "rotationX" : 25}'
              data-parallax-to='{"y": "0px", "rotationX" : 0}'
            >
              <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                <figure className="w-full relative">
                  <img
                    className="w-50percent"
                    width="580"
                    height="1156"
                    src="./assets/images/demo/start-hub-6/video-box/phone.png"
                    alt="phone"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-xl-6"
            data-custom-animations="true"
            data-ca-options='{"animationTarget": "figure, h2, p, .btn, .animation-element", "duration" : 1000, "ease": "expo.out", "initValues": {"x": "70px", "opacity" : 0}, "animations": {"x": "0px", "opacity" : 1}}'
          >
            <div className="flex flex-col p-10">
              <div className="lqd-imggrp-single block relative mb-15">
                <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                  <figure className="w-full relative">
                    <img
                      width="80"
                      height="9"
                      src="./assets/images/demo/start-hub-6/shape/divider.svg"
                      alt="shape"
                    />
                  </figure>
                </div>
              </div>
              <div className="ld-fancy-heading relative">
                <h2 className="ld-fh-element inline-block relative m-0">
                  Introduction to
                </h2>
              </div>
              <div className="ld-fancy-heading relative">
                <h2
                  className="ld-fh-element inline-block relative ld-gradient-heading mb-0/5em -mt-0/2em bg-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #8D65E9 0%, #6BCD94 100%)",
                  }}
                >
                  ESG Reporting
                </h2>
              </div>
              <div className="ld-fancy-heading relative">
                <p className="ld-fh-element inline-block relative mb-1em text-16 leading-22 font-medium">
                  Sustainability is the goal, and ESG tells us how well they're
                  achieving it.
                  <span className="text-badge">
                    <span> </span>
                    ESG reporting means companies share information about their
                    work on environmental, social, and good management
                    practices.
                  </span>
                </p>
              </div>
              <div className="ld-fancy-heading relative">
                <p className="ld-fh-element inline-block relative mb-1em text-16 leading-22 font-medium">
                  This helps investors understand what the company is doing in
                  these areas and encourages other companies to do the same.
                </p>
              </div>
              <div className="ld-fancy-heading relative">
                <p className="ld-fh-element inline-block relative mb-3em text-16 leading-22 font-medium">
                  {/* ESG is a way for companies to show how they're doing good for
                  society and the environment, helping investors decide.
                  Sustainability is the company's plan to be eco-friendly and
                  responsible from the inside. Basically, sustainability is the
                  goal, and ESG tells us how well they're achieving it. */}
                  {/* We believe that designing
                  <span className="text-green-500">
                    products and services in close partnership
                  </span>
                  with our clients is the only way to have a real impact */}
                </p>
              </div>
              <div className="relative flex flex-wrap items-center justify-start p-10">
                <div
                  className="module-video w-175 relative flex flex-col items-center justify-center flex-shrink-0 bg-center bg-cover rounded-12 shadow-xxl p-10 animation-element"
                  style={{
                    backgroundImage:
                      "url(./assets/images/demo/start-hub-6/video-box/bg-5.jpg)",
                  }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=OT3gsCbCKdI"
                    className="btn btn-naked fresco btn-icon-right btn-icon-circle btn-icon-custom-size btn-icon-solid btn-icon-ripple font-medium"
                  >
                    <span className="btn-icon w-60 h-60 text-black bg-white">
                      <i
                        aria-hidden="true"
                        className="lqd-icn-ess icon-ion-ios-play"
                      ></i>
                    </span>
                  </a>
                </div>
                <div className="flex flex-col pl-30 sm:w-full sm:p-0 animation-element">
                  <div className="ld-fancy-heading relative">
                    <h6 className="ld-fh-element inline-block relative mb-0/65em text-18 text-primary">
                      See how it works
                    </h6>
                  </div>
                  <div className="ld-fancy-heading relative">
                    {/* <p className="ld-fh-element inline-block relative mb-0/5em text-14 leading-16 w-210 sm:w-full">
                      Adjust your design through a wide range of theme options
                      in
                      <span className="text-badge">
                        see the changes instantly.
                      </span>
                    </p> */}
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=OT3gsCbCKdI"
                  className="block lqd-overlay flex z-3 fresco"
                >
                  <span className="lqd-extra-cursor fixed inline-flex items-center justify-center pointer-events-none"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGIntro;
