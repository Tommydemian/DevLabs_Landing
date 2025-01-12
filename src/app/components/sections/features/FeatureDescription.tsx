import React from "react";

type FeatureDescriptionProps = {
  children: React.ReactNode;
};

export const FeatureDescription: React.FC<FeatureDescriptionProps> = ({
  children,
}) => {
  return (
    <p className="max-w-[30ch] text-feature-description-mobile font-medium text-body-primary md:max-w-[40ch] md:text-feature-description-desktop">
      {children}
    </p>
  );
};
