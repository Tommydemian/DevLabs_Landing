import React from "react";
import { cn } from "@/app/lib/utils/cn";

type ContainerProps = {
  children: React.ReactNode;
  lg?: boolean;
};
export const Container: React.FC<ContainerProps> = ({
  children,
  lg = false,
}) => {
  return (
    <div className={cn(lg ? "container--lg" : "container")}>{children}</div>
  );
};
