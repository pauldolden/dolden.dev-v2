import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  altColor?: boolean;
  text?: string;
  hoverText?: string;
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
      className={`${
        props.altColor
          ? "bg-gradient-to-r from-tertiary-600 to-primary-400"
          : "bg-gradient-to-r from-primary-400 to-secondary-400"
      } mt-10 px-10 py-6 text-white font-extrabold text-3xl rounded-md flex flex-col items-center justify-center w-[350px]`}
      {...props}
    >
      {!hover ? (
        <motion.span>{props.text}</motion.span>
      ) : (
        <motion.span
          animate={{ rotateX: 360 }}
          transition={{ type: "spring", duration: 0.7 }}
        >
          {props.hoverText}
        </motion.span>
      )}
    </motion.button>
  );
};
