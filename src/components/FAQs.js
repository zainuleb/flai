import React from "react";

const FAQs = () => {
  return (
    <section className="lqd-section has-accordion py-10" id="has-accordion">
      <div className="container">
        <div className="row items-center">
          <div className="col col-12 col-md-6">
            <div
              className="accordion accordion-title-underlined accordion-sm"
              id="accordion-questions"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="accordion-item panel">
                <div
                  className="accordion-heading"
                  role="tab"
                  id="heading-item-1"
                >
                  <h4 className="accordion-title">
                    <a
                      className="collapsed text-17"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-parent="#accordion-questions"
                      href="#collapse-item-1"
                      aria-expanded="false"
                      aria-controls="collapse-item-1"
                    >
                      <span className="accordion-title-txt">
                        Google mobile can monetize your app
                      </span>
                      <span className="accordion-expander text-16">
                        <i className="lqd-icn-ess icon-ion-ios-add"></i>
                        <i className="lqd-icn-ess icon-ion-ios-remove"></i>
                      </span>
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse-item-1"
                  className="accordion-collapse collapse "
                  data-bs-parent="#accordion-questions"
                  role="tabpanel"
                  aria-labelledby="heading-item-1"
                >
                  <div className="accordion-content">
                    Hub IT allows your business and technology manipulate big
                    data in the digital world. Import a complete or{" "}
                    <u>mix and match</u> 300 section blocks.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item panel">
                <div
                  className="accordion-heading"
                  role="tab"
                  id="heading-item-2"
                >
                  <h4 className="accordion-title">
                    <a
                      className="collapsed text-17"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-parent="#accordion-questions"
                      href="#collapse-item-2"
                      aria-expanded="false"
                      aria-controls="collapse-item-2"
                    >
                      <span className="accordion-title-txt">
                        Performance shared hosting in your account{" "}
                      </span>
                      <span className="accordion-expander text-16">
                        <i className="lqd-icn-ess icon-ion-ios-add"></i>
                        <i className="lqd-icn-ess icon-ion-ios-remove"></i>
                      </span>
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse-item-2"
                  className="accordion-collapse collapse "
                  data-bs-parent="#accordion-questions"
                  role="tabpanel"
                  aria-labelledby="heading-item-2"
                >
                  <div className="accordion-content">
                    Hub IT allows your business and technology manipulate big
                    data in the digital world. Import a complete or{" "}
                    <u>mix and match</u> 300 section blocks.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item panel">
                <div
                  className="accordion-heading"
                  role="tab"
                  id="heading-item-3"
                >
                  <h4 className="accordion-title">
                    <a
                      className="collapsed text-17"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-parent="#accordion-questions"
                      href="#collapse-item-3"
                      aria-expanded="false"
                      aria-controls="collapse-item-3"
                    >
                      <span className="accordion-title-txt">
                        Track the location of your cars
                      </span>
                      <span className="accordion-expander text-16">
                        <i className="lqd-icn-ess icon-ion-ios-add"></i>
                        <i className="lqd-icn-ess icon-ion-ios-remove"></i>
                      </span>
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse-item-3"
                  className="accordion-collapse collapse "
                  data-bs-parent="#accordion-questions"
                  role="tabpanel"
                  aria-labelledby="heading-item-3"
                >
                  <div className="accordion-content">
                    Hub IT allows your business and technology manipulate big
                    data in the digital world. Import a complete or{" "}
                    <u>mix and match</u> 300 section blocks.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item panel">
                <div
                  className="accordion-heading"
                  role="tab"
                  id="heading-item-4"
                >
                  <h4 className="accordion-title">
                    <a
                      className="collapsed text-17"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-parent="#accordion-questions"
                      href="#collapse-item-4"
                      aria-expanded="false"
                      aria-controls="collapse-item-4"
                    >
                      <span className="accordion-title-txt">
                        Google mobile can monetize your app
                      </span>
                      <span className="accordion-expander text-16">
                        <i className="lqd-icn-ess icon-ion-ios-add"></i>
                        <i className="lqd-icn-ess icon-ion-ios-remove"></i>
                      </span>
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse-item-4"
                  className="accordion-collapse collapse "
                  data-bs-parent="#accordion-questions"
                  role="tabpanel"
                  aria-labelledby="heading-item-4"
                >
                  <div className="accordion-content">
                    Hub IT allows your business and technology manipulate big
                    data in the digital world. Import a complete or{" "}
                    <u>mix and match</u> 300 section blocks.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-6 sm:order-first">
            <div className="flex justify-end mx-auto sm:w-80percent sm:justify-center">
              <div className="lqd-imggrp-single flex relative w-410 max-w-full">
                <div className="lqd-imggrp-img-container inline-flex relative items-start justify-center">
                  <figure className="w-full relative">
                    <img
                      width="821"
                      height="1136"
                      src="./assets/images/demo/start-hub-6/has-accordion/iphone.png"
                      alt="has accordion"
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

export default FAQs;
