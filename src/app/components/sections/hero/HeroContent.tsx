import React from "react";
import { HeroHeading } from "./HeroHeading";
import { Container } from "@/app/components/ui/Container";

export const HeroContent = () => {
  return (
    <Container>
      <div className="relative z-10 mt-[25px] flex flex-col items-center justify-center space-y-4 text-center md:mt-[82px] md:flow-root md:space-y-[1.875rem] md:text-left">
        <HeroHeading />
        <p className="max-w-[40ch] text-body-lg-mobile font-medium text-body-secondary md:text-body-lg-desktop">
          Keep projects on track with centralized CRM, tailored proposals, task
          management, and integrated team chat.
        </p>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <button className="button-primary button-base text-btn-mobile font-semibold max-md:w-full md:text-btn-desktop">
            get started
          </button>
          <button className="button-secondary button-base text-btn-mobile font-semibold max-md:w-full md:text-btn-desktop">
            try the demo
          </button>
        </div>
      </div>
    </Container>
  );
};
