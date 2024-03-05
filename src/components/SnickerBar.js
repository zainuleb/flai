import React from "react";

const SnickerBar = () => {
  return (
    <>
      <template id="lqd-temp-snickersbar">
        <div
          className="lqd-snickersbar flex flex-wrap lqd-snickersbar-in"
          data-item-id
        >
          <div className="lqd-snickersbar-inner flex flex-wrap items-center">
            <div className="lqd-snickersbar-detail">
              <p className="lqd-snickersbar-addding-temp mt-0mb-0 hidden">
                Adding {{ itemName }} to cart
              </p>
              <p className="lqd-snickersbar-added-temp mt-0mb-0 hidden">
                Added {{ itemName }} to cart
              </p>
              <p className="lqd-snickersbar-msg flex items-center mt-0mb-0"></p>
              <p className="lqd-snickersbar-msg-done flex items-center mt-0mb-0"></p>
            </div>
            <div className="lqd-snickersbar-ext ml-1/5em"></div>
          </div>
        </div>
      </template>
      <template id="lqd-temp-sticky-header-sentinel">
        <div className="lqd-sticky-sentinel invisible absolute pointer-events-none"></div>
      </template>
      <div
        className="lity"
        role="dialog"
        aria-label="Dialog Window (Press escape to close)"
        tabindex="-1"
        data-modal-type="default"
      >
        <div className="lity-backdrop"></div>
        <div className="lity-wrap" data-lity-close role="document">
          <div className="lity-loader" aria-hidden="true">
            Loading...
          </div>
          <div className="lity-container">
            <div className="lity-content"></div>
          </div>
          <button
            className="lity-close"
            type="button"
            aria-label="Close (Press escape to close)"
            data-lity-close
          >
            &times;
          </button>
        </div>
      </div>
    </>
  );
};

export default SnickerBar;
