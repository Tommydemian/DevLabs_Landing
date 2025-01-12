import React from "react";
import Image from "next/image";
// Components
import { FeatureContenWrapper } from "./FeatureContentWrapper";
import { FeatureHeading } from "./FeatureHeading";
import { FeatureDescription } from "./FeatureDescription";
import { FeatureCTA } from "./FeatureCTA";
import { PlayVideoIcon } from "../../icons/PlayVideo";
// Utils
import { cn } from "@/app/lib/utils/cn";
// Types
import type { Feature } from "@/app/types";

type FeatureCardProps = {
  feature: Feature;
  index: number;
};

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const { description, href, image, title } = feature;
  return (
    <article className="flex flex-col items-center justify-center gap-y-8 md:grid md:grid-cols-2 md:justify-center md:gap-x-24">
      <div className={cn(index === 1 && "md:order-1", "relative")}>
        <Image
          width={767}
          height={1400}
          alt={description}
          src={image}
          className="relative"
        />
        {(index === 0 || index === 2) && (
          <PlayVideoIcon
            className={cn("absolute-center", index === 0 && "left-[62%]")}
          />
        )}
      </div>
      <FeatureContenWrapper>
        <FeatureHeading>{title}</FeatureHeading>
        <FeatureDescription>{description}</FeatureDescription>
        <FeatureCTA href={href} />
      </FeatureContenWrapper>
    </article>
  );
};
