import React from "react";

const HowItWorks = () => {
  return (
    <>
      <section
        className="lqd-section tab-items py-70 bg-top-center bg-no-repeat"
        style={{
          backgroundImage: "url(./assets/images/demo/start-hub-6/bg/dots.jpg)",
        }}
        data-custom-animations="true"
        data-ca-options='{"animationTarget": ".lqd-split-lines .lqd-lines .split-inner, figure, .lqd-tabs", "duration" : 1000, "delay" : 65, "ease": "expo.out", "initValues": {"y": "50px", "opacity" : 0}, "animations": {"y": "0px", "opacity" : 1}}'
      >
        <div className="container">
          <div className="row">
            <div className="col col-12 col-xl-8 relative">
              <div
                className="module-shape absolute z-0 top-15percent"
                data-parallax="true"
                data-parallax-options='{"start": "top bottom", "end": "bottom+=0px top"}'
                data-parallax-from='{"scaleX" : 1.2, "scaleY" : 1.2}'
                data-parallax-to='{"scaleX" : 1, "scaleY" : 1}'
              >
                <figure
                  id="lqd-draw-shape-4fc63a1c"
                  className="lqd-draw-shape"
                  data-lqd-draw-shape="true"
                  data-draw-shape-options='{"drawSVG": "0% 0%", "stagger" : 0, "start": "top bottom", "end": "center center", "scrub" : 1, "ease": "power2.in"}'
                >
                  <svg
                    className="w-full h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="669.299"
                    height="374.384"
                    viewBox="0 0 669.299 374.384"
                  >
                    <path
                      d="M256.5,251.117C296.56,225.99,453.511,74.865,496.846,100.356s-36.78,282.222,19.665,303.707,265.835-145.663,319-174.8"
                      transform="translate(-211.011 -64.48)"
                      fill="none"
                      stroke="#6bcd94"
                      stroke-linecap="round"
                      stroke-width="66"
                    ></path>
                  </svg>
                </figure>
              </div>
            </div>
            <div className="col col-12 col-xl-4">
              <div className="ld-fancy-heading relative mask-text">
                <h2
                  className="ld-fh-element inline-block relative lqd-split-lines mb-0/2em"
                  data-split-text="true"
                  data-split-options='{"type": "lines"}'
                >
                  How It Works
                </h2>
              </div>
              <div className="lqd-imggrp-single block relative mb-15">
                <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                  <figure className="w-full relative">
                    <img
                      width="80"
                      height="9"
                      src="./assets/images/demo/start-hub-6/shape/divider-2.svg"
                      alt="shape"
                    />
                  </figure>
                </div>
              </div>
              <div className="ld-fancy-heading relative mask-text">
                {/* <p
                  className="ld-fh-element inline-block relative lqd-split-lines mb-1/5em text-17 leading-1/3em"
                  data-split-text="true"
                  data-split-options='{"type": "lines"}'
                >
                  Adjust your design through a wide range of theme options in
                  the Customizer.
                </p> */}
              </div>
            </div>
            <div className="col col-12 p-0">
              <div
                className="lqd-tabs lqd-tabs-style-6 lqd-tabs-nav-iconbox lqd-tabs-nav-icon-inline flex flex-wrap lqd-tabs-nav-items-not-expanded flex-row-reverse 497627e5 lqd-nav-underline-"
                data-tabs-options='{"trigger": "click"}'
              >
                <nav className="lqd-tabs-nav-wrap">
                  <ul
                    className="reset-ul lqd-tabs-nav flex flex-col lqd-css-sticky relative link-medium link-17"
                    role="tablist"
                  >
                    <li data-controls="lqd-tab-item-1" role="presentation">
                      <a
                        className="block pt-1em pb-1em rounded-4 active"
                        href="#lqd-tab-item-1"
                        aria-expanded="true"
                        aria-controls="lqd-tab-item-1"
                        role="tab"
                        data-bs-toggle="tab"
                      >
                        <span className="lqd-tabs-nav-icon-icon inline-flex items-center justify-center mr-1em rounded-full">
                          <i
                            aria-hidden="true"
                            className="lqd-icn-ess icon-num-1"
                          ></i>
                        </span>
                        <span className="lqd-tabs-nav-txt">
                          Data Collection
                        </span>
                      </a>
                    </li>
                    <li data-controls="lqd-tab-item-2" role="presentation">
                      <a
                        className="block pt-1em pb-1em rounded-4"
                        href="#lqd-tab-item-2"
                        aria-expanded="false"
                        aria-controls="lqd-tab-item-2"
                        role="tab"
                        data-bs-toggle="tab"
                      >
                        <span className="lqd-tabs-nav-icon-icon inline-flex items-center justify-center mr-1em rounded-full">
                          <i
                            aria-hidden="true"
                            className="lqd-icn-ess icon-num-2"
                          ></i>
                        </span>
                        <span className="lqd-tabs-nav-txt">Data Analysis</span>
                      </a>
                    </li>
                    <li data-controls="lqd-tab-item-3" role="presentation">
                      <a
                        className="block pt-1em pb-1em rounded-4"
                        href="#lqd-tab-item-3"
                        aria-expanded="false"
                        aria-controls="lqd-tab-item-3"
                        role="tab"
                        data-bs-toggle="tab"
                      >
                        <span className="lqd-tabs-nav-icon-icon inline-flex items-center justify-center mr-1em rounded-full">
                          <i
                            aria-hidden="true"
                            className="lqd-icn-ess icon-num-3"
                          ></i>
                        </span>
                        <span className="lqd-tabs-nav-txt">
                          Report Generation
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="lqd-tabs-content pr-2em relative">
                  <div
                    id="lqd-tab-item-1"
                    role="tabpanel"
                    className="lqd-tabs-pane fade active show"
                  >
                    <div className="module-tab-inner -mt-30percent -mr-10percent -mb-20percent ml-0 p-10">
                      <div className="lqd-imggrp-single block relative">
                        <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                          <figure className="w-full relative">
                            <img
                              width="1514"
                              height="1218"
                              src="./assets/images/demo/start-hub-6/tab-items/img-6.png"
                              alt="tab items"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="lqd-tab-item-2"
                    role="tabpanel"
                    className="lqd-tabs-pane fade"
                  >
                    <div className="module-tab-inner -mt-30percent -mr-10percent -mb-20percent ml-0 p-10">
                      <div className="lqd-imggrp-single block relative">
                        <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                          <figure className="w-full relative">
                            <img
                              width="1514"
                              height="1218"
                              src="./assets/images/demo/start-hub-6/tab-items/img-6.png"
                              alt="tab items"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="lqd-tab-item-3"
                    role="tabpanel"
                    className="lqd-tabs-pane fade"
                  >
                    <div className="module-tab-inner -mt-30percent -mr-10percent -mb-20percent ml-0 p-10">
                      <div className="lqd-imggrp-single block relative">
                        <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                          <figure className="w-full relative">
                            <img
                              width="1514"
                              height="1218"
                              src="./assets/images/demo/start-hub-6/tab-items/img-6.png"
                              alt="tab items"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="lqd-section text-box py-10 sm:py-0"
        data-custom-animations="true"
        data-ca-options='{"animationTarget": ".animation-element", "duration" : 1000, "delay" : 75, "ease": "expo.out", "initValues": {"scaleX" : 1.3, "scaleY" : 1.3, "opacity" : 0}, "animations": {"scaleX" : 1, "scaleY" : 1, "opacity" : 1}}'
      >
        <div className="container">
          <div className="row">
            <div className="col col-6 col-md-3 relative text-center animation-element">
              <div className="lqd-iconbox-scale w-200 md:w-full mb-30 mx-auto">
                <div
                  className="iconbox flex flex-grow-1 relative flex-col iconbox-default iconbox-circle iconbox-contents-show-onhover"
                  data-slideelement-onhover="true"
                  data-slideelement-options='{ "visibleElement":  ".iconbox-icon-wrap, p, p" ,  "hiddenElement":  ".btn" ,  "alignMid":  true, "triggerElement":  ".lqd-iconbox-scale" }'
                >
                  <div className="iconbox-icon-wrap">
                    <div className="iconbox-icon-container inline-flex relative z-1 border-radius-circle mb-15 text-18 w-50 h-50 text-blue-500 bg-white shadow-sm items-center justify-center rounded-full">
                      <i
                        aria-hidden="true"
                        className="lqd-icn-ess icon-num-1"
                      ></i>
                    </div>
                  </div>
                  <p className="lqd-iconbox-heading text-14 m-0 leading-1/3em">
                    Bring your ideas to life with an intuitive visual editor.
                  </p>
                  <a
                    href="/#"
                    className="btn btn-naked btn-icon-right btn-hover-swp text-14 font-medium text-title"
                  >
                    <span className="btn-txt" data-text="Learn more">
                      Learn more
                    </span>
                    <span className="btn-icon">
                      <i className="lqd-icn-ess icon-ion-ios-arrow-forward"></i>
                    </span>
                    <span className="btn-icon mr-10">
                      <i className="lqd-icn-ess icon-ion-ios-arrow-forward"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="module-shape absolute z-1 top-20">
                <div className="lqd-imggrp-single block relative">
                  <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                    <figure className="w-full relative">
                      <img
                        width="87"
                        height="11"
                        src="./assets/images/demo/start-hub-6/shape/Path-5.svg"
                        alt="path"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-6 col-md-3 relative text-center animation-element">
              <div className="lqd-iconbox-scale w-200 md:w-full mb-30 mx-auto">
                <div
                  className="iconbox flex flex-grow-1 relative flex-col iconbox-default iconbox-circle iconbox-contents-show-onhover"
                  data-slideelement-onhover="true"
                  data-slideelement-options='{ "visibleElement":  ".iconbox-icon-wrap, p, p" ,  "hiddenElement":  ".btn" ,  "alignMid":  true, "triggerElement":  ".lqd-iconbox-scale" }'
                >
                  <div className="iconbox-icon-wrap">
                    <div className="iconbox-icon-container inline-flex relative z-1 border-radius-circle mb-15 text-18 w-50 h-50 text-blue-500 bg-white shadow-sm items-center justify-center rounded-full">
                      <i
                        aria-hidden="true"
                        className="lqd-icn-ess icon-num-2"
                      ></i>
                    </div>
                  </div>
                  <p className="lqd-iconbox-heading text-14 m-0 leading-1/3em">
                    Create, edit, and customize your website visually
                  </p>
                  <a
                    href="/#"
                    className="btn btn-naked btn-icon-right btn-hover-swp text-14 font-medium text-title"
                  >
                    <span className="btn-txt" data-text="Learn more">
                      Learn more
                    </span>
                    <span className="btn-icon">
                      <i className="lqd-icn-ess icon-ion-ios-arrow-forward"></i>
                    </span>
                    <span className="btn-icon mr-10">
                      <i className="lqd-icn-ess icon-ion-ios-arrow-forward"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="module-shape absolute z-1 top-20 sm:hidden">
                <div className="lqd-imggrp-single block relative">
                  <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                    <figure className="w-full relative">
                      <img
                        width="94"
                        height="11"
                        src="./assets/images/demo/start-hub-6/shape/Path-1.svg"
                        alt="path"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-6 col-md-3 relative text-center animation-element">
              <div className="lqd-iconbox-scale w-200 md:w-full mb-30 mx-auto">
                <div
                  className="iconbox flex flex-grow-1 relative flex-col iconbox-default iconbox-circle iconbox-contents-show-onhover"
                  data-slideelement-onhover="true"
                  data-slideelement-options='{ "visibleElement":  ".iconbox-icon-wrap, p, p" ,  "hiddenElement":  ".btn" ,  "alignMid":  true, "triggerElement":  ".lqd-iconbox-scale" }'
                >
                  <div className="iconbox-icon-wrap ">
                    <div className="iconbox-icon-container inline-flex relative z-1 border-radius-circle mb-15 text-18 w-50 h-50 text-blue-500 bg-white shadow-sm items-center justify-center rounded-full">
                      <i
                        aria-hidden="true"
                        className="lqd-icn-ess icon-num-3"
                      ></i>
                    </div>
                  </div>
                  <p className="lqd-iconbox-heading text-14 m-0 leading-1/3em">
                    See the changes instantly.more backend stuff.
                  </p>
                  <a
                    href="/#"
                    className="btn btn-naked btn-icon-right btn-hover-swp text-14 font-medium text-title"
                  >
                    <span className="btn-txt" data-text="Learn more">
                      Learn more
                    </span>
                    <span className="btn-icon">
                      <i className="lqd-icn-ess icon-ion-ios-arrow-forward"></i>
                    </span>
                    <span className="btn-icon mr-10">
                      <i className="lqd-icn-ess icon-ion-ios-arrow-forward"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="module-shape absolute z-1 top-20">
                <div className="lqd-imggrp-single block relative">
                  <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                    <figure className="w-full relative">
                      <img
                        width="87"
                        height="11"
                        src="./assets/images/demo/start-hub-6/shape/Path-5.svg"
                        alt="path"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-6 col-md-3 relative text-center animation-element">
              <div className="lqd-iconbox-scale w-200 md:w-full mb-30 mx-auto">
                <div
                  className="iconbox flex flex-grow-1 relative flex-col iconbox-default iconbox-circle iconbox-contents-show-onhover"
                  data-slideelement-onhover="true"
                  data-slideelement-options='{ "visibleElement":  ".iconbox-icon-wrap, p, p" ,  "hiddenElement":  ".btn" ,  "alignMid":  true, "triggerElement":  ".lqd-iconbox-scale" }'
                >
                  <div className="iconbox-icon-wrap">
                    <div className="iconbox-icon-container inline-flex relative z-1 border-radius-circle mb-15 text-18 w-50 h-50 text-blue-500 bg-white shadow-sm items-center justify-center rounded-full">
                      <i
                        aria-hidden="true"
                        className="lqd-icn-ess icon-num-4"
                      ></i>
                    </div>
                  </div>
                  <p className="lqd-iconbox-heading text-14 m-0 leading-1/3em">
                    Launch your website in a few minutes.coding required!
                  </p>
                  <a
                    href="/#"
                    className="btn btn-naked btn-icon-right btn-hover-swp text-14 font-medium text-title"
                  >
                    <span className="btn-txt" data-text="Learn more">
                      Learn more
                    </span>
                    <span className="btn-icon">
                      <i className="lqd-icn-ess icon-ion-ios-arrow-forward"></i>
                    </span>
                    <span className="btn-icon mr-10">
                      <i className="lqd-icn-ess icon-ion-ios-arrow-forward"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
