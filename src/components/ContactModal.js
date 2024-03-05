import React from "react";

const ContactModal = () => {
  return (
    <div
      id="contact-modal"
      className="lity-modal lqd-modal lity-hide"
      data-modal-type="fullscreen"
    >
      <div className="lqd-modal-inner">
        <div className="lqd-modal-head"></div>
        <section
          className="lqd-section lqd-modal-content link-black bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url(./assets/images/common/modal-bg.jpeg)",
          }}
        >
          <div className="container min-h-100vh flex items-center flex-wrap">
            <div className="w-55percent flex flex-col sm:w-full">
              <div className="flex flex-col items-start justify-center py-10 pr-100 pl-10">
                <div className="ld-fancy-heading">
                  <h2 className="ld-fh-element text-122 mb-0/5em leading-0/8em font-medium text-black">
                    Send a <span>message.</span>
                  </h2>
                </div>
                <div className="ld-fancy-heading">
                  <p className="ld-fh-element mb-0/5em text-18">
                    We're here to answer any question you may have.
                  </p>
                </div>
                <div className="spacer w-full h-140"></div>
                <div className="w-full flex flex-wrap">
                  <div className="w-50percent flex flex-col">
                    <div className="ld-fancy-heading relative mb-10">
                      <h6 className="ld-fh-element inline-block relative text-13 font-bold mb-0/5em tracking-0/1em text-black">
                        careers
                      </h6>
                    </div>
                    <div className="ld-fancy-heading relative mb-10">
                      <p className="ld-fh-element inline-block relative text-16 leading-1/2em mb-0/5em">
                        Would you like to join our growing team?
                      </p>
                    </div>
                    <div className="ld-fancy-heading relative">
                      <p className="ld-fh-element inline-block relative text-16 font-bold leading-1/2em text-black mb-0/5em">
                        careers@hub.com{" "}
                      </p>
                    </div>
                  </div>
                  <div className="w-50percent flex flex-col pl-15">
                    <div className="ld-fancy-heading relative mb-10">
                      <h6 className="ld-fh-element inline-block relative text-13 font-bold mb-0/5em tracking-0/1em text-black">
                        Feedbacks
                      </h6>
                    </div>
                    <div className="ld-fancy-heading relative mb-10">
                      <p className="ld-fh-element inline-block relative text-16 leading-1/2em mb-0/5em">
                        Have a project in mind? Send a message.
                      </p>
                    </div>
                    <div className="ld-fancy-heading relative">
                      <p className="ld-fh-element inline-block relative text-16 font-bold leading-1/2em text-black mb-0/5em">
                        info@hub.co{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-45percent flex flex-col sm:w-full">
              <div className="lqd-contact-form lqd-contact-form-inputs-underlined lqd-contact-form-button-lg lqd-contact-form-button-block p-10">
                <div role="form">
                  <div className="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                  </div>
                  <form
                    action="./assets/php/mailer.php"
                    method="post"
                    className="lqd-cf-form"
                    novalidate="novalidate"
                    data-status="init"
                  >
                    <div className="flex flex-wrap -mr-15 -ml-15">
                      <div className="w-50percent px-15 md:w-full">
                        <span
                          className="lqd-form-control-wrap"
                          data-name="your-name"
                        >
                          <input
                            type="text"
                            name="your-name"
                            value=""
                            size="40"
                            className="lqd-cf-form-control lqd-cf-text border-lightgray"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Full name"
                          />
                        </span>
                      </div>
                      <div className=" w-50percent px-15 md:w-full">
                        <span
                          className="lqd-form-control-wrap"
                          data-name="your-email"
                        >
                          <input
                            type="email"
                            name="your-email"
                            value=""
                            size="40"
                            className="lqd-cf-form-control lqd-cf-text lqd-cf-email lqd-cf-validates-as-email border-lightgray"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Email Address"
                          />
                        </span>
                      </div>
                      <div className=" w-50percent px-15 md:w-full">
                        <span
                          className="lqd-form-control-wrap border-bottom border-black-20 text-black"
                          data-name="your-subject"
                        >
                          <select
                            name="your-subject"
                            className="wpcf7-form-control wpcf7-select"
                            aria-required="true"
                            aria-invalid="false"
                          >
                            <option value="Subject">Subject</option>
                            <option value="Subject 1">Subject 1</option>
                            <option value="Subject 2">Subject 2</option>
                            <option value="Subject 3">Subject 3</option>
                          </select>
                        </span>
                      </div>
                      <div className="w-50percent px-15 md:w-full">
                        <span
                          className="lqd-form-control-wrap border-bottom border-black-20 text-black"
                          data-name="your-subject2"
                        >
                          <select
                            name="your-subject2"
                            className="wpcf7-form-control wpcf7-select"
                            aria-required="true"
                            aria-invalid="false"
                          >
                            <option value="Your budget">Your budget</option>
                            <option value="&lt; 1000">&lt; 1000</option>
                            <option value="&lt; 2000">&lt; 2000</option>
                            <option value="&lt; 3000">&lt; 3000</option>
                          </select>
                        </span>
                      </div>
                      <div className="w-full px-15">
                        <span
                          className="lqd-form-control-wrap"
                          data-name="your-message"
                        >
                          <textarea
                            name="your-message"
                            cols="10"
                            rows="4"
                            className="lqd-cf-form-control lqd-cf-textarea border-black-20"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Your message"
                          ></textarea>
                        </span>
                      </div>
                      <div className="w-full px-15">
                        <span
                          className="lqd-form-control-wrap"
                          data-name="your-acceptance"
                        >
                          <span className="lqd-cf-form-control lqd-cf-acceptance">
                            <span className="lqd-cf-list-item">
                              <label>
                                <input
                                  type="checkbox"
                                  name="your-acceptance"
                                  value="1"
                                  aria-invalid="false"
                                />
                                <span className=" lqd-cf-list-item-label">
                                  I am bound by the terms of the Service I
                                  accept Privacy Policy
                                </span>
                              </label>
                            </span>
                          </span>
                        </span>
                      </div>
                      <div className="w-full px-15">
                        <input
                          type="submit"
                          value="Send message"
                          className="text-16 font-bold lqd-cf-form-control lqd-cf-submit text-white bg-primary border-none"
                        />
                        <span className=" lqd-cf-spinner"></span>
                      </div>
                    </div>
                    <div
                      className="lqd-cf-response-output"
                      aria-hidden="true"
                    ></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="lqd-modal-foot"></div>
      </div>
    </div>
  );
};

export default ContactModal;
