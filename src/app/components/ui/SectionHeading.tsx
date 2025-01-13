import React from "react";
import { cn } from "@/app/lib/utils/cn";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  biggerText?: boolean;
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className,
  biggerText = false,
}) => {
  return (
    <h1
      className={cn(
        "heading-primary-base",
        biggerText ? "text-lg-40" : "text-h1-mobile",
        className,
      )}
    >
      {children}
    </h1>
  );
};
