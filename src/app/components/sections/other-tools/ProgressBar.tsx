"use client";

import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "motion/react";

export const ProgressBar = () => {
  // 1. Reference the container you want to track
  const ref = useRef<HTMLDivElement>(null);

  // 2. Get scroll progress for that ref
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) =>
    console.log(latest),
  );

  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Step 1
  const step1 = {
    outer: useTransform(
      scrollYProgress,
      [0, 0.1],
      ["#B2B2B2", "rgba(112, 65, 153, 0.4)"],
    ),
    inner: useTransform(
      scrollYProgress,
      [0, 0.1],
      ["#888888", "rgb(123, 70, 165)"],
    ),
  };
  // Step 2
  const step2 = {
    outer: useTransform(
      scrollYProgress,
      [0.3, 0.9],
      ["#B2B2B2", "rgba(112, 65, 153, 0.4)"],
    ),
    inner: useTransform(
      scrollYProgress,
      [0.3, 0.9],
      ["#888888", "rgb(123, 70, 165)"],
    ),
  };
  // Step 3
  const step3 = {
    outer: useTransform(
      scrollYProgress,
      [0.9, 1],
      ["#B2B2B2", "rgba(112, 65, 153, 0.4)"],
    ),
    inner: useTransform(
      scrollYProgress,
      [0.9, 1],
      ["#888888", "rgb(123, 70, 165)"],
    ),
  };

  return (
    <motion.div
      ref={ref}
      className="relative flex h-[78%] w-[0.656rem] bg-[#C0C0C0]"
    >
      {/* Fill Purple Bar */}
      <motion.div
        style={{
          height: fillHeight,
          background: "linear-gradient(180deg, #7B46A5 0%, #A38CB5 100%)",
        }}
        className="absolute bottom-0 top-0 h-full w-full origin-top"
      />
      {/* Step 1 */}
      <motion.div
        style={{ backgroundColor: step1.outer }}
        className="absolute left-1/2 top-0 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
      >
        <motion.div
          style={{ backgroundColor: step1.inner }}
          className="h-[18.5px] w-[18.5px] rounded-full"
        />
      </motion.div>
      {/* Step 2 */}
      <motion.div
        style={{ backgroundColor: step2.outer }}
        className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
      >
        <motion.div
          style={{ backgroundColor: step2.inner }}
          className="h-[18.5px] w-[18.5px] rounded-full"
        />
      </motion.div>
      {/* Step 3 */}
      <motion.div
        style={{ backgroundColor: step3.outer }}
        className="absolute bottom-0 left-1/2 flex h-9 w-9 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full"
      >
        <motion.div
          style={{ backgroundColor: step3.inner }}
          className="h-[18.5px] w-[18.5px] rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};
