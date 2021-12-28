import React, { useState } from "react";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";

interface Props {
  triggerScrollProjects?: () => void;
  triggerScrollAbout?: () => void;
}

export const Hero = ({ triggerScrollProjects, triggerScrollAbout }: Props) => {
  return (
    <motion.div
      className="min-h-[90vh] flex justify-center flex-col"
      animate={{ opacity: [0, 1] }}
      transition={{
        delay: 0,
        default: { duration: 0.4 },
      }}
    >
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center relative bottom-20">
        <h2 className="text-7xl font-extrabold text-white">
          <div>
            Hi, I'm{" "}
            <span className="font-extrabold text-7xl font-fathur text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 p-2">
              Paul Dolden
            </span>
          </div>
          <div className="pt-4">A full-stack developer.</div>
        </h2>
        <div className="flex gap-4">
          <Button
            altColor
            onClick={triggerScrollProjects}
            text="Stuff I've Built"
            hoverText="Let's Go 👇"
          />
          <Button
            onClick={triggerScrollAbout}
            text="Who I Am"
            hoverText="Let's Go 👇"
          />
        </div>
      </div>
    </motion.div>
  );
};
