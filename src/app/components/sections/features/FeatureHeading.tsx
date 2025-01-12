import React from "react";

type FeatureHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export const FeatureHeading: React.FC<FeatureHeadingProps> = ({
  children,
  className,
}) => {
  return (
    <h2
      className={`text-black, text-feature-heading-mobile font-bold capitalize md:text-feature-heading-desktop ${className || ""}`}
    >
      {children}
    </h2>
  );
};
