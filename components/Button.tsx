import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  altcolor?: boolean;
  text?: string;
  hovertext?: string;
}

export const Button = (props: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{
        scale: 1.1,
        content: "Let's Go",
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
      // @ts-ignore
      type="button"
      onClick={props.onClick}
      className={`${
        props.altcolor ? "bg-primary-400" : "bg-primary-400"
      } mt-10 text-white font-extrabold  py-4 rounded-md flex flex-col flex-1 items-center justify-center lg:w-[350px] lg:text-3xl`}
    >
      {!hover ? (
        <motion.span>{props.text}</motion.span>
      ) : (
        <motion.span
          animate={{ rotateX: 360 }}
          transition={{ type: "spring", duration: 0.7 }}
        >
          {props.hovertext}
        </motion.span>
      )}
    </motion.button>
  );
};
