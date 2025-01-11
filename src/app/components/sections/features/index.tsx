import React from "react";
import { SectionHeading } from "../../ui/SectionHeading";
import { FeatureCard } from "./FeatureCard";
import { Container } from "../../ui/Container";

import { features } from "@/data/features";

type Props = {};

export const Features = () => {
  return (
    <main>
      <SectionHeading className="max-w-[20ch]">
        Discover everything Workup can do for you.
      </SectionHeading>
      <Container>
        <div className="grid grid-cols-1 gap-11 py-section-block md:gap-32">
          {features.map((feat) => (
            <FeatureCard feature={feat} key={feat.title} />
          ))}
        </div>
      </Container>
    </main>
  );
};
