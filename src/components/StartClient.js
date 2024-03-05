import React from "react";

const StartClient = () => {
  return (
    <section
      className="lqd-section clients bg-cover pt-210 pb-200"
      style={{
        backgroundImage: "url(./assets/images/demo/start-hub-6/bg/bg-2.jpg)",
      }}
      data-custom-animations="true"
      data-ca-options='{"animationTarget": "p, .lqd-imggrp-single", "duration" : 1000, "startDelay" : 1250, "delay" : 70, "ease": "expo.out", "initValues": {"y": "50px", "scaleX" : 0.5, "scaleY" : 0.5, "opacity" : 0}, "animations": {"y": "0px", "scaleX" : 1, "scaleY" : 1, "opacity" : 1}}'
    >
      <div className="lqd-shape lqd-shape-top" data-negative="false">
        <svg
          className="left-50percent rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="lqd-shape-fill"
            d="M0,6V0h1000v100L0,6z"
            fill="#fff"
          />
        </svg>
      </div>
      <div
        className="lqd-shape lqd-shape-bottom rotate-180"
        data-negative="false"
      >
        <svg
          className="left-50percent rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="lqd-shape-fill"
            d="M0,6V0h1000v100L0,6z"
            fill="#fff"
          />
        </svg>
      </div>
      <div className="container">
        <div className="row items-center justify-center">
          <div className="col col-12 text-center p-0">
            <div className="ld-fancy-heading relative">
              <p className="ld-fh-element inline-block relative mb-1/75em text-22 text-white">
                Trusted by these amazing companies
              </p>
            </div>
          </div>
          <div className="col col-6 col-md-2 text-center p-0">
            <div className="lqd-imggrp-single block relative border-right border-white-20 module-img">
              <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                <figure className="w-full relative">
                  <img
                    width="86"
                    height="24"
                    src="./assets/images/demo/start-hub-6/clients/Mode.svg"
                    alt="clients"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="col col-6 col-md-2 text-center p-0">
            <div className="lqd-imggrp-single block relative border-right border-white-20 module-img">
              <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                <figure className="w-full relative">
                  <img
                    width="75"
                    height="27"
                    src="./assets/images/demo/start-hub-6/clients/nike.svg"
                    alt="clients"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="col col-6 col-md-2 text-center p-0">
            <div className="lqd-imggrp-single block relative border-right border-white-20 module-img">
              <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                <figure className="w-full relative">
                  <img
                    width="83"
                    height="35"
                    src="./assets/images/demo/start-hub-6/clients/Path-133531.svg"
                    alt="clients"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="col col-6 col-md-2 text-center p-0">
            <div className="lqd-imggrp-single block relative border-right border-white-20 module-img">
              <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                <figure className="w-full relative">
                  <img
                    width="46"
                    height="33"
                    src="./assets/images/demo/start-hub-6/clients/Path-46878.svg"
                    alt="clients"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="col col-6 col-md-2 text-center p-0">
            <div className="lqd-imggrp-single block relative border-right border-white-20">
              <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                <figure className="w-full relative">
                  <img
                    width="55"
                    height="55"
                    src="./assets/images/demo/start-hub-6/clients/volkswagen-1.svg"
                    alt="clients"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="col col-6 col-md-2 text-center p-0">
            <div className="lqd-imggrp-single block relative">
              <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                <figure className="w-full relative">
                  <img
                    width="79"
                    height="35"
                    src="./assets/images/demo/start-hub-6/clients/Path-141907.svg"
                    alt="clients"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartClient;
