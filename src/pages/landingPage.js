import React from "react";
import Header from "../components/Header";
import StartBanner from "../components/StartBanner";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import ESGIntro from "../components/ESGIntro";
import HowItWorks from "../components/HowItWorks";
import FeatureBenefits from "../components/FeatureBenefits";
import FAQs from "../components/FAQs";
import ContactForm from "../components/ContactForm";

const LandingPage = () => {
  return (
    <>
      <div className="lqd-sticky-placeholder hidden"></div>
      <Header />
      <main className="content bg-white" id="lqd-site-content">
        <div id="lqd-contents-wrap">
          <StartBanner />
          <ESGIntro />
          <HowItWorks />
          <FeatureBenefits />
          <FAQs />
          <ContactForm />
        </div>
      </main>
      <Footer />
      <ContactModal />
    </>
  );
};

export default LandingPage;
