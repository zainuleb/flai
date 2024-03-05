import "./App.css";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <div
      className="lqd-sticky-footer-shadow-2 lqd-search-style-slide-top"
      data-localscroll-offset="55"
      data-mobile-nav-breakpoint="1199"
      data-mobile-nav-style="modern"
      data-mobile-nav-scheme="dark"
      data-mobile-nav-trigger-alignment="right"
      data-mobile-header-scheme="gray"
      data-mobile-logo-alignment="default"
      data-overlay-onmobile="false"
    >
      <LandingPage />
    </div>
  );
}

export default App;
