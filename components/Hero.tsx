import React, { useState } from "react";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";

interface Props {
  triggerScroll?: () => void;
}

export const Hero = ({ triggerScroll }: Props) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="h-[95vh] flex justify-center flex-col">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center relative bottom-20">
        <h2 className="text-7xl font-extrabold text-white">
          <div>
            Hi, I'm{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Paul Dolden
            </span>
          </div>
          <div className="pt-4">A full-stack developer.</div>
        </h2>
        <Button
          onClick={triggerScroll}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {!hover ? (
            <motion.span>Stuff I've Built</motion.span>
          ) : (
            <motion.span
              animate={{ rotateX: 360 }}
              transition={{ type: "spring", duration: 0.7 }}
            >{`Let's Go 👇`}</motion.span>
          )}
        </Button>
      </div>
    </div>
  );
};
