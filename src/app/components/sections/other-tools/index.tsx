import React from "react";
import { SectionHeading } from "../../ui/SectionHeading";
import { Container } from "../../ui/Container";
import { VSpace } from "../../ui/VSpace";
import { ToolCard } from "./ToolCard";
import { ProgressBar } from "./ProgressBar";
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
          <div className="debug tools-grid-wrapper relative gap-x-7 md:p-section-block">
            <ProgressBar />
            <div className="flex flex-col items-center space-y-12 md:block">
              {otherTools.map((tool) => (
                <ToolCard tool={tool} key={tool.title} />
              ))}
            </div>
          </div>
        </VSpace>
      </Container>
    </section>
  );
};
