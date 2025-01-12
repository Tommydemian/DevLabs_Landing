import React from "react";
import { SectionHeading } from "../../ui/SectionHeading";
import { Container } from "../../ui/Container";
import { VSpace } from "../../ui/VSpace";
import { ToolCard } from "./ToolCard";
// Data
import { otherTools } from "@/data/otherTools";

type Props = {};

export const OtherToolsSection = () => {
  return (
    <section>
      <Container>
        <VSpace>
          <SectionHeading className="hidden md:flex">
            Other Tools
          </SectionHeading>
          <div className="grid grid-cols-1 gap-11 gap-y-10 md:p-section-block">
            {otherTools.map((tool) => (
              <ToolCard tool={tool} key={tool.title} />
            ))}
          </div>
        </VSpace>
      </Container>
    </section>
  );
};
