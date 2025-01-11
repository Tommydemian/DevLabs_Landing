import React from "react";

type FeatureContenWrapperProps = {
  children: React.ReactNode;
};

export const FeatureContenWrapper: React.FC<FeatureContenWrapperProps> = ({
  children,
}) => {
  return <div className="space-y-2 md:space-y-3">{children}</div>;
};
