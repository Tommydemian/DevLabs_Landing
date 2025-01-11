import React from "react";
import Image from "next/image";
import Link from "next/link";
// Components
import { ChevronRight } from "lucide-react";
import { FeatureContenWrapper } from "./FeatureContentWrapper";
import { FeatureHeading } from "./FeatureHeading";
import { FeatureDescription } from "./FeatureDescription";

import type { Feature } from "@/app/types";

type FeatureCardProps = {
  feature: Feature;
};

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const { description, href, image, title } = feature;
  return (
    <article className="flex flex-col items-center justify-center gap-y-8 md:flex-row md:gap-x-24">
      <div>
        <Image width={200} height={200} alt={description} src={image} />
      </div>
      <FeatureContenWrapper>
        <FeatureHeading>{title}</FeatureHeading>
        <FeatureDescription>{description}</FeatureDescription>
        <Link
          href={href}
          className="link-gradient-text flex items-center text-s-15 md:text-m-20"
        >
          Learn More
          <span>
            <ChevronRight className="text-[#7B46A5]" />
          </span>
        </Link>
      </FeatureContenWrapper>
    </article>
  );
};
