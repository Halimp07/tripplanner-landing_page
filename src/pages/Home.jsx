import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
// import FeaturesBlocks from '../partials/FeaturesBlocks';
// import Testimonials from '../partials/Testimonials';
// import Newsletter from '../partials/Newsletter';
import OurTeam from "../partials/OurTeam";
import Team from "../partials/MyTeam";
import Footer from "../partials/Footer";
// import OurTeam from "../data/data";
// import Banner from '../partials/Banner';
// import React from "react";
import ReactDOM from "react-dom/client";
import MyTeam from "../partials/MyTeam";

function Dom() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        {/* <FeaturesBlocks /> */}
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}
      </main>

      {/* <Banner /> */}
      <MyTeam />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Dom />
  </React.StrictMode>
);

export default Dom;
