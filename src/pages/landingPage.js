import React from "react";
import Header from "../components/Header";
import StartBanner from "../components/StartBanner";
import Footer from "../components/Footer";
import ValueProposition from "../components/ValueProposition";
import ContactModal from "../components/ContactModal";
import StartClient from "../components/StartClient";
import IconBox from "../components/IconBox";
import StartTab from "../components/StartTab";

const LandingPage = () => {
  return (
    <>
      <div className="lqd-sticky-placeholder hidden"></div>
      <Header />
      <main className="content bg-white" id="lqd-site-content">
        <div id="lqd-contents-wrap">
          <StartBanner />
          <StartClient />
          <IconBox />
          <StartTab />
          {/* <Footer /> */}
        </div>
      </main>
      <ContactModal />
      {/* <a
        class="fixed z-100"
        href="/#"
        title="Get Hu"
        style="bottom: 2rem; left: 2rem;"
        target="_blank"
        rel="nofollow"
      >
        <svg
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4_2)">
            <path
              d="M61.07 30.5719C61.07 31.7719 59.17 32.8429 59.03 34.0039C58.887 35.1899 60.476 36.6829 60.197 37.8219C59.913 38.9789 57.81 39.5649 57.397 40.6639C56.984 41.7629 58.158 43.6079 57.61 44.6499C57.062 45.6919 54.877 45.7639 54.21 46.7339C53.543 47.7039 54.246 49.7709 53.462 50.6549C52.678 51.5389 50.544 51.0819 49.662 51.8669C48.78 52.6519 48.977 54.8239 48.002 55.4969C47.027 56.1699 45.07 55.2149 44.019 55.7679C42.968 56.3209 42.65 58.4739 41.538 58.8959C40.426 59.3179 38.764 57.9169 37.607 58.1959C36.468 58.4759 35.633 60.4959 34.446 60.6339C33.285 60.7739 31.994 59.0159 30.796 59.0159C29.598 59.0159 28.307 60.7729 27.146 60.6339C25.959 60.4909 25.123 58.4759 23.985 58.1959C22.828 57.9119 21.153 59.3079 20.054 58.8909C18.955 58.4739 18.616 56.3119 17.573 55.7629C16.53 55.2139 14.561 56.1629 13.59 55.4919C12.619 54.8209 12.814 52.6449 11.93 51.8609C11.046 51.0769 8.91197 51.5339 8.12997 50.6489C7.34797 49.7639 8.05599 47.7019 7.38199 46.7279C6.70799 45.7539 4.52999 45.6939 3.98199 44.6439C3.43399 43.5939 4.61698 41.7689 4.19498 40.6579C3.77298 39.5469 1.67599 38.9739 1.39499 37.8159C1.11499 36.6769 2.70398 35.1849 2.56198 33.9979C2.42298 32.8369 0.521973 31.7649 0.521973 30.5669C0.521973 29.3689 2.42198 28.2959 2.56198 27.1359C2.70498 25.9499 1.11599 24.4559 1.39499 23.3179C1.67899 22.1609 3.78098 21.5749 4.19498 20.4759C4.60898 19.3769 3.43399 17.5319 3.98199 16.4899C4.52999 15.4479 6.71599 15.3759 7.38199 14.4049C8.04799 13.4339 7.34597 11.3679 8.12997 10.4839C8.91397 9.59991 11.048 10.0569 11.93 9.2719C12.812 8.4869 12.615 6.31489 13.59 5.64089C14.565 4.96689 16.522 5.9229 17.573 5.3709C18.624 4.8189 18.942 2.66491 20.054 2.24291C21.166 1.82091 22.828 3.22189 23.985 2.94289C25.124 2.66289 25.96 0.642903 27.146 0.504903C28.307 0.365903 29.598 2.12291 30.796 2.12291C31.994 2.12291 33.286 0.365903 34.447 0.504903C35.633 0.647903 36.469 2.66289 37.608 2.94289C38.765 3.22789 40.44 1.83091 41.539 2.24791C42.638 2.66491 42.977 4.82691 44.02 5.37591C45.063 5.92491 47.032 4.97589 48.002 5.64589C48.972 6.31589 48.778 8.49291 49.662 9.27691C50.546 10.0609 52.681 9.60391 53.462 10.4889C54.243 11.3739 53.536 13.4359 54.209 14.4099C54.882 15.3839 57.061 15.4439 57.609 16.4949C58.157 17.5459 56.974 19.3689 57.396 20.4809C57.818 21.5929 59.915 22.1659 60.196 23.3229C60.476 24.4619 58.887 25.9549 59.029 27.1409C59.169 28.3009 61.07 29.3729 61.07 30.5719Z"
              fill="#E1E6EA"
            />
            <path
              d="M16.827 31.128C16.8266 33.7663 17.569 36.3515 18.9693 38.5876C20.3696 40.8237 22.3712 42.6204 24.745 43.772L18.045 25.411C17.2419 27.2098 16.8276 29.158 16.829 31.128H16.827ZM40.36 30.419C40.3402 29.0449 39.9382 27.7034 39.199 26.545C38.4448 25.5953 37.9679 24.4557 37.821 23.252C37.8029 22.6078 38.0412 21.9828 38.4835 21.5141C38.9257 21.0454 39.5359 20.7713 40.18 20.752C40.242 20.752 40.301 20.76 40.362 20.763C38.8617 19.3896 37.0811 18.3584 35.1432 17.7408C33.2054 17.1231 31.1564 16.9337 29.1382 17.1856C27.1199 17.4375 25.1804 18.1247 23.4538 19.1998C21.7272 20.2748 20.2546 21.712 19.138 23.412C19.468 23.422 19.778 23.429 20.038 23.429C21.507 23.429 23.782 23.251 23.782 23.251C23.9354 23.239 24.0873 23.2885 24.2042 23.3886C24.3212 23.4886 24.3935 23.631 24.4055 23.7845C24.4174 23.9379 24.3679 24.0898 24.2679 24.2067C24.1678 24.3236 24.0254 24.396 23.872 24.408C23.872 24.408 23.111 24.498 22.264 24.542L27.38 39.759L30.454 30.538L28.265 24.538C27.508 24.494 26.792 24.404 26.792 24.404C26.6487 24.3799 26.5197 24.303 26.4305 24.1885C26.3412 24.0739 26.2981 23.93 26.3098 23.7853C26.3215 23.6405 26.3871 23.5054 26.4936 23.4066C26.6001 23.3079 26.7397 23.2527 26.885 23.252C26.885 23.252 29.205 23.43 30.585 23.43C32.054 23.43 34.329 23.252 34.329 23.252C34.4824 23.24 34.6343 23.2895 34.7512 23.3896C34.8682 23.4896 34.9405 23.632 34.9525 23.7855C34.9644 23.9389 34.9149 24.0908 34.8149 24.2077C34.7148 24.3246 34.5724 24.397 34.419 24.409C34.419 24.409 33.656 24.499 32.811 24.543L37.888 39.643L39.288 34.96C39.852 33.5028 40.2121 31.9747 40.358 30.419H40.36ZM31.122 32.352L26.907 44.605C29.7372 45.4383 32.7578 45.36 35.541 44.381C35.502 44.3194 35.4685 44.2544 35.441 44.187L31.122 32.352ZM43.199 24.388C43.2646 24.8665 43.298 25.3489 43.299 25.832C43.2751 27.5629 42.9122 29.2725 42.231 30.864L37.938 43.272C41.1024 41.4302 43.423 38.426 44.4056 34.899C45.3882 31.3719 44.9553 27.6006 43.199 24.388ZM30.876 14.752C27.6372 14.7522 24.4711 15.7128 21.7782 17.5123C19.0854 19.3118 16.9866 21.8695 15.7472 24.8618C14.5079 27.8542 14.1838 31.1468 14.8158 34.3234C15.4478 37.4999 17.0075 40.4178 19.2978 42.7079C21.588 44.998 24.5059 46.5576 27.6826 47.1894C30.8592 47.8212 34.1518 47.4968 37.144 46.2573C40.1363 45.0178 42.6938 42.9189 44.4932 40.2259C46.2926 37.5329 47.253 34.3668 47.253 31.128C47.248 26.7861 45.5209 22.6236 42.4507 19.5536C39.3804 16.4835 35.2178 14.7567 30.876 14.752ZM30.876 46.752C27.7852 46.7525 24.7637 45.8366 22.1936 44.1198C19.6235 42.4031 17.6202 39.9627 16.4371 37.1074C15.254 34.252 14.9443 31.11 15.547 28.0786C16.1498 25.0472 17.638 22.2626 19.8234 20.0771C22.0088 17.8915 24.7933 16.4031 27.8246 15.8002C30.856 15.1972 33.9981 15.5068 36.8535 16.6897C39.7089 17.8726 42.1494 19.8757 43.8663 22.4458C45.5832 25.0158 46.4994 28.0372 46.499 31.128C46.4937 35.2699 44.846 39.2407 41.9173 42.1696C38.9886 45.0985 35.0179 46.7464 30.876 46.752Z"
              fill="#317296"
            />
          </g>
          <defs>
            <clipPath id="clip0_4_2">
              <rect width="61.57" height="61.144" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a> */}
    </>
  );
};

export default LandingPage;
