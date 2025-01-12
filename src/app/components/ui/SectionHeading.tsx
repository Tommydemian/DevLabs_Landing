import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className,
}) => {
  return (
    <h1
      className={`max-w-[20ch] text-center text-h1-mobile font-bold text-heading-primary md:text-left md:text-h1-desktop ${className || ""}`}
    >
      {children}
    </h1>
  );
};
