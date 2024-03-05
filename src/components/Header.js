import React from "react";

const Header = () => {
  return (
    <header
      id="site-header"
      className="main-header"
      data-sticky-header="true"
      data-sticky-values-measured="false"
      data-sticky-options='{"disableOnMobile": true}'
    >
      <div
        className="lqd-hide-onstuck bg-green-500 lg:hidden bg-center bg-cover py-10 md:hidden"
        style={{
          backgroundImage:
            "url('./assets/images/demo/start-hub-6/bg/bg-1.jpg')",
        }}
      >
        <div className="container-fluid p-0">
          {/* <div className="w-full flex flex-wrap justify-center items-center">
            <div className="ld-fancy-heading relative h-full mr-15 px-15 bg-white rounded-5em">
              <p className="ld-fh-element inline-block relative uppercase text-10 font-medium tracking-1 m-0 text-title font-heading">
                Free update
              </p>
            </div>
            <div className="ld-fancy-heading relative">
              <p className="ld-fh-element inline-block relative mb-0 text-14 font-medium text-white">
                Free support, Free updates, Free plugins.
              </p>
            </div>
            <a
              href="/#"
              className="btn btn-underlined border-thick ml-10 text-14 font-medium leading-1em text-white-60 capitalize"
              target="_blank"
              rel="nofollow"
            >
              <span className="btn-txt text-white-60" data-text="Join Us">
                Join Us
              </span>
            </a>
          </div> */}
        </div>
      </div>
      <div className="flex justify-between items-center border-bottom border-lightgray pr-15 pl-10 module-stuck md:hidden">
        <div className="flex">
          <div className="ld-module-sd ld-module-sd-hover ld-module-sd-left">
            <button
              className="nav-trigger flex relative items-center justify-center style-2 collapsed bg-transparent border-none pointer-events-auto"
              type="button"
              data-ld-toggle="true"
              data-toggle-options='{"cloneTriggerInTarget": false, "type": "click"}'
              data-bs-toggle="collapse"
              data-bs-target="#lqd-drawer-left-side"
              aria-expanded="false"
            >
              <span className="bars inline-block relative z-1">
                <span className="bars-inner flex flex-col w-full h-full">
                  <span className="bar inline-block relative"></span>
                  <span className="bar inline-block relative"></span>
                  <span className="bar inline-block relative"></span>
                </span>
              </span>
            </button>
            <div
              className="ld-module-dropdown collapse absolute lqd-drawer-left-side w-65vw"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              id="lqd-drawer-left-side"
              role="slider"
            >
              <div className="ld-sd-wrap">
                <div className="ld-sd-inner justify-center flex-col">
                  <div className="flex pt-100 px-135 pb-0">
                    <div className="w-45percent h-full relative flex flex-col items-start justify-start p-10">
                      <div className="ld-fancy-heading relative pb-45">
                        <h2 className="ld-fh-element inline-block relative text-16 text-black-30 mb-0/5em">
                          Social
                        </h2>
                      </div>
                      <div className="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none lqd-magnetic-items">
                        <ul className="reset-ul link-black">
                          <li className="mb-25">
                            <a href="/#">
                              <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label"></span>
                              Facebook
                            </a>
                          </li>
                          <li className="mb-25">
                            <a href="/#">
                              <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label"></span>
                              Behance
                            </a>
                          </li>
                          <li className="mb-25">
                            <a href="/#">
                              <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label"></span>
                              Dribble
                            </a>
                          </li>
                          <li className="mb-25">
                            <a href="/#">
                              <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label"></span>
                              Instagram
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label"></span>
                              Youtube
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="spacer h-full">
                        <div className="spacer-inner"></div>
                      </div>
                      <div className="ld-fancy-heading relative">
                        <h2 className="ld-fh-element inline-block relative text-16 text-black-30 mb-0 tracking-0">
                          Get in touch
                        </h2>
                      </div>
                      <div className="ld-fancy-heading relative">
                        <p className="mb-5/em relative text-20 leading-1em text-black">
                          info@liquid.com
                        </p>
                      </div>
                    </div>
                    <div className="w-55percent h-full relative flex flex-col items-start justify-start p-10">
                      <div className="ld-fancy-heading relative pb-30">
                        <h2 className="ld-fh-element inline-block relative text-16 text-black-30 mb-0/5em">
                          Menu
                        </h2>
                      </div>
                      <div className="module-primary-nav flex">
                        <div
                          className="navbar-collapse inline-flex p-0 lqd-submenu-default-style lqd-magnetic-items"
                          id="main-header-collapse-1"
                          aria-expanded="false"
                          role="navigation"
                        >
                          <ul
                            className="main-nav flex reset-ul lqd-menu-counter-right lqd-menu-items-block main-nav-hover-fade-inactive link-black text-30"
                            data-submenu-options='{"toggleType": "slide", "handler": "click"}'
                            data-localscroll="true"
                            data-localscroll-options='{"itemsSelector":"> li > a", "trackWindowScroll": true, "includeParentAsOffset": true}'
                          >
                            <li>
                              <a href="#banner">
                                <span>Home</span>
                                <span className="link-icon inline-flex hide-if-empty right-icon">
                                  <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#help-center">
                                <span>Features</span>
                                <span className="link-icon inline-flex hide-if-empty right-icon">
                                  <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>
                                </span>
                              </a>
                            </li>
                            {/* <li>
                              <a href="#video-tutorials">
                                <span>Community</span>
                                <span className="link-badge text-badge">
                                  New
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#submit-a-ticket">
                                <span>Pricing</span>
                                <span className="link-icon inline-flex hide-if-empty right-icon">
                                  <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#careers">
                                <span>Help Center</span>
                                <span className="link-badge text-badge">
                                  New
                                </span>
                              </a>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lqd-module-backdrop"></div>
          </div>
          <div id="site-logo" className="module-logo flex navbar-brand-plain">
            <a
              className="navbar-brand flex p-0 relative"
              href="./index-start-hub-6.html"
              rel="home"
            >
              <span className="navbar-brand-inner post-rel">
                <img
                  className="logo-default"
                  src="./assets/images/demo/start-hub-6/logo/Logo.svg"
                  alt="Starthub Six"
                />
              </span>
            </a>
          </div>
        </div>
        <div className="flex">
          <div className="module-primary-nav flex">
            <nav
              className="navbar-collapse inline-flex p-0 lqd-submenu-default-style"
              id="main-header-collapse-2"
              aria-expanded="false"
            >
              <ul
                id="primary-nav"
                className="main-nav flex reset-ul inline-ul lqd-menu-counter-right lqd-menu-items-inline main-nav-hover-fill link-14 link-medium module-nav"
                data-submenu-options='{"toggleType": "fade", "handler": "mouse-in-out"}'
                data-localscroll="true"
                data-localscroll-options='{"itemsSelector":"> li > a", "trackWindowScroll": true, "includeParentAsOffset": true}'
              >
                <li>
                  <a className="text-blue-900" href="#banner">
                    <span>Home</span>
                    <span className="link-icon inline-flex hide-if-empty right-icon">
                      <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="text-blue-900" href="#help-center">
                    <span>Features</span>
                    <span className="link-icon inline-flex hide-if-empty right-icon">
                      <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>
                    </span>
                  </a>
                </li>
                {/* <li>
                  <a className="text-blue-900" href="#video-tutorials">
                    <span>Community</span>
                    <span className="link-badge text-badge">New</span>
                  </a>
                </li> */}
                <li>
                  <a className="text-blue-900" href="#submit-a-ticket">
                    <span>Pricing</span>
                    <span className="link-icon inline-flex hide-if-empty right-icon">
                      <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>
                    </span>
                  </a>
                </li>
                {/* <li>
                  <a className="text-blue-900" href="#careers">
                    <span>Help Center</span>
                    <span className="link-badge text-badge">New</span>
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex">
          <div className="ld-dropdown-menu flex relative mr-10" role="menubar">
            <span
              className="ld-module-trigger"
              role="button"
              data-ld-toggle="true"
              data-bs-toggle="collapse"
              data-bs-target="#dropdown-language"
              aria-controls="dropdown-language"
              aria-expanded="false"
              data-toggle-options='{ "type":  "hoverFade" }'
            >
              <span className="ld-module-trigger-txt text-slate-500">
                <span>En </span>
                <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>
              </span>
            </span>
            <div
              className="ld-module-dropdown left collapse absolute"
              id="dropdown-language"
              aria-expanded="false"
              role="menuitem"
            >
              <div className="ld-dropdown-menu-content">
                <ul>
                  <li>
                    <a className="text-slate-700">Fr</a>
                  </li>
                  <li>
                    <a className="text-slate-700">Es</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex">
            <div
              className="ld-module-search lqd-module-search-slide-top flex items-center "
              data-module-style="lqd-search-style-slide-top"
            >
              <span
                className="ld-module-trigger collapsed lqd-module-trigger-txt-left lqd-module-show-icon lqd-module-icon-outline text-gray-400"
                role="button"
                data-ld-toggle="true"
                data-bs-toggle="collapse"
                data-bs-target="#search-header"
                aria-controls="search-header"
                aria-expanded="false"
              >
                <span className="ld-module-trigger-txt"></span>
                <span className="ld-module-trigger-icon">
                  <i className="lqd-icn-ess icon-ld-search-2 text-18"></i>
                </span>
              </span>
              <div
                className="ld-module-dropdown collapse flex w-full flex-col fixed overflow-hidden backface-hidden"
                id="search-header"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
                role="slider"
              >
                <div className="ld-search-form-container flex flex-col justify-center h-full mx-auto backface-hidden">
                  <form
                    role="search"
                    method="get"
                    action="#"
                    className="ld-search-form w-full"
                  >
                    <input
                      className="w-full"
                      type="search"
                      placeholder="Search"
                      value=""
                      name="s"
                    />
                    <span
                      className="input-icon inline-flex items-center justify-center absolute"
                      data-ld-toggle="true"
                      data-bs-toggle="collapse"
                      data-bs-target="#search-header"
                      aria-controls="search-header"
                      aria-expanded="false"
                      role="search"
                    >
                      <i className="lqd-icn-ess icon-ld-search"></i>
                    </span>
                    <input type="hidden" name="post_type" value="post" />
                  </form>
                  <p className="lqd-module-search-info">Type and hit enter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lqd-stickybar-wrap lqd-stickybar-right justify-start items-end pointer-events-none">
        <div className="max-w-full relative vertical-rl -rotate-180">
          <div className="h-auto horizontal-tb rotate-90 -mr-120 mb-0 ml-60">
            <a
              href="/#"
              className="btn btn-solid btn-icon-left font-medium pointer-events-auto rotate-90 bg-transparent rounded-6 text-white module-btn-sm"
              target="_blank"
              rel="nofollow"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #3A93CB 0%, #9E77DD 100%)",
              }}
            >
              <span className="btn-txt" data-text="Made with Hub">
                Made with Hub
              </span>
              <span className="btn-icon mr-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.393"
                  height="14.063"
                  viewBox="0 0 19.393 14.063"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="0.808"
                      y1="0.5"
                      x2="0"
                      y2="0.5"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stopColor="#fff"></stop>
                      <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M1,14.075a1,1,0,0,1-1-1V1.012a1,1,0,0,1,1-1H13.064a1,1,0,0,1,.9.553,1.99,1.99,0,0,1,.726.51L18.876,5.7a2,2,0,0,1,0,2.686l-4.19,4.627a1.99,1.99,0,0,1-.727.51,1,1,0,0,1-.9.552Z"
                    transform="translate(0 -0.012)"
                    fill="url(#a)"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="lqd-mobile-sec relative">
        <div className="lqd-mobile-sec-inner navbar-header flex items-stretch w-full">
          <div className="lqd-mobile-modules-container empty"></div>
          <button
            type="button"
            className="navbar-toggle collapsed nav-trigger style-mobile flex relative items-center justify-end bg-transparent border-none p-0"
            data-ld-toggle="true"
            data-bs-toggle="collapse"
            data-bs-target="#lqd-mobile-sec-nav"
            aria-expanded="false"
            data-toggle-options='{ "changeclassNamenames":  {"html":  "mobile-nav-activated"} }'
          >
            <span className="sr-only">Menu</span>
            <span className="bars inline-block relative z-1">
              <span className="bars-inner flex flex-col w-full h-full">
                <span className="bar inline-block"></span>
                <span className="bar inline-block"></span>
                <span className="bar inline-block"></span>
              </span>
            </span>
          </button>
          <a
            className="navbar-brand flex relative"
            href="./index-start-hub-6.html"
          >
            <span className="navbar-brand-inner">
              <img
                className="logo-default"
                src="./assets/images/demo/start-hub-6/logo/Logo.svg"
                alt="Starthub Six"
              />
            </span>
          </a>
        </div>
        <div className="lqd-mobile-sec-nav w-full absolute z-10">
          <div
            className="mobile-navbar-collapse navbar-collapse collapse w-full"
            id="lqd-mobile-sec-nav"
            aria-expanded="false"
            role="navigation"
          >
            <ul
              id="mobile-primary-nav"
              className="reset-ul lqd-mobile-main-nav main-nav nav"
              data-localscroll="true"
              data-localscroll-options='{"itemsSelector":"> li > a", "trackWindowScroll": true, "includeParentAsOffset": true}'
            >
              <li className="is-active">
                <a href="#banner">
                  <span>Home</span>
                  <span className="link-icon inline-flex hide-if-empty right-icon">
                    <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>
                  </span>
                </a>
              </li>
              <li>
                <a href="#help-center">
                  <span>Features</span>
                  <span className="link-icon inline-flex hide-if-empty right-icon">
                    <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>
                  </span>
                </a>
              </li>
              <li>
                <a href="#video-tutorials">
                  <span>community</span>
                  <span className="link-badge text-badge">New</span>
                </a>
              </li>
              <li>
                <a href="#submit-a-ticket">
                  <span>Pricing</span>
                  <span className="link-icon inline-flex hide-if-empty right-icon">
                    <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>
                  </span>
                </a>
              </li>
              <li>
                <a href="#careers">
                  <span>Help Center</span>
                  <span className="link-badge text-badge">New</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
