import React from "react";

type FeatureHeadingProps = {
  children: React.ReactNode;
};

export const FeatureHeading: React.FC<FeatureHeadingProps> = ({ children }) => {
  return (
    <h2 className="text-feature-heading-mobile md:text-feature-heading-desktop font-bold capitalize text-black">
      {children}
    </h2>
  );
};
