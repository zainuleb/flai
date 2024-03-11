import React from "react";

const ContactForm = () => {
  return (
    <section
      className="lqd-section contact-form bg-center bg-cover pt-70 pb-100"
      id="contact-form"
      style={{
        backgroundImage:
          "url(./assets/images/demo/start-hub-8/contact-form-bg.jpg)",
      }}
    >
      <div className="container">
        <div className="row items-end">
          <div
            className="w-45percent sm:w-full"
            data-custom-animations="true"
            data-ca-options='{"animationTarget": ".animation-element, figure, .lqd-split-lines .lqd-lines .split-inner", "duration" : 1000 , "delay" : 100 , "ease": "expo.out", "initValues": {"y": "95px", "opacity" : 0} , "animations": {"y": "0px", "opacity" : 1}}'
          >
            <div className="relative w-full flex flex-col justify-end pb-40">
              <div className="absolute -top-145percent ltr-left-0 module-shape-1 animation-element">
                <div id="lqd-lottie-form-contact" className="lqd-lottie"></div>
              </div>
              <div className="absolute -top-55percent module-shape-2">
                <div className="lqd-imggrp-single block relative">
                  <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                    <figure className="w-full relative">
                      <img
                        width="57"
                        height="54"
                        src="./assets/images/demo/start-hub-8/shape-Path-141907.svg"
                        alt="contact form shape"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="absolute -top-30percent module-shape-3">
                <div className="lqd-imggrp-single block relative">
                  <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                    <figure className="w-full relative">
                      <img
                        width="49"
                        height="14"
                        src="./assets/images/demo/start-hub-8/shape-Path-141908.svg"
                        alt="contact form shape"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-85 module-shape-4">
                <div className="lqd-imggrp-single block relative">
                  <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                    <figure className="w-full relative">
                      <img
                        width="21"
                        height="68"
                        src="./assets/images/demo/start-hub-8/shape-Path-141875.svg"
                        alt="contact form shape"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="ld-fancy-heading relative mask-text">
                <h2
                  className="ld-fh-element inline-block relative lqd-split-lines mb-0/5em text-70"
                  data-split-text="true"
                  data-split-options='{"type": "lines"}'
                >
                  Have a project in mind?👋
                </h2>
              </div>
              <div className="ld-fancy-heading relative mask-text w-410 max-w-full">
                <p
                  className="ld-fh-element inline-block relative lqd-split-lines mb-0/5em text-16 leading-20"
                  data-split-text="true"
                  data-split-options='{"type": "lines"}'
                >
                  Looking for collaboration? Send an email to
                  <a href="/#" className="text-dark">
                    info@liquid-themes.com
                  </a>
                  to for vailable for enquires and collaborations,
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-50percent lg:w-55percent sm:w-full"
            data-custom-animations="true"
            data-ca-options='{"animationTarget": "h2, .animation-element", "duration" : 1000 , "startDelay" : 500 , "delay" : 100 , "ease": "expo.out", "initValues": {"y": "60px", "scaleX" : 0.8 , "scaleY" : 0.8 , "opacity" : 0} , "animations": {"y": "0px", "scaleX" : 1 , "scaleY" : 1 , "opacity" : 1}}'
          >
            <div className="ld-fancy-heading relative">
              <h2 className="ld-fh-element relative mb-1em text-32">
                Send a message
              </h2>
            </div>
            <div className="lqd-contact-form lqd-contact-form-inputs-underlined lqd-contact-form-button-block lqd-contact-form-button-circle lqd-contact-form-inputs-border-thick bg-white pt-45 pb-50 px-75 rounded-12 animation-element">
              <div role="form">
                <div className="screen-reader-response animation-element">
                  <p role="status" aria-live="polite" aria-atomic="true"></p>
                </div>
                <form
                  action="./assets/php/mailer.php"
                  method="post"
                  className="lqd-cf-form"
                  novalidate="novalidate"
                  data-status="init"
                >
                  <div className="row -mr-15 -ml-15 flex-wrap">
                    <div className="col col-12 col-md-6 px-15">
                      <p>
                        <span className="lqd-form-control-wrap text">
                          <input
                            className="border-black-20 text-black text-13"
                            type="text"
                            name="name"
                            value=""
                            size="40"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="What's your name?"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="col col-12 col-md-6 px-15">
                      <p>
                        <span className="lqd-form-control-wrap email">
                          <input
                            className="border-black-20 text-black text-13"
                            type="email"
                            name="email"
                            value=""
                            size="40"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Email Address"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="col col-12 col-md-6 px-15">
                      <p>
                        <span className="lqd-form-control-wrap tel">
                          <input
                            className="border-black-20 text-black text-13"
                            type="text"
                            name="topic"
                            value=""
                            size="40"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Select a Discussion Topic"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="col col-12 col-md-6 px-15">
                      <p>
                        <span className="lqd-form-control-wrap text">
                          <input
                            className="border-black-20 text-black text-13"
                            type="text"
                            name="budget"
                            value=""
                            size="40"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="What's your budget?"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="col col-12 px-15">
                      <p>
                        <span className="lqd-form-control-wrap textarea">
                          <textarea
                            className="border-black-20 text-black text-13"
                            name="message"
                            cols="10"
                            rows="6"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="A brief description about your project/request/consultation"
                          ></textarea>
                        </span>
                      </p>
                    </div>
                    <div className="col col-12 px-15">
                      <span className="lqd-form-control-wrap acceptance">
                        <span className="lqd-cf-form-control lqd-cf-acceptance">
                          <span className="lqd-cf-list-item">
                            <label>
                              <input
                                type="checkbox"
                                name="acceptance"
                                value="1"
                                aria-invalid="false"
                              />
                              <span className="lqd-cf-list-item-label">
                                I am bound by the terms of the Service I accept
                                Privacy Policy
                              </span>
                            </label>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="col col-md-12 px-15">
                      <input
                        type="submit"
                        value="— send message"
                        className="lqd-cf-form-control lqd-cf-submit border-0 bg-black text-14 text-white"
                      />
                    </div>
                  </div>
                </form>
                <div className="lqd-cf-response-output"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
