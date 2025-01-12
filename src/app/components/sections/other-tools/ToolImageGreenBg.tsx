import React from "react";

type ToolImagGreenBgProps = {
  children: React.ReactNode;
};

export const ToolImagGreenBg: React.FC<ToolImagGreenBgProps> = ({
  children,
}) => {
  return (
    <div className="debug relative flex h-[264.16px] w-[298.69px] items-center justify-center rounded-[18px] bg-image-background">
      {children}
    </div>
  );
};
