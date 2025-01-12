import React from "react";
import { Container } from "../../ui/Container";
import { VSpace } from "../../ui/VSpace";
import { SectionHeading } from "../../ui/SectionHeading";
import Image from "next/image";

export const CallToActionSection = () => {
  return (
    <section className="relative rounded-full bg-surface-secondary md:rounded-none">
      <Container>
        <VSpace>
          <div className="flex flex-col items-center justify-between gap-y-4 md:flex-row">
            <div className="order-2 space-y-4 text-center">
              <SectionHeading className="max-w-[13ch] md:max-w-[17ch]">
                You’ve got this, and we’ve got your back.
              </SectionHeading>
              <button>Contact us</button>
            </div>
            <div className="order-1 w-[444px] -translate-y-6 md:order-3 md:w-[510px]">
              <Image
                src="/call-to-action-section.png"
                alt="two workers in the ground handling pipes"
                width={1500}
                height={1100}
                className="object-cover"
              />
            </div>
          </div>
        </VSpace>
      </Container>
    </section>
  );
};
