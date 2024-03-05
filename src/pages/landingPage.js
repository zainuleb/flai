import React from "react";
import Header from "../components/Header";
import StartBanner from "../components/StartBanner";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main class="content bg-white" id="lqd-site-content">
        <div id="lqd-contents-wrap">
          <StartBanner />
        </div>
      </main>
    </>
  );
};

export default LandingPage;
