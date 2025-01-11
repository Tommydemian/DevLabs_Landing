"use client";
import React from "react";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";

export const HeroHeading = () => {
  const isDesktop = useBreakpoint("(min-width: 768px)");

  return (
    <h1 className="typography-h1 text-heading-primary">
      Simplify
      {isDesktop ? <br /> : " "} workflows. <br /> Amaze clients.
    </h1>
  );
};
