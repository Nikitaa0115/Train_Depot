import React from "react";
import ImageCarousel from "./ImageCarousel";
import WashingLine from "./Washingline";
import SickLine from "./Sickline";
import StablingLine from "./StablingLine";
import Preandpost from "./Preandpost";
import Map from "./Map";
function Home() {
  return (
    <div>
      <ImageCarousel />
      <WashingLine />
      <SickLine />
      <StablingLine />
      <Preandpost />
      <Map />
    </div>
  );
}

export default Home;
