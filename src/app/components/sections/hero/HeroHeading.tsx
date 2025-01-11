"use client";
import React from "react";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";

export const HeroHeading = () => {
  const isDesktop = useBreakpoint("(min-width: 768px)");

  return (
    <h1 className="text-h1-mobile md:text-h1-desktop font-bold text-heading-primary">
      Simplify
      {isDesktop ? <br /> : " "} workflows. <br /> Amaze clients.
    </h1>
  );
};
