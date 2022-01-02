import { motion } from "framer-motion";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Project } from "types/Project";
import { AiFillCloseCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsDashCircleFill } from "react-icons/bs";

BsDashCircleFill;
interface Props {
  data: Project;
}

export const ProjectCard = ({ data }: Props) => {
  const [hover, setHover] = useState(false);
  return (
    <a href={data.link} target="_blank">
      <ReactCardFlip
        flipSpeedBackToFront={0.2}
        flipSpeedFrontToBack={0.2}
        isFlipped={hover}
        containerClassName="flex-1 my-3"
        cardStyles={{
          front: {
            flex: 1,
            display: "flex",
          },
          back: {
            flex: 1,
            display: "flex",
          },
        }}
      >
        <motion.div
          onMouseEnter={() => setHover(true)}
          // whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
          className="bg-tertiary-400 p-2 flex flex-col rounded-lg cursor-pointer h-[475px]"
        >
          <div className="self-end flex gap-2 p-1 pb-3">
            <AiFillMinusCircle size={15} className="text-secondary-400" />
            <AiFillCloseCircle size={15} className="text-primary-400" />
          </div>

          <div className="flex flex-1 bg-background p-[3px]">
            <div className={`shadow-sm bg-background p-2 flex flex-col flex-1`}>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex flex-col">
                  <img src={data.logo} className="h-[70px]" />
                  <p className="mt-4 text-sm text-white text-center">
                    {data.desc}
                  </p>
                </div>
              </div>
              <div
                className={`relative contain flex items-center justify-center mt-2 ${
                  data.platform === "Mobile" ? "h-[220px]" : "h-[200px]"
                }`}
              >
                <img
                  src={data.screenshot}
                  style={{ backfaceVisibility: "hidden" }}
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          onMouseLeave={() => setHover(false)}
          // whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
          className="bg-tertiary-400 p-2 flex flex-col rounded-lg cursor-pointer h-[475px]"
        >
          <div className="self-end flex gap-2 p-1 pb-3">
            <AiFillMinusCircle size={15} className="text-secondary-400" />
            <AiFillCloseCircle size={15} className="text-primary-400" />
          </div>

          <div className="flex flex-1 bg-background p-[3px]">
            <div
              className={`shadow-sm bg-background p-2 flex flex-col flex-1 `}
            >
              <h2 className="mt-4 text-lg font-extrabold text-white">
                {data.name}
              </h2>
              <p className="mt-4 text-xs font-extrabold text-white">
                {data.timeFrame}
              </p>
              <p className="mt-4 text-xs font-extrabold text-white">
                Plaform: {data.platform}
              </p>

              <p className="mt-4 text-xs font-extrabold text-white">
                Status: {data.status}
              </p>

              <p className="mt-4 text-sm text-white">{data.role}</p>
              <h3
                className={`text-md leading-6 font-extrabold text-white mt-5`}
              >
                Tech Stack
              </h3>
              <ul className="mt-3 list-disc ml-4 grid grid-cols-2">
                {data.stack.map((item) => (
                  <li key={item} className="text-sm text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </ReactCardFlip>
    </a>
  );
};
