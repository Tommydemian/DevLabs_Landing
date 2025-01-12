import React from "react";

type PlayVideoIconProps = {
  className?: string;
};
export const PlayVideoIcon: React.FC<PlayVideoIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="84"
    fill="none"
    viewBox="0 0 64 84"
    className={className}
  >
    <path
      fill="#fff"
      d="M11.59 1.833C5.19-2.467 0 1.056 0 9.693V73.43c0 8.645 5.19 12.163 11.59 7.868l47.582-31.95c6.403-4.3 6.403-11.268 0-15.567z"
    ></path>
  </svg>
);
