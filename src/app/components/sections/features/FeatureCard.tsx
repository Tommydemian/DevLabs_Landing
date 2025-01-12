import React from "react";
import Image from "next/image";
import Link from "next/link";
// Components
import { ChevronRight } from "lucide-react";
import { FeatureContenWrapper } from "./FeatureContentWrapper";
import { FeatureHeading } from "./FeatureHeading";
import { FeatureDescription } from "./FeatureDescription";
import { PlayVideoIcon } from "../../icons/PlayVideo";
// Utils
import { cn } from "@/app/lib/utils/cn";
// Types
import type { Feature } from "@/app/types";
import { relative } from "path";

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
