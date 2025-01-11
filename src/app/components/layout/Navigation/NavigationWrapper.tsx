import React from "react";

type NavigationWrapperProps = {
  children: React.ReactNode;
};

export const NavigationWrapper: React.FC<NavigationWrapperProps> = ({
  children,
}) => {
  return (
    <div className="flex items-center justify-start gap-x-4 rounded-[31.25rem] bg-surface-primary p-4">
      {children}
    </div>
  );
};
