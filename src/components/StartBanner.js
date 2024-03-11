import React from "react";

const StartBanner = () => {
  return (
    <section className="lqd-section banner py-10 lg:py-0" id="banner">
      <div className="container">
        <div className="row items-center">
          <div
            className="w-45percent flex flex-wrap flex-auto items-center sm:w-full mt-10percent"
            data-custom-animations="false"
            data-ca-options='{"animationTarget": "h1, h2, p, .btn, .lqd-split-lines .lqd-lines .split-inner", "duration" : 1000, "delay" : 75, "ease": "expo.out", "initValues": {"y": "100px", "opacity" : 0}, "animations": {"y": "0px", "opacity" : 1}}'
          >
            {/* <div className="ld-fancy-heading relative w-full">
              <h1 className="ld-fh-element inline-block relative mb-0 text-74">
                FLAI
              </h1>
            </div> */}
            <div className="ld-fancy-heading relative w-full">
              <h2
                className="ld-fh-element inline-block ld-gradient-heading relative mb-0/2em text-74 bg-transparent module-gradient"
                style={{
                  backgroundImage:
                    "linear-gradient(50deg, #8D65E9 0%, #6BCD94 100%)",
                }}
              >
                Sustainability Reporting with AI
              </h2>
            </div>
            <div className="ld-fancy-heading relative w-full pr-80 sm:pr-0">
              <p
                className="ld-fh-element inline-block relative lqd-split-lines mb-1/35em text-20 font-medium leading-1/25em"
                data-split-text="true"
                data-split-options='{"type": "lines"}'
              >
                Intelligent Solutions for Airline Sustainability Reporting
              </p>
            </div>
            <div className="w-85percent flex flex-wrap lg:w-full">
              <div className="module-btn lg:w-full lg:mr-0">
                <a
                  href="#help-center"
                  className="btn btn-solid btn-hover-txt-switch btn-hover-txt-switch-y btn-sm btn-icon-right font-medium mr-30 text-title bg-white rounded-5em"
                  data-localscroll="true"
                >
                  <span
                    className="btn-txt"
                    data-text="Discover How"
                    data-split-text="true"
                    data-split-options='{"type":  "chars, words"}'
                  >
                    Discover How
                  </span>
                  <span className="btn-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                    </svg>
                  </span>
                </a>
              </div>
              <a
                href="#contact-modal"
                className="btn btn-naked btn-icon-right btn-hover-swp text-14 font-medium text-title m-0 font-medium text-slate-500"
                data-lity="#contact-modal"
              >
                <span className="btn-txt" data-text="Sign up — It's Free">
                  Sign up — It's Free
                </span>
                <span className="btn-icon">
                  <i
                    aria-hidden="true"
                    className="lqd-icn-ess icon-ion-ios-arrow-forward"
                  ></i>
                </span>
                <span className="btn-icon mr-10">
                  <i
                    aria-hidden="true"
                    className="lqd-icn-ess icon-ion-ios-arrow-forward"
                  ></i>
                </span>
              </a>
            </div>
            {/* <div className="ld-fancy-heading relative w-full">
              <p className="ld-fh-element inline-block relative mb-0 mt-2em text-12 text-black-50">
                Try for freecredit card required.
              </p>
            </div> */}
          </div>
          <div
            className="w-55percent flex flex-wrap flex-auto items-center sm:w-full relative"
            data-custom-animations="false"
            data-ca-options='{"animationTarget": "figure", "duration" : 1000, "startDelay" : 500, "delay" : 70, "ease": "expo.out", "initValues": {"x": "-20px", "y": "100px", "opacity" : 0}, "animations": {"x": "0px", "y": "0px", "opacity" : 1}}'
          >
            <div className="max-w-full absolute module-shape-1 z-0 -top-5percent">
              <div className="lqd-imggrp-single block relative">
                <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                  <figure className="w-full relative">
                    <img
                      width="105"
                      height="214"
                      src="./assets/images/demo/start-hub-6/shape/Rectangle-Copy.svg"
                      alt="banner shape"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="max-w-full absolute module-shape-2 z-1 -bottom-30percent">
              <div className="lqd-imggrp-single block relative">
                <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                  <figure className="w-full relative">
                    <img
                      width="93"
                      height="215"
                      src="./assets/images/demo/start-hub-6/shape/drop.svg"
                      alt="banner shape"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="max-w-full absolute module-shape-3 top-10percent">
              <div className="lqd-imggrp-single block relative">
                <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                  <figure className="w-full relative">
                    <img
                      width="37"
                      height="37"
                      src="./assets/images/demo/start-hub-6/shape/NEW.svg"
                      alt="banner shape"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="max-w-full absolute module-shape-4 w-150 -top-5percent">
              <div className="lqd-imggrp-single block relative">
                <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                  <figure className="w-full relative">
                    <img
                      width="305"
                      height="280"
                      src="./assets/images/demo/start-hub-6/shape/Thunderbolt.png"
                      alt="banner shape"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="relative z-2 module-img">
              <div
                className="lqd-imggrp-single block relative max-w-full"
                data-float="ease-in"
              >
                <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                  <figure className="w-full relative">
                    <img
                      width="1660"
                      height="1364"
                      src="./assets/images/demo/start-hub-6/banner/Mockups-1536x1262.png"
                      alt="banner"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartBanner;
