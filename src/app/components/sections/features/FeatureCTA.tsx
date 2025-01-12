import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type FeatureCTAProps = {
  href: string;
};

export const FeatureCTA: React.FC<FeatureCTAProps> = ({ href }) => {
  return (
    <Link
      href={href}
      className="link-gradient-text flex items-center text-s-15 md:text-m-20"
    >
      Learn More
      <span>
        <ChevronRight className="text-[#7B46A5]" />
      </span>
    </Link>
  );
};
