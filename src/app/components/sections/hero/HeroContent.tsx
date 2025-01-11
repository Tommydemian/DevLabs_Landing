import React from "react";
import { Container } from "../../ui/Container";
import { HeroHeading } from "./HeroHeading";

export const HeroContent = () => {
  return (
    <Container>
      <div className="relative z-10 mt-[82px] space-y-[1.875rem] text-center md:text-left">
        <HeroHeading />
        <p className="typography-p max-w-[40ch] text-body-secondary">
          Keep projects on track with centralized CRM, tailored proposals, task
          management, and integrated team chat.
        </p>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <button className="button-primary button-base typography-button">
            get started
          </button>
          <button className="button-secondary button-base typography-button">
            try the demo
          </button>
        </div>
      </div>
    </Container>
  );
};
