import React from "react";

type ToolImagGreenBgProps = {
  children: React.ReactNode;
};

export const ToolImagGreenBg: React.FC<ToolImagGreenBgProps> = ({
  children,
}) => {
  return (
    <div className="rounded-tool-green-bg relative flex h-[163.98px] w-[277.43px] items-center justify-center bg-image-background md:h-[264.16px] md:w-[298.69px]">
      {children}
    </div>
  );
};
