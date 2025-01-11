import React from "react";
import { Header } from "../../layout/header";
import { HeroContent } from "./HeroContent";
import { VSpace } from "../../ui/VSpace";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative h-[97svh] overflow-clip md:h-[82.5svh]">
      <VSpace>
        <Header />
        <video
          src="heroVideo.mp4"
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover opacity-[40%]"
        />

        <div className="absolute bottom-0 right-0 w-[60vw] min-w-[330px] max-w-[853px]">
          <Image
            src="/obreros.png"
            alt="..."
            priority
            fetchPriority="high"
            width={2600}
            height={1900}
            className="h-auto w-full object-cover"
          />
        </div>
        <HeroContent />
      </VSpace>
    </section>
  );
};
