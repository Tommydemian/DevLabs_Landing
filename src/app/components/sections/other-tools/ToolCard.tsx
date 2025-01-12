import React from "react";
import Image from "next/image";
import { FeatureHeading } from "../features/FeatureHeading";
import { FeatureDescription } from "../features/FeatureDescription";
import { FeatureCTA } from "../features/FeatureCTA";
import { ToolImagGreenBg } from "./ToolImageGreenBg";

import { TaskCard } from "./taskCard";

// Types
import { Tool } from "@/app/types";

type ToolCardProps = {
  tool: Tool;
};

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { description, href, id, title } = tool;
  const taskBoard = id === 1;
  const calendar = id === 2;
  return (
    <article className="flex flex-col items-center justify-between md:flex-row">
      <div className="space-y-2">
        <FeatureHeading className="md:mb-4">{title}</FeatureHeading>
        <FeatureDescription className="!max-w-[26ch] text-s-15 leading-6 md:!max-w-[52ch] md:text-m-16">
          {description}
        </FeatureDescription>
        <FeatureCTA href={href} />
      </div>
      <div>
        <ToolImagGreenBg>
          {taskBoard
            ? Array.from({ length: 3 }).map((_, index) => (
                <TaskCard key={index} index={index} />
              ))
            : calendar
              ? null
              : null}
        </ToolImagGreenBg>
      </div>
    </article>
  );
};
