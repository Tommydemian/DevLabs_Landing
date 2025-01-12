import React from "react";
import { SectionHeading } from "../../ui/SectionHeading";
import { FeatureCard } from "./FeatureCard";
import { Container } from "../../ui/Container";
// Data
import { features } from "@/data/features";

export const FeaturesSection = () => {
  return (
    <section>
      <Container>
        <SectionHeading className="max-w-[20ch]">
          Discover everything Workup can do for you.
        </SectionHeading>
        <Container>
          <div className="grid grid-cols-1 gap-11 py-section-block md:gap-32">
            {features.map((feat, index) => (
              <FeatureCard feature={feat} key={feat.title} index={index} />
            ))}
          </div>
        </Container>
      </Container>
    </section>
  );
};
