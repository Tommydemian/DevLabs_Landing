"use client";
import React from "react";
import { motion } from "motion/react";
import {
  Calendar,
  Mail,
  MessageSquare,
  Check,
  Clock,
  MoreVertical,
} from "lucide-react";
import { cn } from "@/app/lib/utils/cn";

type TaskCardProps = {
  index: number;
};

export const TaskCard: React.FC<TaskCardProps> = ({ index }) => {
  return (
    <motion.article
      initial={{
        rotate: "0deg",
        scale: 0,
        y: 0,
      }}
      whileInView={{
        rotate: "360deg",
        scale: 1,
        y: [0, 150, -150, -150, 0], // Keyframes
      }}
      exit={{
        rotate: "0deg",
      }}
      transition={{
        duration: "2.5",
        repeat: 10,
        repeatType: "reverse", // goes 0 -> 360 -> 0
        ease: "backInOut",
        times: [0, 0.5, 1, 1.5, 2, 2.5],
      }}
      className={cn(
        "absolute left-[5%] h-[113.71px] rounded-[10px] p-3 text-micro text-heading-primary shadow-task-card md:h-[126px]",
        index === 0 && "z-30 w-[306.27px] bg-surface-task-card md:w-[358px]",
        index === 1 && "top-[36.5%] z-20 w-[345.88px] bg-surface-task-card-80",
        index === 2 &&
          "top-[49%] z-10 h-[118.92px] w-[339.59px] bg-surface-task-card-60",
      )}
    >
      <h3 className="ml-8 text-[0.75rem] font-semibold leading-[14.52px]">
        Test
      </h3>

      <div className="grid h-full grid-cols-2 gap-x-2 pb-2">
        {/* Dates + short description */}
        <div className="grid items-center justify-start justify-self-end text-micro">
          <div className="flex items-center gap-x-2">
            <Calendar size={12} />
            <div className="text-nowrap">
              <span className="block">Oct 02, 2024 10:40 PM</span>
              <span className="block">Oct 13, 2024 10:40 PM</span>
            </div>
          </div>
          <div>
            <span className="block">Lorem Impus,Lorem Impus</span>
            <span className="block">Lorem Impus,Lorem Impus</span>
          </div>
        </div>

        {/* Status icons and labels */}
        <div className="flex h-full flex-col items-start justify-evenly justify-self-center text-micro">
          <div className="flex items-center space-x-1">
            <Mail size={14} />
            <p className="font-semibold">
              Send By Email: <span className="font-normal">Yes</span>
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <MessageSquare size={14} />
            <p className="font-semibold">
              Send By SMS: <span className="font-normal">No</span>
            </p>
          </div>

          <div className="flex items-center space-x-1">
            <Clock size={12} />
            <p className="font-semibold">
              Automatic: <span className="font-normal">No</span>
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <Check size={14} />
            <p className="font-semibold">
              Already Sent: <span className="font-normal">No</span>
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
