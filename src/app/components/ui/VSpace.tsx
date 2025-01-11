import React from "react";

type VSpaceProps = {
  children: React.ReactNode;
};

export const VSpace: React.FC<VSpaceProps> = ({ children }) => {
  return <div className="py-section-block">{children}</div>;
};
