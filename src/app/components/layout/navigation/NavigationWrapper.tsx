import React from "react";

type NavigationWrapperProps = {
  children: React.ReactNode;
};

export const NavigationWrapper: React.FC<NavigationWrapperProps> = ({
  children,
}) => {
  return (
    <div className="transition-test flex items-center justify-between gap-x-4 rounded-nav-wrapper bg-surface-primary px-6 py-[10px] md:rounded-[31.25rem] md:px-xl md:py-nav-wrapper">
      {children}
    </div>
  );
};
