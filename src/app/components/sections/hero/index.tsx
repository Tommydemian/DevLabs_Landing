import React from "react";
import { Header } from "../../layout/Header";
import { HeroContent } from "./HeroContent";

export const Hero = () => {
  return (
    <section className="relative h-[80vh] overflow-clip">
      <Header />
      <video
        src="heroVideo.mp4"
        autoPlay
        muted
        loop
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* <div className="absolute inset-0 bg-black" /> */}
      <HeroContent />
    </section>
  );
};
